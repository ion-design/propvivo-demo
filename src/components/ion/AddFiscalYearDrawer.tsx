"use client";
// Generated with Ion on 3/4/2024, 6:45:10 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5233:7426
import { useFormik } from "formik";
import Button from "@/components/ion/Button";
import Drawer, { DrawerProps } from "./Drawer";
import { Select } from "@/components/ion/Select";
import AddFiscalYearModal from "./AddFiscalYearModal";

function AddFiscalYearDrawer(props: DrawerProps) {
  const { values, errors, touched, handleChange, handleBlur } = useFormik({
    initialValues: {
      fiscalCalendar: "",
      fiscalYear: "",
    },
    onSubmit: () => {},
  });
  return (
    <Drawer
      title="Add fiscal year"
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
          <AddFiscalYearModal
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
      <form className="flex-col flex gap-10 p-5">
        <Select
          placeholder="Jan - Dec"
          options={[
            {
              label: "Jan - Dec",
              value: "Jan - Dec",
            },
            {
              label: "Feb - Jan",
              value: "Feb - Jan",
            },
          ]}
          value={values.fiscalCalendar}
          onValueChange={(value) =>
            handleChange({
              target: {
                name: "fiscalCalendar",
                value,
              },
            })
          }
          error={touched.fiscalYear && errors.fiscalYear}
          required={true}
          label="Fiscal Calendar"
          className="w-full"
        />
        <Select
          placeholder="2023"
          options={[]}
          onValueChange={(value) =>
            handleChange({
              target: {
                name: "fiscalYear",
                value,
              },
            })
          }
          value={values.fiscalYear}
          error={touched.fiscalYear && errors.fiscalYear}
          required={true}
          label="Fiscal Year"
          className="w-full"
        />
      </form>
    </Drawer>
  );
}
export default AddFiscalYearDrawer;
