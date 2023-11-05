import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import DetailPage from "./pages/DetailPage";
import UndefinedPage from "./pages/UndefinedPage";
import ProductsPage from './pages/ProductsPage';
import MainPage from './pages/MainPage';
import Layout from './nestedRoutes/Layout';
import Roman from './nestedRoutes/Roman';
import Hikaye from './nestedRoutes/Hikaye';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ürünler" element={<ProductsPage />} />
        <Route path="/ürün/:book_id" element={<DetailPage />} />
        <Route path="/kategoriler" element={<Layout />}>
          <Route index element={<Hikaye />} />
          <Route path="roman" element={<Roman />} />
        </Route>
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

