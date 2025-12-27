"use client";

import { LoginFormUiProps } from "@/types/validationTypes";
import { InputsTypes, IFormInput } from "@/types/validationTypes";
import { inputs } from "@/constant/inputs";
import CustomeBtn from "@/components/ui/CustomeBtn";

const LoginFormUi = ({ formProps, onSubmit, error }: LoginFormUiProps) => {
  const { register, handleSubmit, errors, isSubmitting } = formProps;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-900">
            Login to Your Account
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Enter your credentials to access the dashboard
          </p>
        </div>

        <div className="space-y-4">
          {inputs.map((input: InputsTypes) => (
            <div key={input.id} className="flex flex-col space-y-1">
              <label
                htmlFor={input.name}
                className="text-sm font-medium text-gray-700"
              >
                {input.title}
              </label>
              <input
                id={input.name}
                type={input.type}
                placeholder={input.placeholder}
                aria-invalid={
                  errors[input.name as keyof IFormInput] ? "true" : "false"
                }
                autoComplete={input.name}
                className={`px-4 py-3 rounded-lg border transition-all outline-none focus:ring-2 ${
                  errors[input.name as keyof IFormInput]
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-amber-500 focus:ring-amber-200"
                }`}
                {...register(input.name as keyof IFormInput)}
              />
              {errors[input.name as keyof IFormInput] && (
                <span className="text-red-500 text-xs italic">
                  {errors[input.name as keyof IFormInput]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <CustomeBtn
          disabled={isSubmitting}
          className="w-full py-3 bg-amber-900 text-white cursor-pointer"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </CustomeBtn>
        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default LoginFormUi;
