import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import BillProvider from "../context/BillContext";

const BaseLayout = () => {
    return (
        <>
            <BillProvider>
                <Header />
                <div className="pt-[100px] min-h-[90vh] px-[70px] bg-no-repeat bg-[url('https://hoadondientu.gdt.gov.vn/static/images/viewinvoice-bg.jpg')]">
                    <Outlet />
                </div>
            </BillProvider>
        </>
    );
};

export default BaseLayout;
