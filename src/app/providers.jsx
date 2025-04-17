// src/app/providers.jsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SidebarProvider } from './componentes/SidebarContext'; // Asegúrate de que esta ruta es correcta

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </NextUIProvider>
  );
}
