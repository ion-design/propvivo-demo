"use client";
// Generated with Ion on 3/5/2024, 3:54:54 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:38283
import { MouseEvent } from "react";
import { User, X } from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/ion/Button";
import { useFormik } from "formik";
import FileUpload from "@/components/ion/FileUpload";
import Input from "@/components/ion/Input";
import Select from "@/components/ion/Select";
import Drawer, { DrawerProps } from "@/components/ion/Drawer";
import AddCurrencyModal from "./AddCurrencyModal";

function AddCurrencyDrawer(props: DrawerProps) {
  function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("buttonOnClickHandler fired");
  }
  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      country: "",
      currencyCode: "",
      currencyName: "",
      generalRoundingRule: "",
      currencySymbol: "",
    },
    onSubmit: () => {},
  });
  return (
    <Drawer
      title="Add currency"
      footer={
        <div className="w-full flex-1 flex justify-end items-end gap-3">
          <Button
            emphasis="medium"
            color="secondary"
            size="md"
            className="w-full"
          >
            Cancel
          </Button>
          <AddCurrencyModal
            trigger={
              <Button
                emphasis="high"
                color="primary"
                size="md"
                type="submit"
                className="w-full"
              >
                Submit
              </Button>
            }
          />
        </div>
      }
      {...props}
    >
      <form className="w-full flex-1 flex-col flex gap-10">
        <Select
          placeholder="United States (+1)"
          options={[
            {
              description: "(+1)",
              label: "United States",
              value: "United States",
            },
            {
              description: "(+93)",
              label: "Afghanistan",
              value: "Afghanistan",
            },
            {
              description: "(+355)",
              label: "Albania",
              value: "Albania",
            },
            {
              description: "(+91)",
              label: "India",
              value: "India",
            },
          ]}
          required={true}
          label="Country"
          className="w-full"
        />
        <Input
          placeholder="Currency Code"
          required={true}
          label="Currency Code"
          value={values.currencyCode}
          onChange={(e) => {
            handleChange({
              target: {
                name: "currencyCode",
                value: e.target.value,
              },
            });
          }}
          className="w-full"
        />
        <Input
          placeholder="Currency Name"
          required={true}
          label="Currency Name"
          value={values.currencyName}
          onChange={(e) =>
            handleChange({
              target: {
                name: "currencyName",
                value: e.target.value,
              },
            })
          }
          className="w-full"
        />
        <Input
          placeholder="Currency Code"
          required={true}
          label="General Rounding Rule"
          value={values.generalRoundingRule}
          onChange={(e) =>
            handleChange({
              target: {
                name: "generalRoundingRule",
                value: e.target.value,
              },
            })
          }
          className="w-full"
        />
        <FileUpload
          text="file.png"
          label="Currency Symbol"
          showHint={false}
          showLabel={true}
          placeholder="Select File"
          className="w-full"
        />
      </form>
    </Drawer>
  );
}
export default AddCurrencyDrawer;
