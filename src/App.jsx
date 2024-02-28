import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

import BaseLayout from "./layout/BaseLayout";
import CheckBill from "./pages/CheckBill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<BaseLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/tra-cuu/tra-cuu-hoa-don" element={<CheckBill />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
