import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Sections from "./components/Sections/Sections"
import MainPage from "./pages/MainPage/MainPage";
import ShoesPage from "./pages/ShoesPage/ShoesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Loafers from "./pages/ShoesPage/LoafersPage/Loafers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Sections />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="shoes">
          <Route index={true} element={<ShoesPage />} />
          <Route path="loafers" element={<Loafers />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;