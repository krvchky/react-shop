// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contacts from "./pages/Contacts";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import NoPage from "./pages/NoPage";
// import Delivery from "./pages/Delivery";
// import Category from "./pages/Category";
// import Search from "./pages/Search";
// import About from "./pages/About";
// import Order from "./pages/Order";
// // import Reg from "./pages/Reg";
// // import ProfileAuth from "./pages/ProfileAuth";
// // import ProfilePassword from "./pages/ProfilePassword";

// export default function App() {
//     const [cart, setCart] = useState([]);

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Home />} />
//                     <Route path="contacts" element={<Contacts />} />
//                     <Route path="delivery" element={<Delivery />} />
//                     <Route path="category/:catid" element={<Category />} />
//                     <Route path="search" element={<Search />} />
//                     <Route path="about" element={<About />} />
//                     <Route path="order" element={<Order />} />

//                     {/* <Route path="profileAuth" element={<ProfileAuth />} /> */}
//                     {/* <Route path="reg" element={<Reg />} /> */}
//                     {/* <Route path="profilePassword" element={<ProfilePassword />} /> */}

//                     <Route path="*" element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     );
// }
// App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Delivery from "./pages/Delivery";
import Category from "./pages/Category";
import Search from "./pages/Search";
import About from "./pages/About";
import Order from "./pages/Order";
import { CartProvider } from "./CartContext";

export default function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="delivery" element={<Delivery />} />
                        <Route path="category/:catid" element={<Category />} />
                        <Route path="search" element={<Search />} />
                        <Route path="about" element={<About />} />
                        <Route path="order" element={<Order />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}
