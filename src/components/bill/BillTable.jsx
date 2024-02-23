import { useState } from 'react';
import { Tabs } from 'antd';
import BillElectronic from './BillElectronic';
import generateMultipleRandomInvoices from '../../utils/bill';

const { TabPane } = Tabs;

const BillTable = () => {
    const invoices = generateMultipleRandomInvoices(10);
    const [activeTab, setActiveTab] = useState('1');

    const onChange = (key) => {
        console.log(key);
        setActiveTab(key);
    };

    return (
        <>
            <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={onChange}>
                <TabPane tab="Hóa đơn điện tử" key="1">
                    <BillElectronic data={invoices} />
                </TabPane>
                <TabPane tab="Hóa đơn điện tử khởi tạo từ máy tính tiền" key="2">
                    <BillElectronic />
                </TabPane>
            </Tabs>
        </>
    );
}

export default BillTable;
