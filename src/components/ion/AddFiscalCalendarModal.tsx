"use client";
// Generated with Ion on 3/5/2024, 9:17:21 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5308:18831
import { Check } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import Modal, { ModalProps } from "./Modal";

type AddFiscalCalendarModalModalProps = ModalProps;

function AddFiscalCalendarModalModal({
  ...props
}: AddFiscalCalendarModalModalProps) {
  return (
    <Modal showClose={true} {...props}>
      <div className="w-full flex-col flex gap-4 px-10 py-8 h-fit">
        <div className="w-full flex-col flex gap-2">
          <Badge
            iconLeading={<Check size={12} weight={"bold"} />}
            emphasis="medium"
            color="green"
            size="md"
          >
            Success
          </Badge>
          <div className="text-xl font-semibold text-foreground w-[440px]">
            Fiscal Calendar Updated
          </div>
        </div>
        <div className="text-base text-foreground w-[440px]">
          Fiscal Calendar has been added successfully.
        </div>
      </div>
    </Modal>
  );
}
export default AddFiscalCalendarModalModal;
