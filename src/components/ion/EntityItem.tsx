// Generated with Ion on 3/3/2024, 5:45:35 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5134:67312
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

type EntityItemProps = {
   title?: string;
   property1?: "default" | "variant-2";
   className?: string;
};

function EntityItem({
   title = "Title",
   property1 = "default",
   className = "",
}: EntityItemProps) {
   return (
      <div
         className={clsx(
            {
               "w-full flex justify-between items-center px-3 py-1 rounded-radius h-fit":
                  true,
               "bg-soft": property1 === "variant-2",
            },
            className
         )}
      >
         <div className="text-sm text-foreground">{title}</div>
         <CaretRight size={12} weight={"regular"} />
      </div>
   );
}
export default EntityItem;
