"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowUpDown, LuArrowUp, LuArrowDown } from "react-icons/lu";
import { useState } from "react";

export type TableTypes = {
  id: string | number;
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  progress: number;
  budget: number;
};

export const columns: ColumnDef<TableTypes>[] = [
  {
    accessorKey: "name",
    header: "Name",
    filterFn: (row, columnId, filterValue) =>
      row
        .getValue<string>(columnId)
        .toLowerCase()
        .includes(filterValue.trim().toLowerCase()),
    cell: ({ row, getValue, table }) => {
      const value = getValue<string>();

      const NameCell: React.FC = () => {
        const [isEditing, setIsEditing] = useState(false);
        const [editValue, setEditValue] = useState(value);

        const saveValue = () => {
          const finalValue = editValue.trim() === "" ? value : editValue;
          table.options.data[row.index] = {
            ...table.options.data[row.index],
            name: editValue,
          };
          setEditValue(finalValue);
          setIsEditing(false);
        };

        return isEditing ? (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={saveValue}
            onKeyDown={(e) => e.key === "Enter" && saveValue()}
            className="border px-2 py-1 rounded w-full"
            autoFocus
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded w-full block"
          >
            {editValue}
          </span>
        );
      };

      return <NameCell />;
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();

      const statusStyles: Record<string, string> = {
        Completed: "text-green-700 font-semibold",
        "In Progress": "text-yellow-700",
        "On Hold": "text-red-700",
      };

      return (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            statusStyles[status] ?? "bg-gray-100 text-gray-700"
          }`}
        >
          {status}
        </span>
      );
    },
  },

  {
    accessorKey: "startDate",
    header: "Start Date",
  },
  {
    accessorKey: "endDate",
    header: "End Date",
  },

  {
    accessorKey: "progress",
    header: "Progress",
  },

  {
    accessorKey: "budget",
    header: ({ column }) => {
      const sort = column.getIsSorted();
      return (
        <button
          onClick={() => column.toggleSorting()}
          className="flex items-center gap-2 font-semibold transition-colors"
        >
          Budget
          {sort === "asc" && <LuArrowUp className="w-4 h-4" />}
          {sort === "desc" && <LuArrowDown className="w-4 h-4" />}
          {!sort && <LuArrowUpDown className="w-4 h-4 opacity-50" />}
        </button>
      );
    },
  },
];
