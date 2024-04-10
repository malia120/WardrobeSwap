import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Women from "./Pages/women";
import Men from "./Pages/men";
import Children from "./Pages/children";
import AboutUs from "./Pages/aboutUs";
import ThisPlatform from "./Pages/thisPlatform";
import Home from "./Pages/home";
import Sell from "./Pages/Sell";
import ShowListing from "./Components/ShowListing";
import Cart from "./Pages/cart";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import ListingDisplay from './Components/ListingDisplay';
import { CartContextProvider } from "./Components/CartContext";
import PrivateRoute from "./Components/PrivateRoute";
import { AuthProvider } from "./Components/AuthContext";
import Checkout from "./Pages/Checkout";

/**
 * Main App component that sets up the routing for different pages.
 *
 * @returns root components.
 */

function App() {
  const [listings, setListings] = useState([]);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/listing")
      .then(response => response.json())
      .then(data => setListings(data.listings))
      .catch(error => console.error("Error fetching listings:", error));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <React.Fragment>
      <CartContextProvider listings={listings}>
      <AuthProvider> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/children" element={<Children />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/this-platform" element={<ThisPlatform />} />
        <Route path="/sell" element={<PrivateRoute><Sell /></PrivateRoute>}/>
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}/>
        <Route path=':item.id' element={<ShowListing/>}/>
        <Route path="/listings/:id" element={<ListingDisplay />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/checkout" element={< Checkout/>} />
      </Routes>
      </AuthProvider>
      </CartContextProvider>
    </React.Fragment>
  );

}

export default App;