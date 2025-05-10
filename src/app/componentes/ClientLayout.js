// app/ClientLayout.jsx
"use client";

import { usePathname } from 'next/navigation';
import Header from './header';
import SideNav from "./sidebar";
import { Providers } from "../providers";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <Providers>
      {!isLoginPage && <Header />}
      <main className="flex">
        {!isLoginPage && <SideNav />}
        <div className="w-full overflow-x-auto bg-gray-200">
          <div className="sm:h-[calc(99vh-60px)] overflow-auto">
            <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
              <div className="px-20 w-full md:max-w-7/10">{children}</div>
            </div>
          </div>
        </div>
      </main>
    </Providers>
  );
}
