import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CartAddedList from "../components/CartAddedList";

export default function Layout() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
            <CartAddedList />
        </>
    );
}
