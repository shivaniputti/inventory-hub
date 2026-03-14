import AppShell from "@/components/AppShell";
import { UserCircle, Mail, Phone, MapPin, Shield } from "lucide-react";

const Profile = () => (
  <AppShell>
    <div className="space-y-6 max-w-[800px] mx-auto">
      <div className="flex items-center gap-3">
        <UserCircle className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Profile</h1>
          <p className="text-sm text-muted-foreground">Your account information</p>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-3xl font-bold shrink-0">
            A
          </div>
          <div className="space-y-4 flex-1 text-center sm:text-left">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Admin User</h2>
              <p className="text-sm text-muted-foreground">System Administrator</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start"><Mail className="h-4 w-4" /> admin@inventory.com</p>
              <p className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start"><Phone className="h-4 w-4" /> +1-555-0100</p>
              <p className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start"><MapPin className="h-4 w-4" /> New York, USA</p>
              <p className="flex items-center gap-2 text-muted-foreground justify-center sm:justify-start"><Shield className="h-4 w-4" /> Role: Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppShell>
);

export default Profile;
