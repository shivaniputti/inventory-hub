import { Package, Layers, ShoppingCart, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "8",
    icon: Package,
    color: "bg-stat-blue",
  },
  {
    title: "Total Stock",
    value: "65",
    icon: Layers,
    color: "bg-stat-green",
  },
  {
    title: "Order Today",
    value: "0",
    icon: ShoppingCart,
    color: "bg-stat-orange",
  },
  {
    title: "Revenue",
    value: "$1,000",
    icon: DollarSign,
    color: "bg-stat-purple",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={stat.title}
          className={`${stat.color} rounded-xl p-6 text-primary-foreground shadow-lg animate-fade-in`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-center justify-between mb-3">
            <stat.icon className="h-8 w-8 opacity-80" />
          </div>
          <p className="text-3xl font-bold">{stat.value}</p>
          <p className="text-sm opacity-80 mt-1">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
