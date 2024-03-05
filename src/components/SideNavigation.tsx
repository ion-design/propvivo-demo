"use client";
// ion/SideNavigation/default: Generated with Ion on 3/3/2024, 2:11:39 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5103:7079
import { MouseEvent } from "react";
import {
   Lightning,
   House,
   CaretRight,
   SlidersHorizontal,
   Buildings,
   Receipt,
   HandCoins,
   CurrencyDollar,
   Bank,
   Files,
   Coin,
   PencilSimple,
   BookOpenText,
   Certificate,
   Gear,
   X,
   CurrencyCircleDollar,
   Money,
   CalendarBlank,
   UsersThree,
   CaretLeft,
   Coins,
   User,
   SquaresFour,
} from "@phosphor-icons/react/dist/ssr";
import Button from "@/components/ion/Button";
import {
   NavigationMenuLink,
   NavigationMenuItem,
   NavigationMenu,
   NavigationMenuList,
} from "@/components/ion/Navigation";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ion/Popover";
import QuickActionOverlay from "./QuickActionOverlay";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNavigation() {
   function quickActionClickHandler(e: MouseEvent<HTMLButtonElement>) {
      setExtraNavbarOpen("closed");
   }
   const path = usePathname();
   const [collapsed, setCollapsed] = useState(false);
   const [extraNavbarOpen, setExtraNavbarOpen] =
      useState<keyof typeof extraNavbars>("closed");
   const extraNavbars = {
      closed: <></>,
      accountPayable: (
         <>
            <NavigationMenu>
               <NavigationMenuList className="w-full h-full flex-col flex gap-3 py-5">
                  <div className="w-full flex justify-end items-start px-5 pb-5 text-primary-foreground">
                     <Button
                        iconLeading={<X size={16} weight={"bold"} />}
                        emphasis="low"
                        color="secondary"
                        onClick={() => setExtraNavbarOpen("closed")}
                     />
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
                     {" "}
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
         </>
      ),
      accountReceivable: (
         <NavigationMenu>
            <NavigationMenuList className="w-full h-full flex-col flex gap-3 py-5">
               <div className="w-full flex justify-end items-start px-5 pb-5 text-primary-foreground">
                  <Button
                     iconLeading={<X size={16} weight={"bold"} />}
                     emphasis="low"
                     color="secondary"
                     onClick={() => setExtraNavbarOpen("closed")}
                  />
               </div>

               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<User size={16} weight={"fill"} />}
                     type={"filled"}
                     className="w-full"
                  >
                     Customer
                  </NavigationMenuLink>
               </NavigationMenuItem>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<Receipt size={16} weight={"fill"} />}
                     type={"filled"}
                     className="w-full"
                  >
                     Invoice
                  </NavigationMenuLink>
               </NavigationMenuItem>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<Money size={16} weight={"fill"} />}
                     type={"filled"}
                     className="w-full"
                  >
                     Payment
                  </NavigationMenuLink>
               </NavigationMenuItem>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<Coins size={16} weight={"fill"} />}
                     type={"filled"}
                     className="w-full"
                  >
                     Charges
                  </NavigationMenuLink>
               </NavigationMenuItem>
               <NavigationMenuItem className={"px-3"}>
                  <NavigationMenuLink
                     iconLeading={<SquaresFour size={16} weight={"fill"} />}
                     type={"filled"}
                     className="w-full"
                  >
                     Collection
                  </NavigationMenuLink>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      ),
      setup: (
         <>
            <NavigationMenu>
               <NavigationMenuList className="w-full h-full flex-col flex gap-3 py-5">
                  <div className="w-full flex justify-end items-start px-5 pb-5 text-primary-foreground">
                     <Button
                        iconLeading={<X size={16} weight={"bold"} />}
                        emphasis="low"
                        color="secondary"
                        onClick={() => setExtraNavbarOpen("closed")}
                     />
                  </div>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={
                           <CurrencyCircleDollar size={16} weight={"fill"} />
                        }
                        type={"filled"}
                        className="w-full bg-[#313441]"
                     >
                        Currency
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem
                     className={"px-3"}
                     onClick={() => setExtraNavbarOpen("closed")}
                  >
                     <Link href={"/fiscal-calendar"} legacyBehavior passHref>
                        <NavigationMenuLink
                           selected={path === "/fiscal-calendar"}
                           iconLeading={<Money size={16} weight={"fill"} />}
                           type={"filled"}
                           className="w-full bg-[#313441]"
                        >
                           Fiscal Calendar
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={
                           <CalendarBlank size={16} weight={"fill"} />
                        }
                        type={"filled"}
                        className="w-full bg-[#313441]"
                     >
                        Fiscal Year
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={<UsersThree size={16} weight={"fill"} />}
                        type={"filled"}
                        className="w-full bg-[#313441]"
                     >
                        Chart of Accounts
                     </NavigationMenuLink>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
         </>
      ),
   };
   return (
      <div className="sticky top-0 flex h-full min-h-screen overflow-visible transition-all">
         <Sidebar filled className="h-full min-h-screen">
            <NavigationMenu>
               <NavigationMenuList
                  className={clsx(
                     "w-full flex-col flex gap-3 py-5 h-fit",
                     collapsed && "items-center"
                  )}
               >
                  <Button
                     iconLeading={collapsed ? <CaretRight /> : <CaretLeft />}
                     className={clsx("top-3 right-3", !collapsed && "absolute")}
                     emphasis="low"
                     onClick={() => setCollapsed(!collapsed)}
                  />
                  {!collapsed && (
                     <div className="w-full flex-col flex px-5 py-3">
                        <img
                           className="object-cover h-[54px] w-[137px]"
                           alt="PropVIVO 7"
                           src="/images/ion-side-navigation-filled/propvivo-7.png"
                        />
                     </div>
                  )}
                  <div className="w-full flex justify-center px-3 py-3">
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button
                              iconLeading={
                                 <Lightning size={16} weight={"fill"} />
                              }
                              emphasis="high"
                              color="primary"
                              size="md"
                              onClick={quickActionClickHandler}
                              className={collapsed ? "" : "w-full"}
                           >
                              {!collapsed && "Quick Action"}
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent
                           className="w-full p-0 mt-4"
                           sideOffset={36}
                           side="left"
                        >
                           <QuickActionOverlay />
                        </PopoverContent>
                     </Popover>
                  </div>
                  <NavigationMenuItem className={"px-3"}>
                     <Link href={"/"} legacyBehavior>
                        <NavigationMenuLink
                           onClick={() => setExtraNavbarOpen("closed")}
                           iconLeading={<House size={16} weight={"fill"} />}
                           type={"filled"}
                           className={collapsed ? "" : "w-full"}
                           selected={path === "/"}
                        >
                           {!collapsed && "Dashboard"}
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconTrailing={<CaretRight size={16} weight={"bold"} />}
                        iconLeading={
                           <SlidersHorizontal size={16} weight={"fill"} />
                        }
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                        onClick={() => setExtraNavbarOpen("setup")}
                        selected={
                           extraNavbarOpen === "setup" ||
                           path === "/fiscal-calendar"
                        }
                     >
                        {!collapsed && "Setup"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <Link legacyBehavior href={"/legal-entity"}>
                        <NavigationMenuLink
                           onClick={() => setExtraNavbarOpen("closed")}
                           iconLeading={<Buildings size={16} weight={"fill"} />}
                           type={"filled"}
                           className={collapsed ? "" : "w-full"}
                           selected={path === "/legal-entity"}
                        >
                           {!collapsed && "Legal Entity"}
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={<Receipt size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Budget"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        onClick={() => setExtraNavbarOpen("accountReceivable")}
                        iconTrailing={<CaretRight size={16} weight={"bold"} />}
                        iconLeading={<HandCoins size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Account Receivable"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        onClick={() => setExtraNavbarOpen("accountPayable")}
                        iconTrailing={<CaretRight size={16} weight={"bold"} />}
                        iconLeading={
                           <CurrencyDollar size={16} weight={"fill"} />
                        }
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Account Payable"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconTrailing={<CaretRight size={16} weight={"bold"} />}
                        iconLeading={<Bank size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Bank"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconTrailing={<CaretRight size={16} weight={"bold"} />}
                        iconLeading={<Files size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "General Ledger"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={<Coin size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Trial Balance"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={<PencilSimple size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Reporting"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={<BookOpenText size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Knowledge Base"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={<Certificate size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Training Certification"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className={"px-3"}>
                     <NavigationMenuLink
                        iconLeading={<Gear size={16} weight={"fill"} />}
                        type={"filled"}
                        className={collapsed ? "" : "w-full"}
                     >
                        {!collapsed && "Settings"}
                     </NavigationMenuLink>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
         </Sidebar>
         <div
            className={clsx(
               "bg-[#313441] flex h-auto transition-all",
               extraNavbarOpen === "closed" ? "w-0" : "w-60"
            )}
         >
            {extraNavbars[extraNavbarOpen]}
         </div>
      </div>
   );
}
export default SideNavigation;
