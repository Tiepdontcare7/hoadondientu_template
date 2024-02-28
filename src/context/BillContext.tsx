import React, { createContext, useState } from "react";
import ToastMessage from "../components/ToastMessage";

export const BillContext = createContext({});

const BillProvider = ({ children }) => {
  const [idBill, setIdBill] = useState(0);
  const [isToasting, setIsToasting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  return (
    <BillContext.Provider
      value={{
        idBill,
        setIdBill,
        isToasting,
        setIsToasting,
        toastMessage,
        setToastMessage,
      }}
    >
      {children}
      {isToasting && <ToastMessage />}
    </BillContext.Provider>
  );
};

export default BillProvider;
