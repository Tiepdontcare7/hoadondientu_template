import { useContext, useState } from 'react';
import { BillContext } from '../../context/BillContext';

const BillElectronic = (props) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const { setIdBill } = useContext(BillContext)

    const handleRowClick = (index) => {
        setSelectedRow(index === selectedRow ? null : index);
        setIdBill(index)
    };



    return (
        <>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">STT</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ký hiệu mẫu số</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Số hóa đơn</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Ngày lập</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Thông tin người bán</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tổng tiền
                                chưa thuế</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tổng tiền thuế</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tổng tiền
                                chiết khấu
                                thương mại</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tổng tiền
                                thanh toán</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Trạng thái
                                hóa đơn</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Kết quả
                                kiểm tra hóa đơn</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Hóa đơn liên quan</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Thông tin liên quan</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            // eslint-disable-next-line react/prop-types
                            props.data ? props.data?.map((item, index) => {
                                return (
                                    <tr key={index}
                                        className={`cursor-pointer py-3 ${item.id === selectedRow ? 'bg-neutral-200' : ''}`}
                                        onClick={() => handleRowClick(item.id)}>

                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.id}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.kyhieumauso}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.sohoadon}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.ngaylap}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.thongtinhoadon}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.tongtienchuathue}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.tongtienthue}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.tongtienchietkhauthuongmai}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.tongtienthanhtoan}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.trangthaihoadon}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{item.ketquakiemtrahoadon}</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Xem danh sách hóa đơn</td>
                                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Thông tin liên quan</td>
                                    </tr>
                                )
                            }) : undefined
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BillElectronic