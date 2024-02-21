import React, { createContext, useState } from 'react'

export const BillContext = createContext({})

const BillProvider = ({ children }) => {
    const [idBill, setIdBill] = useState(0)
    
    return <BillContext.Provider value={{ idBill, setIdBill }}>
        {children}
    </BillContext.Provider>
}

export default BillProvider