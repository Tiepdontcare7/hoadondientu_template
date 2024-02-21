import { Tabs } from 'antd';
import BillBuying from '../components/bill/BillBuying'
import BillOfSale from '../components/bill/BillOfSale'

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tra cứu hóa đơn điện tử bán ra',
    children: <BillOfSale/>,
  },
  {
    key: '2',
    label: 'Tra cứu hóa đơn điện tử mua vào',
    children: <BillBuying />,
  }
];

const CheckBill = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default CheckBill