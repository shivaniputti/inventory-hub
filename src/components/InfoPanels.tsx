import { AlertTriangle, TrendingUp, PackageMinus } from "lucide-react";

const OutOfStockPanel = () => (
  <div className="bg-card rounded-xl border border-border shadow-sm p-5 animate-fade-in" style={{ animationDelay: "400ms" }}>
    <div className="flex items-center gap-2 mb-4">
      <div className="p-2 rounded-lg bg-destructive/10">
        <AlertTriangle className="h-5 w-5 text-critical" />
      </div>
      <h3 className="font-semibold text-card-foreground">Out of Stock Products</h3>
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/10">
        <div>
          <p className="text-sm font-medium text-card-foreground">Screen</p>
          <p className="text-xs text-muted-foreground">Electronic</p>
        </div>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-destructive/10 text-critical">
          Out of Stock
        </span>
      </div>
    </div>
  </div>
);

const HighestSalePanel = () => (
  <div className="bg-card rounded-xl border border-border shadow-sm p-5 animate-fade-in" style={{ animationDelay: "500ms" }}>
    <div className="flex items-center gap-2 mb-4">
      <div className="p-2 rounded-lg bg-success/10">
        <TrendingUp className="h-5 w-5 text-success" />
      </div>
      <h3 className="font-semibold text-card-foreground">Highest Sale Product</h3>
    </div>
    <div className="p-4 rounded-lg bg-accent border border-border">
      <p className="text-lg font-bold text-card-foreground">Monitor</p>
      <div className="mt-2 space-y-1">
        <p className="text-sm text-muted-foreground">
          Category: <span className="text-card-foreground font-medium">Electronic</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Total Units Sold: <span className="text-card-foreground font-medium">2</span>
        </p>
      </div>
    </div>
  </div>
);

const LowStockPanel = () => {
  const lowStockItems = [
    { name: "Monitor", stock: 3, category: "Electronic" },
    { name: "PC", stock: 3, category: "Tech" },
    { name: "RAM", stock: 2, category: "Tech" },
  ];

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-5 animate-fade-in" style={{ animationDelay: "600ms" }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-warning/10">
          <PackageMinus className="h-5 w-5 text-warning" />
        </div>
        <h3 className="font-semibold text-card-foreground">Low Stock Products</h3>
      </div>
      <div className="space-y-2">
        {lowStockItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between p-3 rounded-lg bg-accent border border-border"
          >
            <div>
              <p className="text-sm font-medium text-card-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.category}</p>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-warning/10 text-warning">
              {item.stock} left
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const InfoPanels = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
    <OutOfStockPanel />
    <HighestSalePanel />
    <LowStockPanel />
  </div>
);

export default InfoPanels;
