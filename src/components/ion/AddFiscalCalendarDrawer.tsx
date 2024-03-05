"use client";
// Generated with Ion on 3/4/2024, 6:22:24 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5191:32393
import { MouseEvent } from "react";
import Button from "@/components/ion/Button";
import { useFormik } from "formik";
import Drawer, { DrawerProps } from "./Drawer";
import Select from "./Select";

function AddFiscalCalendarDrawer(props: DrawerProps) {
   function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("buttonOnClickHandler fired");
   }
   const { values, errors, touched, handleChange, handleBlur } = useFormik({
      initialValues: {
         startMonth: "",
         endMonth: "",
         periodFrequency: "",
         calendarName: "",
      },
      onSubmit: (values) => {
         console.log(values);
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
      <Drawer
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
            />
            <Select
               placeholder="Select period frequency"
               options={[]}
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
            />
            <Select
               placeholder="Auto generate (Jan - Dec)"
               options={[]}
               label="Calendar Name"
               className="w-full"
               value={values.calendarName}
               name="calendarName"
               onValueChange={(value) =>
                  handleChange({
                     target: {
                        name: "calendarName",
                        value,
                     },
                  })
               }
            />
         </form>
      </Drawer>
   );
}
export default AddFiscalCalendarDrawer;
