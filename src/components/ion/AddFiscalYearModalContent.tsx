// ion/SideNavigation/default: Generated with Ion on 3/4/2024, 9:04:25 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5200:89753
import { X, User, Receipt, Money } from "@phosphor-icons/react/dist/ssr";
import {
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ion/Navigation";
import Sidebar from "@/components/Sidebar";

function SideNavigation() {
  return (
    <Sidebar filled>
      <NavigationMenu>
        <NavigationMenuList className="w-full h-[500px] flex-col flex gap-3 py-5">
          <div className="w-full flex justify-end items-start px-5 pb-5 text-primary-foreground">
            <X size={16} weight={"bold"} />
          </div>
          <NavigationMenuItem className={"px-3"}>
            <NavigationMenuLink
              iconLeading={<User size={16} weight={"fill"} />}
              type={"filled"}
              className="w-full"
            >
              Vendor Setup
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className={"px-3"}>
            <NavigationMenuLink
              iconLeading={<Receipt size={16} weight={"fill"} />}
              type={"filled"}
              className="w-full"
            >
              Invoice &amp; Processing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className={"px-3"}>
            <NavigationMenuLink
              iconLeading={<Money size={16} weight={"fill"} />}
              type={"filled"}
              className="w-full"
            >
              Payments
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Sidebar>
  );
}
export default SideNavigation;
