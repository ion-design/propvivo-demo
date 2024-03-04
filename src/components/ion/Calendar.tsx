"use client";
// ion/DatePicker/Calendar: Generated with Ion on 3/3/2024, 3:13:11 PM
import * as React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { DayPicker } from "react-day-picker";
import clsx from "clsx";
import { buttonVariants } from "@/components/ion/Button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: clsx(
          buttonVariants({ color: "secondary", emphasis: "low" }),
          "h-8 w-8 bg-transparent p-0"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full space-y-1",
        head_row: "flex border-b border-weak-stroke py-2.5 justify-between",
        head_cell: "text-sub-foreground rounded-radius w-9 font-normal text-sm",
        row: "flex w-full gap-1 mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-radius first:[&:has([aria-selected])]:rounded-l-radius last:[&:has([aria-selected])]:rounded-r-radius focus-within:relative focus-within:z-20",
        day: "h-8 w-8 p-0 font-normal aria-selected:bg-primary rounded-radius hover:bg-primary-lightest focus:primary-focus",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-primary-lighter text-primary-darker",
        day_outside:
          "day-outside text-soft-foreground aria-selected:text-weak-foreground",
        day_disabled: "text-weak-foreground",
        day_range_middle:
          "aria-selected:bg-primary-lighter aria-selected:text-primary-dark",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <CaretLeft className="h-4 w-4" />,
        IconRight: () => <CaretRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
