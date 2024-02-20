import { Tabs } from 'antd';
import BillElectronic from './BillElectronic';
import generateMultipleRandomInvoices from '../../utils/bill';


const BillTable = () => {
    // console.log(dataBill)
    const invoices = generateMultipleRandomInvoices(10);
    // console.log(invoices)

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Hóa đơn điện tử',
            children: <BillElectronic data={invoices} />,
        },
        {
            key: '2',
            label: 'Hóa đơn điện tử khởi tạo từ máy tính tiền',
            children: <BillElectronic />,
        }
    ];

    return (
        <>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}

export default BillTable