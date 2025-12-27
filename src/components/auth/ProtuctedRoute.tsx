"use client";
import useRedux from "@/hooks/useRedux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SpinnerCustom } from "../Loader/Spinner";

const ProtuctedRoute = ({
  children,
  role,
}: {
  children: React.ReactNode;
  role: string[];
}) => {
  const { state } = useRedux((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!state.isAuthenticated) {
      router.replace("/login");
    }
  }, [state.isAuthenticated, router]);

  if (!state.isAuthenticated) {
    return <SpinnerCustom />;
  }

  const userRole = state.user?.role || "";
  if (!role.includes(userRole)) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-900">
            Hey, {state.user?.name}
          </h1>
          <p className="text-gray-600 mt-2">
            You are not authorized to view this page, Please contact the admin
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-4 py-2 bg-amber-900 text-white rounded-lg cursor-pointer"
          >
            See the instructions
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtuctedRoute;
