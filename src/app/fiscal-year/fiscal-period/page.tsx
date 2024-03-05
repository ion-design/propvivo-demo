"use client";
// Generated with Ion on 3/5/2024, 12:27:48 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:19709
import {
   CaretUpDown,
   Globe,
   ArrowRight,
   Bluetooth,
} from "@phosphor-icons/react/dist/ssr";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Select from "@/components/ion/Select";
import Breadcrumbs from "@/components/ion/Breadcrumbs";

function FiscalYearPeriodPage() {
   const columns = useMemo(
      () =>
         [
            {
               header: "Period Name",
               cell: ({ row: { original: cellData } }) => <>Period 0</>,
            },
            {
               header: "Type",
               cell: ({ row: { original: cellData } }) => <>Opening</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Period Start Date</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "periodStartDate",
               cell: ({ row: { original: cellData } }) => <>01/01/2023</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Period End Date</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "periodEndDate",
               cell: ({ row: { original: cellData } }) => <>01/01/2023</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Month</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "month",
               cell: ({ row: { original: cellData } }) => <>Jan</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Quarter</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "quarter",
               cell: ({ row: { original: cellData } }) => <>Quarter 1</>,
            },
         ] as ColumnDef<unknown>[],
      []
   );
   return (
      <div className="w-full flex-1 flex-col flex gap-5 pt-5">
         <div className="w-full flex items-start px-10">
            <Breadcrumbs
               routes={[
                  {
                     name: "Home",
                     path: "/",
                  },
                  {
                     name: "Setup",
                     path: "/",
                  },
                  {
                     name: "Fiscal year",
                     path: "/fiscal-year",
                  },
                  {
                     name: "Fiscal period",
                     path: "/fiscal-year/fiscal-period",
                  },
               ]}
            />
         </div>
         <div className="w-full flex-1 flex-col flex justify-between gap-5">
            <div className="w-full flex-col flex px-10 pb-5">
               <Table
                  columns={columns}
                  data={Array(14).fill({
                     periodName: "",
                     type: "",
                     periodStartDate: "",
                     periodEndDate: "",
                     month: "",
                     quarter: "",
                  })}
                  className="w-full"
               />
            </div>
            <div className="bg-weak w-full flex justify-between items-center px-10 py-2">
               <div className="text-sm text-sub-foreground">1-10 of 50</div>
               <Pagination />
               <Select
                  className="w-fit"
                  placeholder="10"
                  options={[
                     {
                        description: "first",
                        iconLeading: <Globe size={16} weight={"regular"} />,
                        label: "Item 1",
                        value: "Item 1",
                     },
                     {
                        description: "second",
                        iconLeading: <ArrowRight size={16} weight={"bold"} />,
                        label: "Item 2",
                        value: "Item 2",
                     },
                     {
                        description: "third",
                        iconLeading: <Bluetooth size={16} weight={"bold"} />,
                        label: "Item 3",
                        suffix: "@third",
                        value: "Item 3",
                     },
                  ]}
               />
            </div>
         </div>
      </div>
   );
}
export default FiscalYearPeriodPage;
