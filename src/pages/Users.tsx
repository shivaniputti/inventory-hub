import AppShell from "@/components/AppShell";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users as UsersIcon } from "lucide-react";

const users = [
  { id: 1, name: "Admin User", email: "admin@inventory.com", role: "Admin", status: "Active", lastLogin: "2026-03-14" },
  { id: 2, name: "John Manager", email: "john@inventory.com", role: "Manager", status: "Active", lastLogin: "2026-03-13" },
  { id: 3, name: "Sarah Staff", email: "sarah@inventory.com", role: "Staff", status: "Active", lastLogin: "2026-03-12" },
  { id: 4, name: "Bob Viewer", email: "bob@inventory.com", role: "Viewer", status: "Inactive", lastLogin: "2026-02-28" },
];

const Users = () => (
  <AppShell>
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div className="flex items-center gap-3">
        <UsersIcon className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-2xl font-display font-bold text-foreground">Users</h1>
          <p className="text-sm text-muted-foreground">Manage system users and permissions</p>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Login</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell className="font-medium">{u.id}</TableCell>
                <TableCell>{u.name}</TableCell>
                <TableCell className="text-muted-foreground">{u.email}</TableCell>
                <TableCell><Badge variant="outline">{u.role}</Badge></TableCell>
                <TableCell>
                  <Badge variant="outline" className={u.status === "Active" ? "bg-emerald-500/10 text-emerald-600 border-emerald-200" : "bg-red-500/10 text-red-600 border-red-200"}>
                    {u.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{u.lastLogin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  </AppShell>
);

export default Users;
