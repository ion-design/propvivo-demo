"use client";
// Generated with Ion on 3/5/2024, 10:50:37 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5362:42113
import {
  CaretUpDown,
  Funnel,
  Globe,
  ArrowRight,
  Bluetooth,
} from "@phosphor-icons/react/dist/ssr";
import { MouseEvent, useMemo } from "react";
import Button from "@/components/ion/Button";
import Badge from "@/components/ion/Badge";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Select from "@/components/ion/Select";
import Breadcrumbs from "@/components/ion/Breadcrumbs";
import Link from "next/link";

function GlobalCOAPage() {
  function filterClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("filterClickHandler fired");
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
              <h4>Name</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "name",
          cell: ({ row: { original: cellData } }) => (
            <Link href="/chart-of-accounts/global-coa/travis-scott-association">
              <Button
                size="sm"
                color="primary"
                emphasis="link"
                className="no-underline"
              >
                Travis Scott Association
              </Button>
            </Link>
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
              <h4>Code</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "code",
          cell: ({ row: { original: cellData } }) => <>TSA</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>COA</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "coa",
          cell: ({ row: { original: cellData } }) => (
            <p className="w-[206px]">TS COA US-NW Property</p>
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
              <h4>Mapped On</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "mappedOn",
          cell: ({ row: { original: cellData } }) => <>12/01/2023</>,
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
              <h4>Servvice Start Date</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "servviceStartDate",
          cell: ({ row: { original: cellData } }) => <>10/01/2022</>,
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
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Legal Entity Status</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "legalEntityStatus",
          cell: ({ row: { original: cellData } }) => (
            <Badge emphasis="medium" color="green" size="sm">
              Active
            </Badge>
          ),
        },
      ] as ColumnDef<unknown>[],
    []
  );
  return (
    <div className="w-full h-full flex-col flex">
      <div className="w-full flex-1 flex-col flex gap-5 pt-5">
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
                name: "Chart of Accounts",
                path: "/chart-of-accounts",
              },
              {
                name: "Global COA US-NW Property",
                path: "/chart-of-accounts/global-coa",
              },
            ]}
          />
          <Button
            iconLeading={<Funnel size={16} weight={"bold"} />}
            emphasis="medium"
            color="secondary"
            size="md"
            onClick={filterClickHandler}
          >
            Filter
          </Button>
        </div>
        <div className="w-full h-full flex-col flex justify-between gap-5">
          <div className="w-full flex-col flex px-10 pb-5">
            <div className="overflow-x-auto">
              <Table
                columns={columns}
                data={Array(5).fill({
                  name: "",
                  code: "",
                  coa: "",
                  mappedOn: "",
                  mappedBy: "",
                  servviceStartDate: "",
                  serviceEndDate: "",
                  legalEntityStatus: "",
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
      </div>
    </div>
  );
}
export default GlobalCOAPage;
