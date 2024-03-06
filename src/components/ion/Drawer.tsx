// ion/Drawer
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "@phosphor-icons/react";
import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import clsx from "clsx";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerClose = DrawerPrimitive.Close;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay> & {
    mask?: boolean;
  }
>(({ className, mask, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    className={clsx(
      "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      {
        "bg-black/60": mask,
      },
      className
    )}
    {...props}
    ref={ref}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerVariants = cva(
  "fixed z-50 gap-4 bg-background shadow-high transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300",
  {
    variants: {
      direction: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      direction: "right",
    },
  }
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerVariants> {
  mask?: boolean;
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(
  (
    { direction = "right", mask = true, className, children, ...props },
    ref
  ) => (
    <DrawerPortal>
      <DrawerOverlay mask={mask} />
      <DrawerPrimitive.Content
        ref={ref}
        className={clsx(drawerVariants({ direction }), className)}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
);
DrawerContent.displayName = DrawerPrimitive.Content.displayName;

type DrawerHeaderProps = {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  bordered?: boolean;
  className?: string;
};
const DrawerHeader = ({
  className,
  icon,
  title,
  subtitle,
  bordered,
}: DrawerHeaderProps) => (
  <div
    className={clsx(
      "flex items-center justify-start gap-2",
      {
        "border-b border-weak-stroke": bordered,
      },
      className
    )}
  >
    {icon && <span>{icon}</span>}
    <div className={clsx("flex flex-col items-start justify-center")}>
      {title && <DrawerTitle>{title}</DrawerTitle>}
      {subtitle && <DrawerDescription>{subtitle}</DrawerDescription>}
    </div>
  </div>
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clsx(
      "flex flex-col-reverse sm:flex-row sm:space-x-2",
      className
    )}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={clsx("text-sm font-semibold text-foreground", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={clsx("text-sm text-sub-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export type DrawerProps = {
  showClose?: boolean;
  trigger?: React.ReactNode;
  className?: string;
  // Header props
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  bordered?: boolean;
  // Footer props
  footer?: React.ReactNode;
  mask?: boolean;
};
const Drawer = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Root> & DrawerProps
>(
  (
    {
      showClose,
      trigger,
      className,
      title,
      subtitle,
      icon,
      bordered,
      footer,
      mask = true,
      direction = "right",
      shouldScaleBackground = true,
      ...props
    },
    ref
  ) => (
    <DrawerPrimitive.Root
      direction={direction}
      {...props}
      shouldScaleBackground={shouldScaleBackground}
    >
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent
        ref={ref}
        className={twMerge(
          clsx(
            "sm:min-w-96 flex max-h-full flex-col overflow-hidden",
            {
              "overflow-y-auto sm:max-w-lg":
                direction === "left" || direction === "right",
              "rounded-b-radius": direction === "top",
              "rounded-t-radius": direction === "bottom",
              "rounded-r-radius": direction === "left",
              "rounded-l-radius": direction === "right",
            },
            className
          )
        )}
        mask={mask}
        direction={direction}
      >
        {showClose && (
          <DrawerPrimitive.Close
            className={clsx(
              "text-base-foreground absolute right-4 top-4",
              "disabled:pointer-events-none"
            )}
          >
            <Button
              iconLeading={<X className="h-4 w-4" />}
              color="secondary"
              emphasis="low"
              size="sm"
            />
            <span className="sr-only">Close</span>
          </DrawerPrimitive.Close>
        )}
        {(title || subtitle || icon) && (
          <DrawerHeader
            title={title}
            subtitle={subtitle}
            icon={icon}
            bordered={bordered}
            className="p-5 pb-0"
          />
        )}
        <div className="flex-1 overflow-y-auto p-5">{props.children}</div>
        {footer && <DrawerFooter className="p-5 pt-0">{footer}</DrawerFooter>}
      </DrawerContent>
    </DrawerPrimitive.Root>
  )
);
Drawer.displayName = "Drawer";
export default Drawer;
export {
  DrawerPrimitive,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
