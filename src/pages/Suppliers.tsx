import AppShell from "@/components/AppShell";
import { Truck, Mail, Phone } from "lucide-react";

const suppliers = [
  { id: 1, name: "TechWorld Inc.", contact: "Mike Johnson", email: "mike@techworld.com", phone: "+1-555-0101", products: 4 },
  { id: 2, name: "ElectroSupply Co.", contact: "Sarah Davis", email: "sarah@electrosupply.com", phone: "+1-555-0202", products: 3 },
  { id: 3, name: "Digital Parts Ltd.", contact: "Tom Harris", email: "tom@digitalparts.com", phone: "+1-555-0303", products: 1 },
];

const Suppliers = () => (
  <AppShell>
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex items-center gap-3">
        <Truck className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Suppliers</h1>
          <p className="text-sm text-muted-foreground">Manage your product suppliers</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((s) => (
          <div key={s.id} className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
            <p className="text-sm text-muted-foreground">Contact: {s.contact}</p>
            <div className="space-y-1 text-sm">
              <p className="flex items-center gap-2 text-muted-foreground"><Mail className="h-3.5 w-3.5" />{s.email}</p>
              <p className="flex items-center gap-2 text-muted-foreground"><Phone className="h-3.5 w-3.5" />{s.phone}</p>
            </div>
            <p className="text-primary font-semibold">{s.products} products supplied</p>
          </div>
        ))}
      </div>
    </div>
  </AppShell>
);

export default Suppliers;
