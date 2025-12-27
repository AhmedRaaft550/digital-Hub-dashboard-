"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from "@/validation/schema";
import { IFormInput } from "@/types/validationTypes";
import LoginFormUi from "./LoginFormUi";
import useRedux from "@/hooks/useRedux";
import { useState, useEffect } from "react";
import { loginUser } from "@/services/loginUser";
import { login, logout } from "@/store/authSlice";
import { User } from "@/types/SliceTypes";
import UserProfileUi from "./UserProfileUi";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    resolver: zodResolver(loginSchema),
  });
  const { state, dispatch } = useRedux((state) => state.auth);
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  if (state.isAuthenticated && state.user) {
    return <UserProfileUi user={state.user} onLogout={handleLogout} />;
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setError(null);
      const response = await loginUser(data.email, data.password);
      const user = response.user as User;
      const token = response.token;
      dispatch(login({ user, token }));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <LoginFormUi
      formProps={{ register, handleSubmit, errors, isSubmitting }}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginForm;
