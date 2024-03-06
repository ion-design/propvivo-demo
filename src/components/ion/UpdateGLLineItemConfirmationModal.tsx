"use client";
// Generated with Ion on 3/6/2024, 12:18:59 AM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5362:60894
import { MouseEvent, MouseEventHandler } from "react";
import Button from "@/components/ion/Button";
import { Warning } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import Modal, { ModalProps } from "@/components/ion/Modal";
import UpdateGlLineItemModal from "./UpdateGLLineItemModal";

type UpdateGlLineItemConfirmationModalProps = {
  handleUpdate: MouseEventHandler<HTMLButtonElement>;
  handleCancel: MouseEventHandler<HTMLButtonElement>;
} & ModalProps;

function UpdateGlLineItemConfirmationModal({
  handleUpdate,
  handleCancel,
  ...props
}: UpdateGlLineItemConfirmationModalProps) {
  return (
    <Modal
      showClose={true}
      footer={
        <div className="w-full flex justify-end items-center gap-2 p-5 border-t border-soft-stroke h-fit">
          <Button
            emphasis="medium"
            color="secondary"
            size="md"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            emphasis="high"
            color="primary"
            size="md"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>
      }
      {...props}
    >
      <div className="w-full flex-col flex gap-4 px-10 py-8 h-fit">
        <div className="w-full flex-col flex gap-2">
          <Badge
            iconLeading={<Warning size={12} weight={"bold"} />}
            emphasis="medium"
            color="yellow"
            size="md"
          >
            Update{" "}
          </Badge>
          <div className="text-xl font-semibold text-foreground w-[440px]">
            Update GL Line Item
          </div>
        </div>
        <div className="text-base text-foreground w-[440px]">
          Are you sure you want to update details? Changes will be reflected in
          your offerings immediately.
        </div>
      </div>
    </Modal>
  );
}
export default UpdateGlLineItemConfirmationModal;
