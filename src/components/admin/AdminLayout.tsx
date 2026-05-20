import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Sidebar } from "@/components/admin/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-screen">
      <ResizablePanel defaultSize={20}>
        <div className="flex flex-col h-full">
          <Sidebar />
          <div className="p-4 mt-auto">
            <Button onClick={handleLogout} className="w-full">
              Logout
            </Button>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <main className="p-8">
          {children}
        </main>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
