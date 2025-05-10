'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { Avatar, Drawer } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import {
    Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@nextui-org/dropdown';
import { NavItems } from './navItems';
import { Menu } from 'lucide-react';

export default function Header() {
  const navItems = NavItems();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-between">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
        prefetch={false}
      >
        <span className="w-8 h-8 border bg-accent rounded-full content-center justify-items-center">
          <img src="./ranita_verde.png" className="h-5"></img>
        </span>
        <span className="text-teal-500">Ranita</span>
        <span>Sana</span>
      </Link>

      <div className="ml-4 flex items-center gap-3">
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Button
                isIconOnly
                variant="bordered"
                className="overflow-hidden rounded-full"
                >
                <Avatar
                    src="https://github.com/shadcn.png"
                    name="User"
                    size="sm"
                />
                </Button>
            </DropdownTrigger>

            <DropdownMenu >
                <DropdownItem key="account" className="font-semibold" isDisabled>
                My Account
                </DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="support">Support</DropdownItem>
                <DropdownItem key="logout" color="danger">
                Logout
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>

        <button onClick={() => setIsOpen(true)} className="block sm:hidden">
            <Menu size={24} />
        </button>

        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            placement="right"
            size="xs"
        >
            <Drawer.Body>
                <div className="flex flex-col gap-1 py-4 overflow-y-auto">
                    {navItems.map((navItem, idx) => (
                    <Link
                        key={idx}
                        href={navItem.href}
                        onClick={() => setIsOpen(false)}
                        className={`relative flex items-center space-x-2 py-1.5 px-2 rounded-md text-sm ${
                        navItem.active
                            ? 'bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                            : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                        {navItem.icon}
                        <span>{navItem.name}</span>
                        </div>
                    </Link>
                    ))}
                </div>
            </Drawer.Body>
        </Drawer>
      </div>
    </header>
  );
}
