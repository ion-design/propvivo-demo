import AddFiscalCalendarDrawer from "@/components/ion/AddFiscalCalendarDrawer";
import Breadcrumbs from "@/components/ion/Breadcrumbs";
import Image from "next/image";

export default function Home() {
   return (
      <div className="bg-background w-full flex-col flex gap-10 p-10 h-fit">
         <Breadcrumbs
            routes={[
               {
                  name: "Home",
                  path: "/",
               },
            ]}
         />
         <AddFiscalCalendarDrawer />
      </div>
   );
}
