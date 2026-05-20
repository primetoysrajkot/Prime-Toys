import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingCart, Package, Users, Settings } from "lucide-react";

const navLinks = [
  { to: "/admin", label: "Dashboard", icon: <Home /> },
  { to: "/admin/products", label: "Products", icon: <Package /> },
  { to: "/admin/categories", label: "Categories", icon: <ShoppingCart /> },
  { to: "/admin/users", label: "Users", icon: <Users /> },
  { to: "/admin/settings", label: "Settings", icon: <Settings /> },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="h-full p-4">
      <h2 className="text-2xl font-bold mb-8">Admin</h2>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}>
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
