import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BillProvider from "../context/BillContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BaseLayout = () => {
    return (
        <>
            <Header />

            <BillProvider>
                <div className="pt-[100px] min-h-[90vh] px-[70px] bg-no-repeat bg-[url('https://hoadondientu.gdt.gov.vn/static/images/viewinvoice-bg.jpg')]">
                    <Outlet />
                </div>
            </BillProvider>
            <ToastContainer position="bottom-right" />
        </>
    );
};

export default BaseLayout;
