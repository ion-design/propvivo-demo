// ion/Checkbox: Generated with Ion on 3/5/2024, 11:14:31 PM
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "@phosphor-icons/react";
import Label from "@/components/ion/Label";

import clsx from "clsx";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: string;
    description?: string;
    helper?: string;
  }
>(
  (
    { className, label, description, required, helper, id: passedId, ...props },
    ref
  ) => {
    const generatedId = React.useId();
    const id = passedId || generatedId;
    return (
      <span className="flex items-center gap-2">
        <CheckboxPrimitive.Root
          ref={ref}
          className={clsx(
            "peer h-5 w-5 shrink-0 overflow-hidden rounded border bg-transparent transition-colors hover:border-sub-foreground",
            "focus-visible:primary-focus",
            "data-[state=checked]:bg-primary data-[state=indeterminate]:bg-primary data-[state=checked]:text-primary-foreground data-[state=indeterminate]:text-primary-foreground",
            "disabled:pointer-events-none disabled:bg-soft disabled:text-soft-foreground disabled:data-[state=checked]:bg-soft disabled:data-[state=indeterminate]:bg-soft disabled:data-[state=checked]:text-soft-foreground disabled:data-[state=indeterminate]:text-soft-foreground",
            "group",
            className
          )}
          {...props}
          id={id}
        >
          <CheckboxPrimitive.Indicator
            className={clsx("flex items-center justify-center text-current")}
          >
            <Check
              size={15}
              weight="bold"
              className={
                "z-10 hidden transition-none group-data-[state=checked]:block"
              }
            />
            <Minus
              size={15}
              weight="bold"
              className={"hidden group-data-[state=indeterminate]:block"}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <Label
            htmlFor={id}
            required={required}
            disabled={props.disabled}
            description={description}
            helper={helper}
          >
            {label}
          </Label>
        )}
      </span>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
