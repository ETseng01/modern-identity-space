
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Camera, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Photography", href: "/photography", icon: Camera },
  { name: "Resume", href: "/resume", icon: Briefcase },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-white/80 backdrop-blur-lg border border-gray-200 shadow-lg"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "glass lg:glass border-r border-gray-200/30 shadow-xl"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Name section */}
          <div className="px-6 py-8">
            <h1 className="text-2xl font-display font-bold tracking-tight">
              John Doe
            </h1>
            <p className="text-sm text-gray-600 mt-1">Creative Professional</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200/30">
            <p className="text-sm text-gray-600">© 2024 John Doe</p>
          </div>
        </div>
      </aside>
    </>
  );
}
