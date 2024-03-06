"use client";
// Generated with Ion on 3/4/2024, 6:45:10 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5233:7426
import { useFormik } from "formik";
import Button from "@/components/ion/Button";
import Drawer, { DrawerProps } from "./Drawer";
import { Select } from "@/components/ion/Select";
import AddFiscalYearModal from "./AddFiscalYearModal";
import { useState } from "react";

function AddFiscalYearDrawer(props: DrawerProps) {
  const [open, setOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        fiscalCalendar: "",
        fiscalYear: "",
      },
      onSubmit: (values) => {
        setOpen(false);
        setSuccessModalOpen(true);
        console.log(values);
      },
      validate: (values) => {
        const errors: any = {};
        if (!values.fiscalCalendar) {
          errors.fiscalCalendar = "Required";
        }
        if (!values.fiscalYear) {
          errors.fiscalYear = "Required";
        }
        return errors;
      },
    });
  return (
    <>
      <AddFiscalYearModal
        open={successModalOpen}
        onOpenChange={setSuccessModalOpen}
      />
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Add fiscal year"
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
              {
                label: "Mar - Feb",
                value: "Mar - Feb",
              },
              {
                label: "Apr - Mar",
                value: "Apr - Mar",
              },
              {
                label: "May - Apr",
                value: "May - Apr",
              },
              {
                label: "Jun - May",
                value: "Jun - May",
              },
              {
                label: "Jul - Jun",
                value: "Jul - Jun",
              },
              {
                label: "Aug - Jul",
                value: "Aug - Jul",
              },
              {
                label: "Sep - Aug",
                value: "Sep - Aug",
              },
              {
                label: "Oct - Sep",
                value: "Oct - Sep",
              },
              {
                label: "Nov - Oct",
                value: "Nov - Oct",
              },
              {
                label: "Dec - Nov",
                value: "Dec - Nov",
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
            hint={
              touched.fiscalYear && errors.fiscalYear ? errors.fiscalYear : ""
            }
            required={true}
            label="Fiscal Calendar"
            className="w-full"
          />
          <Select
            placeholder="2023"
            options={[
              {
                label: "2023",
                value: "2023",
              },
              {
                label: "2024",
                value: "2024",
              },
              {
                label: "2025",
                value: "2025",
              },
              {
                label: "2026",
                value: "2026",
              },
              {
                label: "2027",
                value: "2027",
              },
            ]}
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
            hint={
              touched.fiscalYear && errors.fiscalYear ? errors.fiscalYear : ""
            }
            required={true}
            label="Fiscal Year"
            className="w-full"
          />
        </form>
      </Drawer>
    </>
  );
}
export default AddFiscalYearDrawer;
