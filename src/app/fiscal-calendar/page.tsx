"use client";
// Generated with Ion on 3/3/2024, 6:32:44 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5142:88022
import {
   ArrowRight,
   Bluetooth,
   CaretUpDown,
   Plus,
   Globe,
} from "@phosphor-icons/react/dist/ssr";
import { MouseEvent, useMemo } from "react";
import Button from "@/components/ion/Button";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Breadcrumbs from "@/components/ion/Breadcrumbs";
import Select from "@/components/ion/Select";

function FiscalCalendar() {
   function _0ClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("_0ClickHandler fired");
   }
   function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("buttonOnClickHandler fired");
   }
   const columns = useMemo(
      () =>
         [
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Calendar Name</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "calendarName",
               cell: ({ row: { original: cellData } }) => (
                  <>Jan - Dec ( Monthly)</>
               ),
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Start Month</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "startMonth",
               cell: ({ row: { original: cellData } }) => <>January</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>End Month</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "endMonth",
               cell: ({ row: { original: cellData } }) => <>December</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Frequency</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "frequency",
               cell: ({ row: { original: cellData } }) => <>Monthly</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Mapped Legal Entities</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "mappedLegalEntities",
               cell: ({ row: { original: cellData } }) => (
                  <Button
                     size="sm"
                     color="primary"
                     onClick={_0ClickHandler}
                     emphasis="link"
                     className="underline"
                  >
                     0
                  </Button>
               ),
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Created On</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "createdOn",
               cell: ({ row: { original: cellData } }) => <>01/10/2023</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Created by</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "createdBy",
               cell: ({ row: { original: cellData } }) => <>Nitin Dixit</>,
            },
         ] as ColumnDef<unknown>[],
      []
   );
   return (
      <div className="bg-background h-full flex-col flex justify-between flex-shrink">
         <div className="flex-col flex gap-5 px-10 py-5 flex-grow h-full">
            <div className="w-full flex justify-between items-center">
               <Breadcrumbs route="Setup" root="Home" />
               <Button
                  iconLeading={<Plus size={16} weight={"bold"} />}
                  emphasis="high"
                  color="primary"
                  size="md"
                  onClick={buttonOnClickHandler}
               />
            </div>
            <Table
               bordered
               className="overflow-auto"
               columns={columns}
               data={Array(5).fill({
                  calendarName: "",
                  startMonth: "",
                  endMonth: "",
                  frequency: "",
                  mappedLegalEntities: "",
                  createdOn: "",
                  createdBy: "",
               })}
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
                     iconLeading: <ArrowRight size={16} />,
                     label: "Item 2",
                     value: "Item 2",
                  },
                  {
                     description: "third",
                     iconLeading: <Bluetooth size={16} />,
                     label: "Item 3",
                     suffix: "@third",
                     value: "Item 3",
                  },
               ]}
            />
         </div>
      </div>
   );
}
export default FiscalCalendar;
