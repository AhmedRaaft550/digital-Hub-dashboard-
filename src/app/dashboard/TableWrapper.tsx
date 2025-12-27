"use client";
import { columns, TableTypes } from "./coulmn";
import { DataTable } from "./data-table";

const TableWrapper = ({ data }: { data: TableTypes[] }) => {
  if (!data) return null;
  return <DataTable columns={columns} data={data} />;
};

export default TableWrapper;
