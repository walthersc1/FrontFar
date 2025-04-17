"use client";
import {  
  ChevronFirst,
  CircleUserRound,
  MoreVertical,
  ChevronLast,
} from "lucide-react";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { useSidebar } from './SidebarContext'; 

export default function Navebar({ children }) {
  const { isOpen, setIsOpen } = useSidebar();

  return (
    <aside className="min-h-screen text-white">
      <nav className="h-full flex flex-col bg-blue-900 border-r shadow-sm fixed md:relative z-50">
        <div className="p-4 flex justify-between items-center">
          <img
            src="/next.svg"
            className={`overflow-hidden transition-all ${isOpen ? "w-32" : "w-0"}`}
            alt="logo"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-black"
          >
            {isOpen ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <ul className="px-3">{children}</ul>

        
      </nav>
    </aside>
  );
};



export function NavebarItem({ icon, text, href }) {
  const { isOpen } = useSidebar();
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <li className="my-1">
      <Link
        href={href}
        className={`relative flex items-center py-3 px-3 font-medium rounded-md cursor-pointer transition-colors group w-full
          ${
            isActive
              ? "bg-gradient-to-tr from-white to-blue-200 text-blue-900"
              : "hover:bg-indigo-50 hover:text-blue-900"
          }
        `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            isOpen ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
      </Link>
    </li>
  );
}
