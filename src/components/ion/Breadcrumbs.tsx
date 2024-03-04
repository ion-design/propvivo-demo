// Generated with Ion on 3/3/2024, 5:45:35 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5134:67301
import clsx from "clsx";
type BreadcrumbsProps = {
   route?: string;
   root?: string;
   className?: string;
};

function Breadcrumbs({
   route = "Legal Entity",
   root = "Home",
   className = "",
}: BreadcrumbsProps) {
   return (
      <div className={clsx("flex items-center gap-3 h-fit", className)}>
         <div className="text-base font-semibold text-soft-foreground">
            {root}
         </div>
         <div className="text-base font-semibold text-foreground">/</div>
         <div className="text-base font-semibold text-foreground">{route}</div>
      </div>
   );
}
export default Breadcrumbs;
