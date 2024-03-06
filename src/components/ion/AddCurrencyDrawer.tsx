"use client";
// Generated with Ion on 3/5/2024, 3:54:54 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:38283
import { useState } from "react";
import Button from "@/components/ion/Button";
import { useFormik } from "formik";
import FileUpload from "@/components/ion/FileUpload";
import Input from "@/components/ion/Input";
import Select from "@/components/ion/Select";
import Drawer, { DrawerProps } from "@/components/ion/Drawer";
import AddCurrencyModal from "./AddCurrencyModal";

function AddCurrencyDrawer(props: DrawerProps) {
  const [open, setOpen] = useState(false);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        country: "",
        currencyCode: "",
        currencyName: "",
        generalRoundingRule: "",
        currencySymbol: null,
      },
      onSubmit: () => {
        setOpen(false);
        setSuccessModalOpen(true);
      },
      validate: (values) => {
        const errors: any = {};
        if (!values.country) {
          errors.country = "Required";
        }
        if (!values.currencyCode) {
          errors.currencyCode = "Required";
        }
        if (!values.currencyName) {
          errors.currencyName = "Required";
        }
        if (!values.generalRoundingRule) {
          errors.generalRoundingRule = "Required";
        }
        if (!values.currencySymbol) {
          errors.currencySymbol = "Required";
        }
        return errors;
      },
    });
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  return (
    <>
      <AddCurrencyModal
        onOpenChange={setSuccessModalOpen}
        open={successModalOpen}
      />

      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Add currency"
        footer={
          <div className="w-full flex-1 flex justify-end items-end gap-3">
            <Button
              emphasis="medium"
              color="secondary"
              size="md"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Cancel
            </Button>
            <Button
              emphasis="high"
              color="primary"
              size="md"
              type="submit"
              onClick={() => handleSubmit()}
              className="w-full"
            >
              Submit
            </Button>
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
            value={values.country}
            onValueChange={(value) =>
              handleChange({ target: { name: "country", value } })
            }
            error={touched.country && errors.country}
            required={true}
            label="Country"
            className="w-full"
            hint={touched.country && errors.country ? errors.country : ""}
          />
          <Input
            placeholder="Currency Code"
            required={true}
            label="Currency Code"
            value={values.currencyCode}
            onBlur={handleBlur}
            onChange={(e) => {
              handleChange({
                target: {
                  name: "currencyCode",
                  value: e.target.value,
                },
              });
            }}
            error={touched.currencyCode && errors.currencyCode}
            hint={
              errors.currencyCode && touched.currencyCode
                ? errors.currencyCode
                : ""
            }
            className="w-full"
          />
          <Input
            placeholder="Currency Name"
            required={true}
            label="Currency Name"
            value={values.currencyName}
            onBlur={handleBlur}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "currencyName",
                  value: e.target.value,
                },
              })
            }
            hint={
              touched.currencyName && errors.currencyName
                ? errors.currencyName
                : ""
            }
            error={touched.currencyName && errors.currencyName}
            className="w-full"
          />
          <Input
            placeholder="General Rounding Rule"
            required={true}
            label="General Rounding Rule"
            value={values.generalRoundingRule}
            onBlur={handleBlur}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "generalRoundingRule",
                  value: e.target.value,
                },
              })
            }
            hint={
              touched.generalRoundingRule && errors.generalRoundingRule
                ? errors.generalRoundingRule
                : ""
            }
            error={touched.generalRoundingRule && errors.generalRoundingRule}
            className="w-full"
          />
          <FileUpload
            label="Currency Symbol"
            placeholder="Select File"
            value={values.currencySymbol}
            onChange={(file) =>
              handleChange({ target: { name: "currencySymbol", value: file } })
            }
            hint={
              touched.currencySymbol && errors.currencySymbol
                ? errors.currencySymbol
                : ""
            }
            error={touched.currencySymbol && errors.currencySymbol}
            className="w-full"
          />
        </form>
      </Drawer>
    </>
  );
}
export default AddCurrencyDrawer;
