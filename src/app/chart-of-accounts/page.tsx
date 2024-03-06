"use client";
// Generated with Ion on 3/5/2024, 4:09:39 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5330:69447
import {
  CaretUpDown,
  Plus,
  Globe,
  ArrowRight,
  Bluetooth,
  Funnel,
} from "@phosphor-icons/react/dist/ssr";
import { MouseEvent, useMemo } from "react";
import Button from "@/components/ion/Button";
import Badge from "@/components/ion/Badge";
import { MoreVertical } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Select from "@/components/ion/Select";
import Breadcrumbs from "@/components/ion/Breadcrumbs";
import Link from "next/link";
import EditCoADrawer from "@/components/ion/EditCoADrawer";

function ChartOfAccountsPage() {
  function _0ClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("_0ClickHandler fired");
  }

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
            <Link href="/chart-of-accounts/global-coa">
              <Button
                size="sm"
                color="primary"
                emphasis="link"
                className="no-underline"
              >
                Global COA US-NW Property
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
              <h4>Legal Entity Type</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "legalEntityType",
          cell: ({ row: { original: cellData } }) => <>Property</>,
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
              <h4>Region</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "region",
          cell: ({ row: { original: cellData } }) => <>North East</>,
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
              className="no-underline"
            >
              0
            </Button>
          ),
        },
        {
          header: "Status",
          cell: ({ row: { original: cellData } }) => (
            <Badge emphasis="medium" color="green" size="sm">
              Active
            </Badge>
          ),
        },
        {
          header: "Action",
          cell: ({ row: { original: cellData } }) => <MoreVertical size={16} />,
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
            ]}
          />
          <EditCoADrawer
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
        <div className="w-full flex-1 flex-col flex gap-3">
          <div className="w-full flex items-center gap-5 px-10">
            <Select
              placeholder="Legal Entity Type"
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
              <Table
                columns={columns}
                data={Array(14).fill({
                  name: "",
                  legalEntityType: "",
                  country: "",
                  region: "",
                  mappedLegalEntities: "",
                  status: "",
                  action: "",
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
      </div>
    </div>
  );
}
export default ChartOfAccountsPage;
