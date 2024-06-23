import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const DashboardLayout = () => {
    return (
        <div className="min-h-screen h-full flex flex-col">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout;