// ion/Sidebar: Generated with Ion on 3/3/2024, 2:11:39 PM
import clsx from "clsx";

interface Props {
   className?: string;
   filled?: boolean;
   children?: React.ReactNode | React.ReactNode[];
}

export default function Sidebar({
   children,
   filled = false,
   className,
}: Props) {
   return (
      <div
         className={clsx(
            "w-fit flex relative h-full max-h-screen min-h-0 shrink-0 flex-col justify-between overflow-y-auto",
            {
               "bg-[#1a1e2c]": filled,
               "border-r border-soft-stroke": !filled,
            },
            className
         )}
      >
         {children}
      </div>
   );
}
