import { useState } from "react";
// Importamos nuestros datos ficticios e interfaces
import { products as MOCK_PRODUCTS, type Product } from "../mock-data";

// Importamos componentes de UI de shadcn
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Importamos iconos
import { Plus, RefreshCw, Search } from "lucide-react";

export function InventoryView() {
  // useState es un Hook de React. Guarda el estado de la búsqueda en texto.
  const [searchTerm, setSearchTerm] = useState("");

  // Filtramos la lista en tiempo real según lo que el usuario escribe en el Input
  const filteredProducts = MOCK_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Función helper para pintar la etiqueta de Stock según la condición
  const renderStatusBadge = (status: Product["state"]) => {
    switch (status) {
      case "En stock":
        return <Badge className="bg-emerald-600 hover:bg-emerald-700">En stock</Badge>;
      case "Stock bajo":
        return <Badge variant="outline" className="text-amber-600 border-amber-600">Stock bajo</Badge>;
      case "Agotado":
        return <Badge variant="destructive">Agotado</Badge>;
      case "Revisión":
        return <Badge variant="outline" className="text-orange-600 border-orange-600">Revisión</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. ENCABEZADO DE LA VISTA Y BOTONES DE ACCIÓN */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Inventario de Productos</h2>
          <p className="text-muted-foreground text-sm">
            Gestiona el stock, precios y catálogo de tu local.
          </p>
        </div>

        {/* Botones de acción principales (Aún no ejecutan lógica) */}
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Restock
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Agregar Item
          </Button>
        </div>
      </div>

      {/* 2. BARRA DE BÚSQUEDA Y FILTROS */}
      <div className="flex items-center gap-2 max-w-sm relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre o SKU..."
          className="pl-8"
          value={searchTerm}
          // Cada vez que el usuario escribe, actualizamos el estado searchTerm
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 3. TABLA DE PRODUCTOS */}
      <div className="border rounded-lg bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SKU</TableHead>
              <TableHead>Producto</TableHead>
              <TableHead>Categoría</TableHead>
              <TableHead className="text-right">Precio</TableHead>
              <TableHead className="text-center">Stock</TableHead>
              <TableHead>Estado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Si no hay productos que coincidan con la búsqueda */}
            {filteredProducts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No se encontraron productos.
                </TableCell>
              </TableRow>
            ) : (
              /* Mapeamos la lista de productos filtrados para generar filas HTML */
              filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-mono text-xs">{product.sku}</TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="text-right">${product.price.toLocaleString("es-CL")}</TableCell>
                  <TableCell className="text-center font-semibold">{product.stock}</TableCell>
                  <TableCell>{renderStatusBadge(product.state)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}