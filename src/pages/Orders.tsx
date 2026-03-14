import AppShell from "@/components/AppShell";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

const orders = [
  { id: "ORD-001", customer: "John Doe", product: "Monitor", qty: 1, total: 250, date: "2026-03-14", status: "Delivered" },
  { id: "ORD-002", customer: "Jane Smith", product: "Keyboard", qty: 2, total: 90, date: "2026-03-13", status: "Pending" },
  { id: "ORD-003", customer: "Bob Wilson", product: "Mouse", qty: 3, total: 75, date: "2026-03-12", status: "Shipped" },
  { id: "ORD-004", customer: "Alice Brown", product: "Headphones", qty: 1, total: 75, date: "2026-03-11", status: "Delivered" },
  { id: "ORD-005", customer: "Charlie Lee", product: "PC", qty: 1, total: 800, date: "2026-03-10", status: "Processing" },
];

const statusColor = (s: string) => {
  if (s === "Delivered") return "bg-emerald-500/10 text-emerald-600 border-emerald-200";
  if (s === "Shipped") return "bg-blue-500/10 text-blue-600 border-blue-200";
  if (s === "Pending") return "bg-amber-500/10 text-amber-600 border-amber-200";
  return "bg-purple-500/10 text-purple-600 border-purple-200";
};

const Orders = () => (
  <AppShell>
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex items-center gap-3">
        <ShoppingCart className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Orders</h1>
          <p className="text-sm text-muted-foreground">Track and manage customer orders</p>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((o) => (
              <TableRow key={o.id}>
                <TableCell className="font-medium">{o.id}</TableCell>
                <TableCell>{o.customer}</TableCell>
                <TableCell>{o.product}</TableCell>
                <TableCell>{o.qty}</TableCell>
                <TableCell>${o.total}</TableCell>
                <TableCell className="text-muted-foreground">{o.date}</TableCell>
                <TableCell><Badge variant="outline" className={statusColor(o.status)}>{o.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </AppShell>
);

export default Orders;
