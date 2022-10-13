import { useEffect, useState, } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getLoggedIn, logout } from "./services/auth";
import * as USER_HELPERS from "./utils/userToken";

//Components
import LoadingComponent from "./components/Loading";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//Pages
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";

//Actions CRUD PRODUCT
import AddProduct from "./pages/ProductCrud/AddProductPage";
import ProductDetailPage from "./pages/ProductCrud/ProductDetailPage";

//Contact Page
import ContactPagePropiedad from "./pages/Contact/ContactPagePropiedad";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


const navigate = useNavigate()


  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      navigate("/auth/login")
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div className="App">
      <Navbar handleLogout={handleLogout} user={user} />     
        <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/auth/login" element={<LogIn authenticate={authenticate}/>} />
        <Route path="/auth/signup" element={<Signup authenticate={authenticate}/>} />
        <Route path="/gallery" element={<Gallery/>}/>
        
        {/* ---> CRUD <--- */}
        <Route path="/newproduct" element={<AddProduct/>}/>
        <Route path="/gallery/:productId" element={<ProductDetailPage user={user} />}/>
        

        {/* ---> CONTACT <--- */}
        <Route path="/contact/:productId" element={<ContactPagePropiedad/>}/>
        <Route path="/contact" element={<ContactPage/>}/>

      </Routes>
      <Footer/>  
    </div>
  );
}
