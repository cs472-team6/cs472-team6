import Navbar from "./components/Navbar/Navbar";
import PreviewPanel from "./components/PreviewPanel/PreviewPanel";
import SidePanel from "./components/SidePanel/SidePanel";
import FourZeroFourDark from "./components/404Section/FourZeroFour";
import FourZeroFourLight from "./components/404Section/FourZeroFour";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="flex flex-1 max-h-[calc(100vh-56px)]">
        {/* SidePanel */}
        <SidePanel />
        {/* PreviewPanel */}
        <PreviewPanel />
      </div>
    </div>
  )
}

