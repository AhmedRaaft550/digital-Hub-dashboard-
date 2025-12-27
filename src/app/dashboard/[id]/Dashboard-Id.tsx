"use client";

import useFetch from "@/hooks/useFetch";
import { SpinnerCustom } from "@/components/Loader/Spinner";
import { UserTypes } from "@/types/projectTypes";

const DashboardId = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useFetch({ randomKey: id });
  const idNumber = Number(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <SpinnerCustom />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-10 font-medium">
        Error: {error.message}
      </div>
    );
  }

  const filteredData = data?.find((item: UserTypes) => item.id === idNumber);

  if (!filteredData) {
    return (
      <div className="text-gray-500 text-center mt-10 font-medium">
        No user found.
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl mt-10 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            {filteredData.name}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-1">
            Status: <span className="font-medium">{filteredData.status}</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-0">
          <div className="bg-amber-100 dark:bg-amber-700 text-amber-900 dark:text-white px-4 py-2 rounded-lg shadow-sm text-center transition hover:scale-105 duration-200">
            Start: {filteredData.startDate}
          </div>
          <div className="bg-red-100 dark:bg-red-700 text-red-900 dark:text-white px-4 py-2 rounded-lg shadow-sm text-center transition hover:scale-105 duration-200">
            End: {filteredData.endDate}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          {filteredData.desc}
        </p>
      </div>
    </section>
  );
};

export default DashboardId;
