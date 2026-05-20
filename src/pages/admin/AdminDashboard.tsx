import { AdminLayout } from "@/components/admin/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <p className="text-4xl font-bold">125</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <p className="text-4xl font-bold">15</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <p className="text-4xl font-bold">350</p>
        </div>
      </div>
    </AdminLayout>
  );
}
