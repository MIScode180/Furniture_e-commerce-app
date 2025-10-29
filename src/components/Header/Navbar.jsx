
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../store/AuthSlice";
import authConfig from "../../Appwrite/authConfig";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { totalItems } = useSelector((state) => state.cart || { totalItems: 0 });
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await authConfig.getCurrentUser();
        if (currentUser) {
          dispatch(login(currentUser));
        }
      } catch (err) {
        console.log("No user logged in");
      }
    };
    checkUser();
  }, [dispatch]);

  const handleLogout = async () => {
    await authConfig.logout();
    dispatch(logout());
    setShowMenu(false);
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 shadow-md bg-white font-[Inter]">
      {/* Logo */}
      <Link to="/" className="text-blue-600 font-bold text-lg">
        FurniSpaces
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Product</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        {isAuthenticated && <li> <Link to="/order">My Orders</Link></li>}

        {/* Cart Icon */}
        <li className="relative">
          <Link to="/cart">
            <FaShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex gap-2 items-center">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="px-3 py-1 rounded-lg bg-emerald-500 text-white text-sm">Login</Link>
            <Link to="/signup" className="px-3 py-1 rounded-lg border border-emerald-500 text-emerald-500 text-sm">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/profile" className="px-3 py-1 rounded-lg bg-blue-500 text-white text-sm">
              {user?.name || "Profile"}
            </Link>
            <button onClick={handleLogout} className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm">Logout</button>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Dropdown */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg md:hidden z-50 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 border-b">
            <Link to="/" className="text-blue-600 font-bold text-lg" onClick={() => setShowMenu(false)}>FurniSpaces</Link>
            <button onClick={() => setShowMenu(false)} className="text-2xl"><HiX /></button>
          </div>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-5 text-base font-medium">
              <li><Link to="/home" onClick={() => setShowMenu(false)}>Home</Link></li>
              <li><Link to="/products" onClick={() => setShowMenu(false)}>Product</Link></li>
              <li><Link to="/gallery" onClick={() => setShowMenu(false)}>Gallery</Link></li>
              <li><Link to="/contactus" onClick={() => setShowMenu(false)}>Contact Us</Link></li>
              <li><Link to="/aboutus" onClick={() => setShowMenu(false)}>About Us</Link></li>
              {isAuthenticated && <li><Link to="/order" onClick={() => setShowMenu(false)}>My Orders</Link></li>}
              <li className="relative">
                <Link to="/cart" onClick={() => setShowMenu(false)}>
                  <FaShoppingCart size={22} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="w-full px-4 py-2 rounded-lg bg-emerald-500 text-white text-center text-sm" onClick={() => setShowMenu(false)}>Login</Link>
                  <Link to="/signup" className="w-full px-4 py-2 rounded-lg border border-emerald-500 text-emerald-500 text-center text-sm" onClick={() => setShowMenu(false)}>Signup</Link>
                </>
              ) : (
                <>
                  <Link to="/profile" className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white text-center text-sm" onClick={() => setShowMenu(false)}>
                    {user?.name || "Profile"}
                  </Link>
                  <button onClick={handleLogout} className="w-full px-4 py-2 rounded-lg bg-red-500 text-white text-sm">Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
  