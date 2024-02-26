/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import BillBuying from "../components/bill/BillBuying";
import BillOfSale from "../components/bill/BillOfSale";
import { BillContext } from "../context/BillContext";

const items = [
  {
    key: "1",
    label: "Tra cứu hóa đơn điện tử bán ra",
    children: <BillOfSale />,
  },
  {
    key: "2",
    label: 'Tra cứu hóa đơn điện tử mua vào',
    children: <BillBuying />,
  },
];

const CheckBill = () => {
  const [activeKey, setActiveKey] = useState("1");
  const {setIdTab} = useContext(BillContext)

  const CustomTabs = ({ items, activeKey, onChange }) => {
    return (
      <>
        <div>
          <div>
            <div>
              <div>
                <div>

                  <div className="custom-tabs flex">
                    {items?.map((item) => (
                      <div
                        key={item.key}
                        className={`custom-tab ${activeKey === item.key ? 'active' : ''} border py-2 px-2 mt-4 mb-4 cursor-pointer`}
                        onClick={() => onChange(item.key)}
                      >
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const onChange = (key) => {
    setIdTab(key)
    setActiveKey(key);
  };

  return (
    <>
      <main>
        <div>
          <div>
            <div>
              <div>
                {/* <Tabs id={null} defaultActiveKey="1" items={items} onChange={onChange} /> */}

                <CustomTabs items={items} activeKey={activeKey} onChange={onChange} />

                <div></div>

                {activeKey === "1" && <BillOfSale />}
                {activeKey === "2" && <BillBuying />}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckBill;