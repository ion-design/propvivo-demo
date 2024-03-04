"use client";
// Generated with Ion on 3/3/2024, 3:02:54 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5103:43240
import { useState, MouseEvent } from "react";
import {
   MagnifyingGlass,
   Phone,
   Calendar,
   ChatCenteredDots,
   Bell,
} from "@phosphor-icons/react/dist/ssr";
import Input from "@/components/ion/Input";
import Button from "@/components/ion/Button";
import Avatar from "@/components/ion/Avatar";
import clsx from "clsx";

type TopBarProps = {
   className?: string;
};

function TopBar({ className = "" }: TopBarProps) {
   const [inputValue, setInputValue] = useState("");
   function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("buttonOnClickHandler fired");
   }
   return (
      <div
         className={clsx(
            "bg-weak w-full flex justify-end items-center gap-5 px-10 py-3 h-fit",
            className
         )}
      >
         <Input
            iconTrailing={<MagnifyingGlass size={16} weight={"regular"} />}
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-[250px]"
         />
         <div className="flex items-center gap-1">
            <Button
               iconLeading={<Phone size={20} weight={"fill"} />}
               emphasis="low"
               color="secondary"
               size="lg"
               onClick={buttonOnClickHandler}
            />
            <Button
               iconLeading={<Calendar size={20} weight={"fill"} />}
               emphasis="low"
               color="secondary"
               size="lg"
               onClick={buttonOnClickHandler}
            />
            <Button
               iconLeading={<ChatCenteredDots size={20} weight={"fill"} />}
               emphasis="low"
               color="secondary"
               size="lg"
               onClick={buttonOnClickHandler}
            />
            <Button
               iconLeading={<Bell size={20} weight={"fill"} />}
               emphasis="low"
               color="secondary"
               size="lg"
               onClick={buttonOnClickHandler}
            />
            <Avatar
               size="md"
               src="https://i.ibb.co/jrmkxZZ/placeholder-Person.png"
            />
         </div>
      </div>
   );
}
export default TopBar;
