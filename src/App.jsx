import Navbar from "./components/Navbar/Navbar";
import SidePanel from "./components/SidePanel/SidePanel";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-1 max-h-[calc(100vh-56px)]">
        {/* SidePanel */}
        <SidePanel />
        {/* PreviewPanel */}
      </div>
    </div>
  )
}

