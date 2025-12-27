import { UseFormRegister, FieldErrors, SubmitHandler } from "react-hook-form";

export interface IFormInput {
  email: string;
  password: string;
}

export interface InputsTypes {
  id: string;
  title: string;
  name: string;
  type: string;
  placeholder: string;
}

// form props to => loginFormUi component
export type FormDataProps = {
  register: UseFormRegister<IFormInput>;
  handleSubmit: (
    onValid: SubmitHandler<IFormInput>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: FieldErrors<IFormInput>;
  isSubmitting: boolean;
};

export type LoginFormUiProps = {
  formProps: FormDataProps;
  onSubmit: SubmitHandler<IFormInput>;
  error: string | null;
};
