import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Ofertas from "./pages/Ofertas";
import Login from "./pages/Login";
import Joyas from "./pages/Joyas";
import RutaProtegida from "./components/RutaProtegida";
import { CartProvider } from "./context/CartContext";
import CrudProductos from "./components/CrudProductos";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Ofertas" element={<Ofertas />}></Route>
            <Route path="/administracion" element={<Login />}></Route>
            <Route path="/joyas" element={<Joyas />}></Route>
            <Route
              path="/crudproductos"
              element={
                <RutaProtegida>
                  <CrudProductos />
                </RutaProtegida>
              }
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
