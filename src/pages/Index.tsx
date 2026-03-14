import AppShell from "@/components/AppShell";
import StatsCards from "@/components/StatsCards";
import InfoPanels from "@/components/InfoPanels";

const Index = () => {
  return (
    <AppShell>
      <div className="space-y-6 max-w-[1400px] mx-auto">
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time inventory insights and stock management
          </p>
        </div>

        <StatsCards />
        <InfoPanels />
      </div>
    </AppShell>
  );
};

export default Index;
