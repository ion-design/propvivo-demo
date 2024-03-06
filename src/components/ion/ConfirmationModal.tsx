// Generated with Ion on 3/6/2024, 12:06:28 AM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5308:18035
import { Check, Warning, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import clsx from "clsx";
import Modal, { ModalProps } from "./Modal";

type ConfirmationModalContentProps = {
  title?: string;
  description?: string;
  state?: "success" | "warning" | "error";
  className?: string;
} & ModalProps;

function ConfirmationModalContent({
  title = "Successfully Updated",
  description = "GL Line item has been updated successfully. All changes are now reflected in your offerings.",
  state = "success",
  className,
  ...props
}: ConfirmationModalContentProps) {
  const stateTexts: Record<
    NonNullable<ConfirmationModalContentProps["state"]>,
    string
  > = {
    success: "Success",
    warning: "Warning",
    error: "Error",
  };

  return (
    <Modal {...props}>
      <div className={clsx("flex-col flex gap-4 px-10 py-8 h-fit", className)}>
        <div className="w-full flex-col flex gap-2">
          <Badge
            iconLeading={<Check size={12} weight={"bold"} />}
            emphasis="medium"
            color="green"
            size="md"
          >
            {stateTexts[state]}
          </Badge>
          <div className="text-xl font-semibold text-foreground w-[436px]">
            {title}
          </div>
        </div>
        <div className="text-base text-foreground">{description}</div>
      </div>
    </Modal>
  );
}
export default ConfirmationModalContent;
