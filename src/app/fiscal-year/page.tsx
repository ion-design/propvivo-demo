"use client";
// Generated with Ion on 3/5/2024, 9:07:12 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5308:18880
import {
  CaretUpDown,
  Eye,
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
import Select from "@/components/ion/Select";
import Breadcrumbs from "@/components/ion/Breadcrumbs";
import AddFiscalYearDrawer from "@/components/ion/AddFiscalYearDrawer";
import Link from "next/link";

function FiscalYearPage() {
  function _10ClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("_10ClickHandler fired");
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
              <h4>Fiscal Year</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "fiscalYear",
          cell: ({ row: { original: cellData } }) => <>FY 2023</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Fiscal Calendar</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "fiscalCalendar",
          cell: ({ row: { original: cellData } }) => <>Jan - Dec (Monthly)</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Start Period</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "startPeriod",
          cell: ({ row: { original: cellData } }) => <>01/1/2023</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>End Period</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "endPeriod",
          cell: ({ row: { original: cellData } }) => <>12/31/2023</>,
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
            <Link href="/fiscal-year/mapped-legal-entities">
              <Button
                size="sm"
                color="primary"
                emphasis="link"
                className="no-underline"
              >
                10
              </Button>
            </Link>
          ),
        },
        {
          header: "Action",
          cell: ({ row: { original: cellData } }) => (
            <Link href="/fiscal-year/fiscal-period">
              <Button
                iconLeading={<Eye size={20} weight={"fill"} />}
                emphasis="low"
                color="primary"
                size="lg"
              />
            </Link>
          ),
        },
      ] as ColumnDef<unknown>[],
    []
  );
  return (
    <div className="w-full h-full flex-col flex justify-between">
      <div className="w-full flex-col flex gap-5 px-10 py-5">
        <div className="w-full flex justify-between items-center gap-2.5">
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
                name: "Fiscal Year",
                path: "/fiscal-year",
              },
            ]}
          />
          <AddFiscalYearDrawer
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
        <div className="w-full flex-col flex gap-4">
          <Select
            placeholder="Select Fiscal Calendar"
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
            className="w-[250px]"
          />
          <Table
            columns={columns}
            data={Array(6).fill({
              fiscalYear: "",
              fiscalCalendar: "",
              startPeriod: "",
              endPeriod: "",
              mappedLegalEntities: "",
              action: "",
            })}
            className="w-full"
          />
        </div>
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
  );
}
export default FiscalYearPage;
