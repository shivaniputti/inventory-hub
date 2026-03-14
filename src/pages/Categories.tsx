import AppShell from "@/components/AppShell";
import { Grid3X3 } from "lucide-react";

const categories = [
  { name: "Electronic", products: 5, description: "Electronic devices and accessories" },
  { name: "Tech", products: 3, description: "Technology components and hardware" },
];

const Categories = () => (
  <AppShell>
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex items-center gap-3">
        <Grid3X3 className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Categories</h1>
          <p className="text-sm text-muted-foreground">Organize products by category</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => (
          <div key={c.name} className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-2">
            <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.description}</p>
            <p className="text-2xl font-bold text-primary">{c.products} <span className="text-sm font-normal text-muted-foreground">products</span></p>
          </div>
        ))}
      </div>
    </div>
  </AppShell>
);

export default Categories;
