// Generated with Ion on 3/3/2024, 6:32:44 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=3040:22339
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
type IonPaginationItemProps = {
  number?: string;
  type?: "default" | "left" | "right";
  className?: string;
};

function IonPaginationItem({
  number = "1",
  type = "default",
  className = "",
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
