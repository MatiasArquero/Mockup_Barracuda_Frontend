# Mockup frontend

La maqueta se implementó por fases visuales dentro de una SPA sin llamadas HTTP:

1. **Shell**: navegación lateral responsive, header, jerarquía visual y estados de venta activa.
2. **Operación**: dashboard, inventario filtrable y POS con búsqueda, carrito y cancelación siempre confirmada. Al confirmar se descarta la orden y se monta una orden nueva vacía.
3. **Catálogos**: categorías, proveedores y estados de Items.
4. **Caja y ventas**: caja, movimientos, historial, devoluciones y anulaciones.
5. **Compras y finanzas**: RESTOCK, cuotas, calendario financiero compartido, reportes y métricas.

Los contratos y datos demostrables viven en `src/features/mock-data.ts`; están tipados para reemplazar el origen mock por adaptadores REST sin cambiar las vistas.

## Brechas de aceptación cubiertas

- El cierre desde el header o desde el POS abre la misma confirmación explícita; cancelar no descarta silenciosamente y la orden siguiente comienza vacía.
- El barcode `780123400001` demuestra el caso duplicado con selección de dos variantes. Un barcode que comienza con `999` demuestra el caso desconocido y ofrece crear un Item `Pending`.
- El cobro muestra un estado exitoso visible. Los Items sin stock muestran advertencia de stock insuficiente y una acción explícita de regularización, sin permitir descontar stock negativo.

## Ajustes de consolidación operativa

- Caja y sus movimientos comparten la vista `Caja actual`; `Movimientos de caja` es ahora un historial descriptivo dentro de esa vista.
- `Historial de cajas` es una vista independiente para revisar la caja abierta y cajas cerradas.
- Los movimientos de caja se ordenan por Hora, Tipo, Medio o Monto mediante los encabezados.
- RESTOCK y cuotas comparten `RESTOCK y cuotas por pagar`, con filtros por Estado y Tipo (`RESTOCK` o `Ingreso manual`) y ordenamiento dinámico.
- Categorías se presentan como tarjetas expandibles para consultar subcategorías con un clic.
- Reportes y Métricas se consolidan en `Reportes y métricas`.
- El menú principal sigue el orden operativo Inventario, RESTOCK, Ventas, Caja, Catálogo y Finanzas.
