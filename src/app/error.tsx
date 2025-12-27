"use client";

import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-md w-full rounded-2xl bg-white shadow-xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-7 w-7 text-red-600" />
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">
          Something went wrong
        </h1>

        <span className="text-amber-900 font-semibold">
          Redirect to the home page, Please wait ...
        </span>
      </div>
    </div>
  );
};

export default Error;
