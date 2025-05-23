'use client';
import React, { Fragment, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavItems } from './navItems';
import Link from 'next/link';
import { Tooltip } from "@heroui/react";

export default function SideNav() {
  const navItems = NavItems();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('sidebarExpanded');
    if (saved !== null) setIsSidebarExpanded(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('sidebarExpanded', JSON.stringify(isSidebarExpanded));
    }
  }, [isSidebarExpanded, isClient]);

  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded);

  if (!isClient) return null; // ← esto es clave

  const sidebarWidth = isSidebarExpanded ? 'w-[200px]' : 'w-[68px]';

  return (
    <div >
      <div
        className={`${sidebarWidth} border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-accent`}
      >
        <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden">
          {/* Top */}
          <div className="mt-4 relative pb-2">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, idx) => {
                if (item.position === 'top') {
                  return (
                    <Fragment key={idx}>
                      <SideNavItem
                        label={item.name}
                        icon={item.icon}
                        path={item.href}
                        active={item.active}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>

          {/* Bottom */}
          <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
            {navItems.map((item, idx) => {
              if (item.position === 'bottom') {
                return (
                  <Fragment key={idx}>
                    <SideNavItem
                      label={item.name}
                      icon={item.icon}
                      path={item.href}
                      active={item.active}
                      isSidebarExpanded={isSidebarExpanded}
                    />
                  </Fragment>
                );
              }
            })}
          </div>
        </aside>

        <div className="mt-[calc(calc(90vh)-40px)] relative">
          <button
            type="button"
            className="absolute bottom-32 bg-white right-[-12px] flex h-6 w-6 items-center justify-center border border-muted-foreground/20 rounded-full bg-accent shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={16} className="stroke-foreground" />
            ) : (
              <ChevronRight size={16} className="stroke-foreground" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export const SideNavItem = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
            active
              ? 'font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
              : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
          }`}
        >
          <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
            {icon}
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <Tooltip content={label} placement="right" delay={70}>
          <Link
            href={path}
            className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
              active
                ? 'font-base text-sm bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
            }`}
          >
            <div className="relative font-base text-sm p-2 flex flex-row items-center space-x-2 rounded-md duration-100">
              {icon}
            </div>
          </Link>
        </Tooltip>
      )}
    </>
  );
};
