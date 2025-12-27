import TableWrapper from "./TableWrapper";
import { usersData } from "@/services/Users";
import { TableTypes } from "./coulmn";
import ProtuctedRoute from "@/components/auth/ProtuctedRoute";
export const dynamic = "force-dynamic";
export default async function DemoPage() {
  const data: TableTypes[] = await usersData();

  return (
    <ProtuctedRoute role={["Admin", "ProjectManager"]}>
      <div className="container mx-auto py-10">
        <TableWrapper data={data} />
      </div>
    </ProtuctedRoute>
  );
}
