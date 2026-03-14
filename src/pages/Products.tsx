import AppShell from "@/components/AppShell";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

const products = [
  { id: 1, name: "Monitor", sku: "ELC-001", category: "Electronic", price: 250, stock: 3, status: "Low Stock" },
  { id: 2, name: "Keyboard", sku: "ELC-002", category: "Electronic", price: 45, stock: 20, status: "In Stock" },
  { id: 3, name: "Mouse", sku: "ELC-003", category: "Electronic", price: 25, stock: 15, status: "In Stock" },
  { id: 4, name: "Screen", sku: "ELC-004", category: "Electronic", price: 300, stock: 0, status: "Out of Stock" },
  { id: 5, name: "PC", sku: "TCH-001", category: "Tech", price: 800, stock: 3, status: "Low Stock" },
  { id: 6, name: "RAM", sku: "TCH-002", category: "Tech", price: 60, stock: 2, status: "Low Stock" },
  { id: 7, name: "Headphones", sku: "ELC-005", category: "Electronic", price: 75, stock: 12, status: "In Stock" },
  { id: 8, name: "Webcam", sku: "ELC-006", category: "Electronic", price: 50, stock: 7, status: "In Stock" },
];

const statusColor = (status: string) => {
  if (status === "In Stock") return "bg-emerald-500/10 text-emerald-600 border-emerald-200";
  if (status === "Low Stock") return "bg-amber-500/10 text-amber-600 border-amber-200";
  return "bg-red-500/10 text-red-600 border-red-200";
};

const Products = () => (
  <AppShell>
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex items-center gap-3">
        <Package className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Products</h1>
          <p className="text-sm text-muted-foreground">Manage your inventory products</p>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="font-medium">{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell className="text-muted-foreground">{p.sku}</TableCell>
                <TableCell>{p.category}</TableCell>
                <TableCell>${p.price}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell><Badge variant="outline" className={statusColor(p.status)}>{p.status}</Badge></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </AppShell>
);

export default Products;
