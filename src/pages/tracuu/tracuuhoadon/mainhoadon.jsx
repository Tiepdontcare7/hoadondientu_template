import { Tabs } from 'antd';
import Soldout from './banra';
import Buyinto from './muavao';


const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: <Soldout />,
  },
  {
    key: '2',
    label: 'Tab 2',
    children: <Buyinto />,
  },
  
];
const HoaDon = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default HoaDon;