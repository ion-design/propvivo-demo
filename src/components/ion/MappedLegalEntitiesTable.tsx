"use client";
// Generated with Ion on 3/5/2024, 12:05:17 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:10066
import {
   CaretUpDown,
   Globe,
   ArrowRight,
   Bluetooth,
} from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Select from "@/components/ion/Select";
import clsx from "clsx";
type MappedLegalEntitiesTableProps = {
   className?: string;
};

function MappedLegalEntitiesTable({
   className = "",
}: MappedLegalEntitiesTableProps) {
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
                     <h4>Legal Entities</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "legalEntities",
               cell: ({ row: { original: cellData } }) => <>Bella View More</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Code</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "code",
               cell: ({ row: { original: cellData } }) => <>BVM</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Mapped On</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "mappedOn",
               cell: ({ row: { original: cellData } }) => <>12/1/2022</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Mapped By</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "mappedBy",
               cell: ({ row: { original: cellData } }) => <>Nancy Adams</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Service Start Date</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "serviceStartDate",
               cell: ({ row: { original: cellData } }) => <>10/1/2022</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Service End Date</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "serviceEndDate",
               cell: ({ row: { original: cellData } }) => <>-</>,
            },
            {
               header: "Legal Entity Status",
               cell: ({ row: { original: cellData } }) => (
                  <Badge emphasis="medium" color="green" size="md">
                     Active
                  </Badge>
               ),
            },
         ] as ColumnDef<unknown>[],
      []
   );
   return (
      <div
         className={clsx(
            "h-full w-full flex-col flex justify-between gap-5",
            className
         )}
      >
         <div className="w-full flex-col flex px-10 pb-5">
            <Table
               columns={columns}
               data={Array(8).fill({
                  legalEntities: "",
                  code: "",
                  mappedOn: "",
                  mappedBy: "",
                  serviceStartDate: "",
                  serviceEndDate: "",
                  legalEntityStatus: "",
               })}
               className="w-full"
            />
         </div>
         <div className="bg-weak w-full flex justify-between items-center px-10 py-2">
            <div className="text-sm text-sub-foreground">1-10 of 50</div>
            <Pagination />
            <Select
               placeholder="10"
               className="w-fit"
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
   );
}
export default MappedLegalEntitiesTable;
