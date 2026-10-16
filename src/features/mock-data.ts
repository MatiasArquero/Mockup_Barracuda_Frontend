export type StockState = "En stock" | "Stock bajo" | "Agotado" | "Revisión";
export interface Product {
  id: string; name: string; sku: string; barcode?: string; category: string;
  supplier: string; price: number; stock: number; minStock: number;
  state: StockState; pending?: boolean; favorite?: boolean; active?: boolean;
}
export const products: Product[] = [
  { id: "1", name: "Caña spinning Carbon 2.40m", sku: "PES-001", barcode: "780123400001", category: "Pesca", supplier: "Pesca Austral", price: 54990, stock: 8, minStock: 3, state: "En stock", favorite: true },
  { id: "2", name: "Caña spinning Carbon 2.70m", sku: "PES-002", barcode: "780123400001", category: "Pesca", supplier: "Pesca Austral", price: 62990, stock: 2, minStock: 3, state: "Stock bajo", favorite: true },
  { id: "3", name: "Carrete frontal 4000", sku: "PES-003", barcode: "780123400008", category: "Pesca", supplier: "Pesca Austral", price: 39990, stock: 14, minStock: 4, state: "En stock" },
  { id: "4", name: "Señuelo Rapala 9cm", sku: "PES-004", barcode: "780123400015", category: "Pesca", supplier: "Importadora Delta", price: 8990, stock: 0, minStock: 5, state: "Agotado", pending: true },
  { id: "5", name: "Linterna recargable 1200lm", sku: "CAMP-001", barcode: "780123400022", category: "Camping", supplier: "Outdoor Chile", price: 24990, stock: 7, minStock: 3, state: "En stock", favorite: true },
  { id: "6", name: "Carpa 4 personas impermeable", sku: "CAMP-002", barcode: "780123400039", category: "Camping", supplier: "Outdoor Chile", price: 89990, stock: 1, minStock: 2, state: "Revisión" },
  { id: "7", name: "Cuchillo caza acero", sku: "CAZA-001", barcode: "780123400046", category: "Caza", supplier: "Andes Gear", price: 34990, stock: 5, minStock: 2, state: "En stock" },
  { id: "8", name: "Botas trekking impermeables", sku: "CAMP-003", category: "Camping", supplier: "Andes Gear", price: 74990, stock: 3, minStock: 2, state: "En stock" },
  { id: "9", name: "Kit anzuelos mixtos", sku: "PES-005", barcode: "780123400053", category: "Pesca", supplier: "Importadora Delta", price: 4990, stock: 22, minStock: 8, state: "En stock", favorite: true },
  { id: "10", name: "Chaleco táctico", sku: "CAZA-002", barcode: "780123400060", category: "Caza", supplier: "Andes Gear", price: 45990, stock: 0, minStock: 2, state: "Agotado", active: false },
  { id: "11", name: "Silla plegable camping", sku: "CAMP-004", barcode: "780123400077", category: "Camping", supplier: "Outdoor Chile", price: 19990, stock: 4, minStock: 3, state: "En stock" },
  { id: "12", name: "Producto sin identificar", sku: "PEND-001", category: "Sin categoría", supplier: "Pendiente", price: 0, stock: 0, minStock: 1, state: "Revisión", pending: true },
];
export const categories = [
  { name: "Pesca", items: 5, sub: ["Cañas", "Carretes", "Señuelos", "Líneas", "Anzuelos", "Accesorios", "Plomos", "Flotadores"] },
  { name: "Camping", items: 4, sub: ["Carpas", "Accesorios"] },
  { name: "Caza", items: 2, sub: ["Cuchillería", "Táctico"] },
  { name: "Sin categoría", items: 1, sub: [] },
  { name: "Armas cortantes", items: 0, sub: [] },
  { name: "Armas de caza", items: 0, sub: [] },
  { name: "Armas de defensa", items: 0, sub: [] },
  { name: "Indumentaria", items: 0, sub: [] },
  { name: "Herramientas", items: 0, sub: [] },
];
export const suppliers = [{ name: "Pesca Austral", contact: "contacto@pesca.cl", status: "Activo", debt: "$185.000" }, { name: "Outdoor Chile", contact: "+56 9 5555 1234", status: "Activo", debt: "$420.000" }, { name: "Andes Gear", contact: "ventas@andes.cl", status: "Activo", debt: "$0" }, { name: "Importadora Delta", contact: "delta@import.cl", status: "Inactivo", debt: "$92.000" }];
export const sales = [{ id: "V-1042", date: "Hoy 10:42", items: 3, total: 104970, payment: "Efectivo", state: "Completada" }, { id: "V-1041", date: "Hoy 09:18", items: 1, total: 89990, payment: "Débito", state: "Completada" }, { id: "V-1039", date: "Ayer 17:30", items: 2, total: 54980, payment: "Mixto", state: "Devuelta parcial" }, { id: "V-1038", date: "Ayer 15:04", items: 1, total: 34990, payment: "Efectivo", state: "Anulada" }];
export type InstallmentState = "Pendiente" | "Pagado parcial" | "Vencida" | "Pagado total";
export type RestockRecordType = "RESTOCK" | "Ingreso manual";
export const installments: { supplier: string; due: string; amount: number; state: InstallmentState; type: RestockRecordType }[] = [
  { supplier: "Outdoor Chile", due: "12 Sep", amount: 140000, state: "Pendiente", type: "RESTOCK" },
  { supplier: "Pesca Austral", due: "15 Sep", amount: 185000, state: "Pagado parcial", type: "RESTOCK" },
  { supplier: "Andes Gear", due: "01 Sep", amount: 90000, state: "Vencida", type: "Ingreso manual" },
  { supplier: "Importadora Delta", due: "28 Sep", amount: 92000, state: "Pagado total", type: "RESTOCK" },
];
