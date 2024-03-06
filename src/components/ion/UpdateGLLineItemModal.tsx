"use client";
// Generated with Ion on 3/6/2024, 12:21:32 AM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5362:60924
import { Check } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import Modal, { ModalProps } from "@/components/ion/Modal";
type UpdateGlLineItemModalProps = ModalProps;

function UpdateGlLineItemModal({ ...props }: UpdateGlLineItemModalProps) {
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
            GL Line Item Updated
          </div>
        </div>
        <div className="text-base text-foreground w-[440px]">
          GL Line item has been updated successfully. All changes are now
          reflected in your offerings.
        </div>
      </div>
    </Modal>
  );
}
export default UpdateGlLineItemModal;
