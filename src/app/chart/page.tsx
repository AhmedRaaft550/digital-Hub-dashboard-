import { usersData } from "@/services/Users";
import { TableTypes } from "../dashboard/coulmn";
import ProtuctedRoute from "@/components/auth/ProtuctedRoute";
import Chart from "./Chart";

export const dynamic = "force-dynamic";
export default async function ChartPage() {
  const data: TableTypes[] = await usersData();

  return (
    <ProtuctedRoute role={["Admin", "Developer"]}>
      <div className="container min-h-screen mx-auto py-10 px-4 flex flex-col justify-center space-y-6">
        <div className="w-full max-w-5xl mx-auto">
          <Chart data={data} />
        </div>
      </div>
    </ProtuctedRoute>
  );
}
