"use client";
// Generated with Ion on 3/5/2024, 9:18:41 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5312:9123
import { Check } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import Modal, { ModalProps } from "./Modal";

type AddFiscalYearModalProps = ModalProps;

function AddFiscalYearModal({ ...props }: AddFiscalYearModalProps) {
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
            Fiscal Year Added
          </div>
        </div>
        <div className="text-base text-foreground w-[440px]">
          Fiscal Year has been added successfully.
        </div>
      </div>
    </Modal>
  );
}
export default AddFiscalYearModal;
