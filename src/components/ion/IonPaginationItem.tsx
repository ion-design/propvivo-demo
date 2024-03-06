// Generated with Ion on 3/5/2024, 9:22:05 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=3040:22339
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
type IonPaginationItemProps = {
  number?: string;
  type?: "default" | "left" | "right";
};

function IonPaginationItem({
  number = "1",
  type = "default",
}: IonPaginationItemProps) {
  return (
    <div
      className={clsx(
        {
          "flex justify-center items-center rounded-radius-sm h-fit": true,
          "px-5 py-3 border text-base font-semibold": type === "default",
          "p-3 hover:bg-weak disabled:bg-weak":
            type === "left" || type === "right",
        },
        className
      )}
    >
      {number}
    </div>
  );
}
export default IonPaginationItem;
