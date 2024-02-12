import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar/Navigation";
import AllProduct from "./pages/Product/AllProduct";
import Help from "./pages/Help/Help";
import Reviews from "./pages/Reviews/Reviews";
import Trial from "./pages/Trial/Trial";
import Signin from "./pages/Auth/Signin/Signin";
import Signup from "./pages/Auth/Signup/Signup";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Landing from "./landing/Landing";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/shop" element={<AllProduct />} />
        <Route path="/helpme" element={<Help />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
