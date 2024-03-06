// Generated with Ion on 3/5/2024, 9:22:05 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5305:12683
import IonBreadcrumbItem from "@/components/ion/IonBreadcrumbItem";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
type IonBreadcrumbsProps = {
  count?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  divider?: "default" | "chevron";
};

function IonBreadcrumbs({
  count = "1",
  divider = "default",
}: IonBreadcrumbsProps) {
  return (
    <div className={clsx("flex items-center gap-2 h-fit", className)}>
      <IonBreadcrumbItem icon={true} showIcon={true} text="page" />
    </div>
  );
}
export default IonBreadcrumbs;
