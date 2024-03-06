"use client";
// Generated with Ion on 3/5/2024, 11:14:31 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5362:54874
import Checkbox from "@/components/ion/Checkbox";
import {
  CaretUpDown,
  PencilSimple,
  Funnel,
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
import EditGLLineItemDrawer from "@/components/ion/EditGLLineItemDrawer";

function PropertyPage() {
  function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("buttonOnClickHandler fired");
  }
  function filterClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("filterClickHandler fired");
  }
  const columns = useMemo(
    () =>
      [
        {
          id: "_",
          header: ({ table: table }) => (
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) => {
                if (table.getIsSomePageRowsSelected()) {
                  table.toggleAllPageRowsSelected(false);
                } else {
                  table.toggleAllPageRowsSelected(!!value);
                }
              }}
              aria-label="Select all"
            />
          ),
          cell: ({ row: row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
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
              <h4>GL Code</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "glCode",
          cell: ({ row: { original: cellData } }) => <>100000</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>GL Name</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "glName",
          cell: ({ row: { original: cellData } }) => <>Current Asset</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Main Account</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "mainAccount",
          cell: ({ row: { original: cellData } }) => <>Asset</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Account Header</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "accountHeader",
          cell: ({ row: { original: cellData } }) => <>Cash</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Account Sub Header</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "accountSubHeader",
          cell: ({ row: { original: cellData } }) => <>Current Asset</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Account Category</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "accountCategory",
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
              <h4>Assessment Classification</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "assessmentClassification",
          cell: ({ row: { original: cellData } }) => <>Default</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Projection Classification</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "projectionClassification",
          cell: ({ row: { original: cellData } }) => <>Contract</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Action</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "action",
          cell: ({ row: { original: cellData } }) => (
            <EditGLLineItemDrawer
              trigger={
                <Button
                  iconLeading={<PencilSimple size={20} weight={"bold"} />}
                  emphasis="low"
                  color="secondary"
                  size="lg"
                />
              }
            />
          ),
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
              name: "Chart of Accounts",
              path: "/chart-of-accounts",
            },
            {
              name: "Global COA US-NW Property",
              path: "/chart-of-accounts/global-coa",
            },
            {
              name: "Travis Scott Association COA US-NW-Property",
              path: "/travis-scott-association",
            },
          ]}
        />{" "}
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
      <div className="w-full flex-1 flex-col flex justify-between gap-5">
        <div className="w-full flex-col flex px-10 pb-5">
          <div className="overflow-x-auto">
            <Table
              columns={columns}
              data={Array(5).fill({
                glCode: "",
                glName: "",
                mainAccount: "",
                accountHeader: "",
                accountSubHeader: "",
                accountCategory: "",
                assessmentClassification: "",
                projectionClassification: "",
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
export default PropertyPage;
