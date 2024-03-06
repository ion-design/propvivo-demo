"use client";
// Generated with Ion on 3/4/2024, 6:22:24 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5191:32393
import { MouseEvent, useState } from "react";
import Button from "@/components/ion/Button";
import { useFormik } from "formik";
import Drawer, { DrawerProps } from "./Drawer";
import Select from "./Select";
import AddFiscalCalendarModal from "@/components/ion/AddFiscalCalendarModal";
import Input from "./Input";

function AddFiscalCalendarDrawer(props: DrawerProps) {
   const [successModalOpen, setSuccessModalOpen] = useState(false);
   const [open, setOpen] = useState(false);
   const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
      useFormik({
         initialValues: {
            startMonth: "",
            endMonth: "",
            periodFrequency: "",
            calendarName: "",
         },
         onSubmit: (values) => {
            setOpen(false);
            setSuccessModalOpen(true);
            console.log(values);
         },
         validate: (values) => {
            const errors: any = {};
            if (!values.startMonth) {
               errors.startMonth = "Required";
            }
            if (!values.endMonth) {
               errors.endMonth = "Required";
            }
            if (!values.periodFrequency) {
               errors.periodFrequency = "Required";
            }
            if (!values.calendarName) {
               errors.calendarName = "Required";
            }
            return errors;
         },
      });
   const months = [
      {
         label: "Jan",
         value: "Jan",
      },
      {
         label: "Feb",
         value: "Feb",
      },
      {
         label: "Mar",
         value: "Mar",
      },
      {
         label: "Apr",
         value: "Apr",
      },
      {
         label: "May",
         value: "May",
      },
      {
         label: "Jun",
         value: "Jun",
      },
      {
         label: "Jul",
         value: "Jul",
      },
      {
         label: "Aug",
         value: "Aug",
      },
      {
         label: "Sep",
         value: "Sep",
      },
      {
         label: "Oct",
         value: "Oct",
      },
      {
         label: "Nov",
         value: "Nov",
      },
      {
         label: "Dec",
         value: "Dec",
      },
   ];
   return (
      <>
         <AddFiscalCalendarModal
            open={successModalOpen}
            onOpenChange={setSuccessModalOpen}
         />
         <Drawer
            open={open}
            onOpenChange={setOpen}
            title="Add fiscal calendar"
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
            <form className="w-full flex-1 flex-col flex gap-10 p-5">
               <Select
                  placeholder="Select start month"
                  options={months}
                  required={true}
                  label="Start Month"
                  className="w-full"
                  value={values.startMonth}
                  name="startMonth"
                  onValueChange={(value) =>
                     handleChange({
                        target: {
                           name: "startMonth",
                           value,
                        },
                     })
                  }
                  error={touched.startMonth && errors.startMonth}
                  hint={
                     touched.startMonth && errors.startMonth
                        ? errors.startMonth
                        : ""
                  }
               />
               <Select
                  placeholder="Auto generate (December) "
                  options={
                     values.startMonth
                        ? months.slice(
                             months.findIndex(
                                (month) => month.value === values.startMonth
                             ) + 1
                          )
                        : months
                  }
                  disabled={!values.startMonth}
                  label="End Month"
                  className="w-full"
                  value={values.endMonth}
                  name="endMonth"
                  onValueChange={(value) =>
                     handleChange({
                        target: {
                           name: "endMonth",
                           value,
                        },
                     })
                  }
                  error={touched.endMonth && errors.endMonth}
                  hint={
                     touched.endMonth && errors.endMonth ? errors.endMonth : ""
                  }
               />
               <Select
                  placeholder="Select period frequency"
                  options={[
                     {
                        label: "Monthly",
                        value: "Monthly",
                     },
                     {
                        label: "Quarterly",
                        value: "Quarterly",
                     },
                     {
                        label: "Yearly",
                        value: "Yearly",
                     },
                  ]}
                  required={true}
                  label="Period Frequency"
                  className="w-full"
                  value={values.periodFrequency}
                  name="periodFrequency"
                  onValueChange={(value) =>
                     handleChange({
                        target: {
                           name: "periodFrequency",
                           value,
                        },
                     })
                  }
                  error={touched.periodFrequency && errors.periodFrequency}
                  hint={
                     touched.periodFrequency && errors.periodFrequency
                        ? errors.periodFrequency
                        : ""
                  }
               />
               <Input
                  placeholder="Auto generate (Jan - Dec)"
                  label="Calendar Name"
                  className="w-full"
                  value={values.calendarName}
                  name="calendarName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={touched.calendarName && errors.calendarName}
                  hint={
                     touched.calendarName && errors.calendarName
                        ? errors.calendarName
                        : ""
                  }
               />
            </form>
         </Drawer>
      </>
   );
}
export default AddFiscalCalendarDrawer;
