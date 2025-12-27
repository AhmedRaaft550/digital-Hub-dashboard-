"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  SortingState,
  getSortedRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from "@tanstack/react-table";

import CustomeBtn from "@/components/ui/CustomeBtn";
import { Input } from "@/components/ui/input";
import { IoMdArrowDropdown } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const statusOptions = ["All", "Completed", "In Progress", "On Hold"];

export function DataTable<
  TData extends { id: string | number; status: string },
  TValue
>({ columns, data }: DataTableProps<TData, TValue>) {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [selectedStatus, setSelectedStatus] = useState("All");

  // => note for the below warning => warning will be ignore by com and performance is okay so no need for memo
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination,
      sorting,
      columnFilters,
      columnVisibility,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
    table.getColumn("status")?.setFilterValue(status === "All" ? "" : status);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4  gap-2">
        <Input
          placeholder="Search by project name..."
          value={String(table.getColumn("name")?.getFilterValue() ?? "")}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="flex-1"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CustomeBtn className="p-2 flex justify-center items-center gap-2 bg-amber-800/20 border-2 border-gray-400 text-sm text-black">
              Status : {selectedStatus} <IoMdArrowDropdown />
            </CustomeBtn>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {statusOptions.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => handleStatusFilter(status)}
              >
                {status}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <section className="w-full">
        <div className="overflow-x-hidden rounded-md border bg-amber-700/50 text-black ">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody className="bg-gray-50">
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={`${
                      Number(row.id) % 2 === 0 ? "bg-amber-900/20" : ""
                    }`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}

                    <TableCell>
                      <Link
                        href={`/dashboard/${data[row.index].id}`}
                        className="block w-full p-3  md:py-2 text-sm font-medium text-white bg-amber-800/80 rounded hover:bg-amber-900 focus:ring-2 focus:ring-amber-500 focus:outline-none text-center transition"
                      >
                        Project Details
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-gray-500"
                  >
                    No results...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-sm text-muted-foreground order-2 sm:order-1">
              Page {pagination.pageIndex + 1} of {table.getPageCount()}
            </div>

            <div className="flex items-center gap-3 order-1 sm:order-2">
              {data.length > 0 && (
                <>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium hidden md:inline">
                      Rows per page
                    </span>
                    <select
                      value={table.getState().pagination.pageSize}
                      onChange={(e) =>
                        table.setPageSize(Number(e.target.value))
                      }
                      className="rounded-md border border-gray-300 bg-white px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {[5, 10].map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                      <option value={data.length}>All</option>
                    </select>
                  </div>

                  <CustomeBtn
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className={`px-4 py-2 bg-amber-800 text-xs sm:text-sm ${
                      !table.getCanPreviousPage()
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                  >
                    Previous
                  </CustomeBtn>

                  <CustomeBtn
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className={`px-4 py-2 bg-amber-800 text-xs sm:text-sm ${
                      !table.getCanNextPage()
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                  >
                    Next
                  </CustomeBtn>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
