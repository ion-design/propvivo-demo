// Generated with Ion on 3/5/2024, 12:05:16 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5300:9318
import { CaretUpDown } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import SideNavigation from "@/components/SideNavigation";
import MappedLegalEntitiesTable from "@/components/ion/MappedLegalEntitiesTable";
import Breadcrumbs from "@/components/ion/Breadcrumbs";

function MappedLegalEntitiesPage() {
  return (
    <div className="bg-background h-full flex-1 flex-col flex">
      <div className="w-full flex-1 flex-col flex gap-5 pt-5">
        <div className="flex items-start px-10">
          <Breadcrumbs
            routes={[
              { name: "Home", path: "/" },
              { name: "Setup", path: "/" },
              { name: "Fiscal Calendar", path: "/fiscal-calendar" },
              {
                name: "Mapped Legal Entities",
                path: "/fiscal-calendar/mapped-legal-entities",
              },
            ]}
            className="w-full"
          />
        </div>
        <MappedLegalEntitiesTable className="w-full h-full" />
      </div>
    </div>
  );
}
export default MappedLegalEntitiesPage;
