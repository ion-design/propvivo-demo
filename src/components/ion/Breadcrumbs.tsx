// Generated with Ion on 3/3/2024, 5:45:35 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5134:67301
import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
type BreadcrumbsProps = {
   routes: {
      name: string;
      path: string;
   }[];
   className?: string;
};

function Breadcrumbs({ routes, className = "" }: BreadcrumbsProps) {
   return (
      <div className={clsx("flex items-center gap-3 h-fit", className)}>
         {routes.map((route, index) => (
            <>
               <Link
                  passHref
                  href={route.path}
                  className={twMerge(
                     clsx("text-base font-semibold text-soft-foreground", {
                        "text-foreground": index === routes.length - 1,
                     })
                  )}
               >
                  {route.name}
               </Link>
               <div
                  className={twMerge(
                     clsx(
                        "text-base font-semibold text-soft-foreground first:hidden last:hidden",
                        {
                           "text-foreground": index === routes.length - 2,
                        }
                     )
                  )}
               >
                  /
               </div>
            </>
         ))}
      </div>
   );
}
export default Breadcrumbs;
