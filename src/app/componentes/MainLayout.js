// src/app/componentes/MainLayout.js
"use client";

export default function MainLayout({ children }) {
  return (
    <div className="flex-1 flex flex-col">
      <main className="p-4">{children}</main>
    </div>
  );
}

