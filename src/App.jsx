// import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import "./index.css";

// Layout Components
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Header/HeroSection";
import OurService from "./components/Sections/OurService";
import SomeProducts from "./components/Sections/SomeProducts";
import AboutUs from "./components/Sections/AboutUs";
import ContactUs from "./components/Footer/ContactUs";
import Footer from "./components/Footer/Footer";
import FullAboutUs from "./components/Others/FullAboutUs";


// Auth & Profile
import ProtLayout from "./components/Auth/ProtLayout";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Ui/Profile";

// Product Components
import ProductList from "./components/Products/ProductList";
import ProductDetails from "./components/Products/ProductDetails";
// import ProductCard from "./components/Products/ProductCard";
import CheckoutPage from "./components/Orders/CheckoutPage";

import Cart from "./components/Cart/Cart";

// Gallery Component
import Gellery from "./components/Gellery/Gallery"
import GalleryCollage from "./components/Gellery/GalleryCollage";

// Redux
import { useSelector } from "react-redux";

// Private Route Wrapper
function PrivateRoute({ children }) {
  const { user } = useSelector((state) => state.auth);
  return user ? children : <Navigate to="/" replace />;
}

// Home Page
function HomePage() {
  return (
    <>
      <HeroSection />
      <SomeProducts />
      <OurService />
    
      <Gellery />
      <AboutUs />
      <ContactUs />
      <Order />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
         <Route path="/fullaboutus" element={<FullAboutUs />} />
          

        {/* Product Pages */}
        <Route path="/products" element={<ProductList />} />
        <Route path="//products/:id" element={<ProductDetails />} />
        {/* <Route path="/product/:id" element={<ProductCard />} /> */}
        <Route path="/checkoutpage" element={<CheckoutPage />} />

        {/* Gellery pages */}
        <Route path="/gallery" element={<GalleryCollage />} />

        {/* Protected Pages */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile-layout"
          element={
            <ProtLayout>
              <Profile />
            </ProtLayout>
          }
        />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
