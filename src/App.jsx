import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        <Toaster position="top-right" toastOptions={{
          className: "bg-card text-foreground border border-primary/20 shadow-lg"
        }} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
