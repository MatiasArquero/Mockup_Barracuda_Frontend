import React from "react";
// Importamos los componentes del módulo Sidebar de shadcn/ui
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// Importamos iconos descriptivos de Lucide React
import { Package, ShoppingCart, Settings } from "lucide-react";

// Definimos que este componente recibirá componentes hijos (children)
interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    // SidebarProvider administra el estado de si el menú está abierto o cerrado
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Componente principal del Menú Lateral */}
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              {/* Título o marca de la aplicación */}
              <SidebarGroupLabel className="text-lg font-bold px-4 py-2">
                Barracuda POS
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {/* Opción 1: Inventario (Activa por ahora) */}
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>
                      <Package className="mr-2 h-4 w-4" />
                      <span>Inventario</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Opción 2: Ventas POS (Inactiva por el momento) */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      <span>Ventas (POS)</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {/* Opción 3: Ajustes */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configuración</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Zona derecha: Contenido Principal de la App */}
        <main className="flex-1 flex flex-col min-w-0 bg-background">
          {/* Barra superior estática con el botón para colapsar/abrir menú */}
          <header className="h-14 border-b flex items-center px-4 gap-4">
            <SidebarTrigger />
            <h1 className="font-semibold text-base">Sistema de Gestión</h1>
          </header>

          {/* El contenido específico de cada vista se inyecta aquí */}
          <div className="p-6 flex-1 overflow-y-auto">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}