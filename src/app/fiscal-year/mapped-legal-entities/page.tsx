// Generated with Ion on 3/5/2024, 9:22:05 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:14600
import { CaretUpDown } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import MappedLegalEntitiesTable from "@/components/ion/MappedLegalEntitiesTable";
import Breadcrumbs from "@/components/ion/Breadcrumbs";

function MappedLegalEntitiesPage() {
  return (
    <div className="w-full h-full flex-col flex gap-5 pt-5">
      <div className="w-full flex items-start px-10">
        <Breadcrumbs
          routes={[
            {
              name: "Home",
              path: "/",
            },
            { name: "Setup", path: "/" },
            { name: "Fiscal Year", path: "/fiscal-year" },
            {
              name: "Mapped Legal Entities",
              path: "/fiscal-year/mapped-legal-entities",
            },
          ]}
        />
      </div>
      <MappedLegalEntitiesTable className="w-full h-full" />
    </div>
  );
}
export default MappedLegalEntitiesPage;
