// Generated with Ion on 3/5/2024, 9:22:05 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5305:12673
import { House } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
type IonBreadcrumbItemProps = {
  icon?: boolean;
  showIcon?: boolean;
  text?: string;
};

function IonBreadcrumbItem({
  icon = true,
  showIcon = true,
  text = "page",
}: IonBreadcrumbItemProps) {
  return (
    <div className={clsx("flex items-center gap-1 h-fit", className)}>
      {showIcon && <House size={16} weight={"bold"} />}
      <div className="text-base">{text}</div>
    </div>
  );
}
export default IonBreadcrumbItem;
