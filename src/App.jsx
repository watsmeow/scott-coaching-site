import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts.jsx";
import Home from "./pages/Home.jsx";
import Pay from "./pages/Pay.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}