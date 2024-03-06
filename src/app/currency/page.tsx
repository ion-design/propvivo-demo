"use client";
// Generated with Ion on 3/5/2024, 3:47:38 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:34489
import {
  CaretUpDown,
  Plus,
  Globe,
  ArrowRight,
  Bluetooth,
} from "@phosphor-icons/react/dist/ssr";
import { MouseEvent, useMemo } from "react";
import Button from "@/components/ion/Button";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Breadcrumbs from "@/components/ion/Breadcrumbs";
import Select from "@/components/ion/Select";
import AddCurrencyDrawer from "@/components/ion/AddCurrencyDrawer";

function Currency() {
  const columns = useMemo(
    () =>
      [
        {
          header: "Symbol",
          cell: ({ row: { original: cellData } }) => <>$</>,
        },
        {
          header: "Currency Code",
          cell: ({ row: { original: cellData } }) => <>USD</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Country</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "country",
          cell: ({ row: { original: cellData } }) => <>USA</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Currency Name</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "currencyName",
          cell: ({ row: { original: cellData } }) => <>US Dollars</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>General Rounding Rule</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "generalRoundingRule",
          cell: ({ row: { original: cellData } }) => <>0.00</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Created By</h4>
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
    <div className="w-full h-full flex-col flex gap-5 pt-5">
      <div className="w-full flex justify-between items-center px-10">
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
              name: "Currency",
              path: "/currency",
            },
          ]}
        />
        <AddCurrencyDrawer
          trigger={
            <Button
              iconLeading={<Plus size={16} weight={"bold"} />}
              emphasis="high"
              color="primary"
              size="md"
            />
          }
        />
      </div>
      <div className="w-full flex-1 flex-col flex justify-between gap-5">
        <div className="w-full flex-col flex px-10 pb-5">
          <Table
            columns={columns}
            data={Array(13).fill({
              symbol: "",
              currencyCode: "",
              country: "",
              currencyName: "",
              generalRoundingRule: "",
              createdBy: "",
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
                label: "10",
                value: "10",
              },
              {
                label: "20",
                value: "20",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "100",
                value: "100",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
export default Currency;
