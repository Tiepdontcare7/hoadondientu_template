import { Tabs } from 'antd';
import BillElectronic from './BillElectronic';
import { dataBill } from './Databill';

const items = [
    {
        key: '1',
        label: 'Hóa đơn điện tử',
        children: <BillElectronic data={dataBill} />,
    },
    {
        key: '2',
        label: 'Hóa đơn điện tử khởi tạo từ máy tính tiền',
        children: <BillElectronic />,
    }
];

const BillTable = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}

export default BillTable