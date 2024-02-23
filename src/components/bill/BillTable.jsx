import { Tabs } from 'antd';
import BillElectronic from './BillElectronic';
import generateMultipleRandomInvoices from '../../utils/bill';
import { BsPrinter } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { useContext, useState } from 'react';
import { Pagination } from 'antd';
import { BillContext } from '../../context/BillContext';
import { Modal } from 'antd';

const BillTable = () => {
    const { idBill } = useContext(BillContext)
    const [dataBill, setDataBill] = useState(null);
    const invoices = generateMultipleRandomInvoices(10);
    const [current, setCurrent] = useState(1);
    const [open, setOpen] = useState(false);

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Hóa đơn điện tử',
            children: <BillElectronic data={invoices} />,
            class: 'ant-tabs-tab ant-tabs-tab-active'
        },
        {
            key: '2',
            label: 'Hóa đơn điện tử khởi tạo từ máy tính tiền',
            children: <BillElectronic />,
        }
    ];



    const onChange1 = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const viewBill = () => {
        if (idBill) {
            setDataBill(invoices[idBill])
            setOpen(true)
        }
    }

    return (
        <>
            <div className='ant-col ant-col-24'>
                <div className='ant-row-flex ant-row-flex-space-between ant-row-flex-middle mt-14 flex justify-end px-[80px]'>
                    <Pagination current={current} onChange={onChange1} total={30} />

                    <div className='flex gap-x-[20px] items-center pl-[20px]'>
                        <div className='ant-col'>
                            <span onClick={viewBill} title='Xem hoa đơn' className='border p-[8px] border-[#000] rounded cursor-pointer hover:bg-slate-500 hover:text-white'>
                                {/* <GrView /> */}
                                <button type='button' className='ant-btn ButtonAnt__IconButton-sc-p5q16s-1 kgBiib ant-btn-icon-only'>
                                    <i className='anticon'>
                                        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="11.82" height="11.82" viewBox="0 0 11.82 11.82"><g id="Layer_1" data-name="Layer 1"><path id="Path_53170" data-name="Path 53170" d="M.55,5.91a5.36,5.36,0,1,1,5.36,5.36A5.36,5.36,0,0,1,.55,5.91ZM0,5.91A5.91,5.91,0,1,0,5.91,0,5.91,5.91,0,0,0,0,5.91Z" fill="#444"></path><path id="Path_53171" data-name="Path 53171" d="M4,4.6a6.06,6.06,0,0,0-.53.4,7.27,7.27,0,0,0-.95.91,7.27,7.27,0,0,0,.95.91A6.06,6.06,0,0,0,4,7.18,2.33,2.33,0,0,1,4,4.6Z" fill="#444"></path><path id="Path_53172" data-name="Path 53172" d="M8.41,5a6.06,6.06,0,0,0-.52-.37,2.33,2.33,0,0,1,0,2.57,6.06,6.06,0,0,0,.52-.37,7.26,7.26,0,0,0,.95-.91A7.27,7.27,0,0,0,8.41,5Z" fill="#444"></path><path id="Path_53173" data-name="Path 53173" d="M5.94,4A1.93,1.93,0,1,0,7.87,5.89,1.93,1.93,0,0,0,5.94,4Zm0,3A1.09,1.09,0,1,1,7,5.89,1.09,1.09,0,0,1,5.94,7Z" fill="#444"></path><path id="Path_53174" data-name="Path 53174" d="M5.94,5.2a.69.69,0,1,0,.69.69A.69.69,0,0,0,5.94,5.2Z" fill="#444"></path><path id="Path_53175" data-name="Path 53175" d="M6.45,2.78l-.07.4A2.75,2.75,0,0,1,8,4l.3-.27a3.16,3.16,0,0,0-1.85-.95Z" fill="#444"></path><path id="Path_53176" data-name="Path 53176" d="M5.42,2.78a3.16,3.16,0,0,0-1.81,1l.3.27a2.75,2.75,0,0,1,1.58-.86Z" fill="#444"></path><path id="Path_53177" data-name="Path 53177" d="M8,7.74a2.75,2.75,0,0,1-1.58.86l.07.4A3.16,3.16,0,0,0,8.26,8Z" fill="#444"></path><path id="Path_53178" data-name="Path 53178" d="M3.91,7.74,3.61,8A3.16,3.16,0,0,0,5.42,9l.07-.4a2.75,2.75,0,0,1-1.58-.86Z" fill="#444"></path></g></svg>
                                    </i>
                                </button>
                            </span>
                        </div>

                        <span title='In hóa đơn' className='border p-[8px] border-[#000] rounded cursor-pointer hover:bg-slate-500 hover:text-white'>
                            <BsPrinter />
                        </span>
                        <span title='Xuất hóa đơn' className='border p-[8px] border-[#000] rounded cursor-pointer hover:bg-slate-500 hover:text-white'>
                            <FaFileInvoice />
                        </span>
                        <span title='Xuất xml' className='border p-[8px] border-[#000] rounded cursor-pointer hover:bg-slate-500 hover:text-white'>
                            <CiExport />
                        </span>
                    </div>
                </div>

                <Tabs className='ant-tabs ant-tabs-top Tabs-sc-1nufobv-0 iMcRvz ant-tabs-line' defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

            {/* Modal */}
            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div className="flex justify-center items-center h-auto bg-gray-200 text-gray-900 ">
                    <div className="rounded-md relative w-full shadow-2xl p-3 bg-[url('https://hoadondientu.gdt.gov.vn/static/images/viewinvoice-bg.jpg')] ">
                        <div className="top-content py-2 flex justify-between">
                            <div className="text-center text-xl font-bold"><img src="../qr.jpg" /></div>
                            <div className="code-content text-base font-bold text-left">
                                <b className='code-ms'>Mẫu số {dataBill?.Mẫu_số}</b>
                                <b className='code-ms'>Ký hiệu: {dataBill?.Ký_hiệu}</b>
                                <b className='code-ms'>Số: {dataBill?.Số}</b>
                            </div>
                        </div>
                        <div className="heading-content border px-4 py-4">

                            <div className="title-heading text-center">
                                <h2 className="main-title font-bold text-3xl">HOÁ ĐƠN GIÁ TRỊ GIA TĂNG</h2>
                                <p className='day'>
                                    <div className='ant-row-flex ant-row-flex-center day'>
                                        <div className='ant-col ant-col-24'>
                                            <div className='ant-row-flex ant-row-flex-center flex justify-center'>
                                                <div>01</div> /
                                                <div>02</div> /
                                                <div>2025</div>
                                            </div>

                                            <div className='ant-row-flex ant-row-flex-center'>
                                                <div className='ant-col '>
                                                    <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW flex justify-center'>
                                                        <div><span>MCCQT: </span></div>
                                                        <div>
                                                            <div>{dataBill?.MCCQT}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </p>
                                {/* <p className=" text-base my-2">{dataBill?.Ngày_thành_lập}</p> */}
                                {/* <p className=" text-base">MCCQT:
                                    {dataBill?.MCCQT}</p> */}
                            </div>

                            <div className="vip-divide"></div>

                            <div className="content-info border-double border-y  border-l-0 border-r-0 border-gray-900 my-3 text-base py-2">
                                <ul>
                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Tên người bán:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Tên_người_bán}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Mã số thuế:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Mã_số_thuế}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Địa chỉ:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Địa_chỉ}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>


                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Điện thoại:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Điện_thoại}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Số tài khoản:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Số_tài_khoản}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <br />

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Tên người mua:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        CÔNG TY TNHH MỘT THÀNH VIÊN CÔNG NGHỆ VÀ TRUYỀN THÔNG 3I
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Họ tên người mua:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Tên_người_mua}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Mã số thuế:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Mã_số_thuế_buyer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Địa chỉ:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Địa_chỉ_buyer}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Số tài khoản:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Số}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Hình thức thanh toán:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Hình_thức_thanh_toán}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Đơn vị tiền tệ:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Đơn_vị_tiền_tệ}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                            <div className='class="styles__DataItemStyle-sc-v1ei30-1 cdheZW flex'>
                                                <div className='di-label'>
                                                    <span>
                                                        Đơn vị tiền tệ:
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className='di-value'>
                                                        {dataBill?.Đơn_vị_tiền_tệ}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li >
                                        <div className='ant-row'>
                                            <div className='ant-col ant-col-12 flex'>
                                                <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                                    {/* <div> */}
                                                    <div className='di-label'>
                                                        <span>
                                                            Số bảng kê:
                                                        </span>
                                                    </div>
                                                    <div className='di-value'>
                                                        <div></div>
                                                    </div>
                                                </div>

                                                <div className='styles__DataItemStyle-sc-v1ei30-1 cdheZW'>
                                                    {/* <div> */}
                                                    <div className='di-label'>
                                                        <span>
                                                            Ngày bảng kê:
                                                        </span>
                                                    </div>
                                                    <div className='di-value'>
                                                        <div></div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>


                                </ul>
                            </div>
                            <div>
                                {/* <div className="flex justify-around ">
                                    <p className="">Số bảng kê: </p>
                                    <p className="">Ngày bảng kê: </p>
                                </div> */}


                                <div className="overflow-x-auto py-3">
                                    <table className="res-tb min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                        <thead className="ltr:text-left rtl:text-right">
                                            <tr>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">STT</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">Tính chất</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">	Tên hàng hóa, dịch vụ</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">Đơn vị tính</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">Số lượng</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">Đơn giá</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">Chiết khấu</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">Thuế suất</th>
                                                <th className=" border px-3 py-2 font-medium text-gray-900">Thành tiền chưa có thuế GTGT</th>
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-200">
                                            {dataBill?.tables[0]?.rows?.map((item, i) => {
                                                return (
                                                    <tr key={i} className="border">
                                                        <td className=" border px-3 py-2 font-medium text-gray-900">{item?.STT}</td>
                                                        <td className=" border px-3 py-2 text-gray-700">{item?.Tính_chất}</td>
                                                        <td className=" border px-3 py-2 text-gray-700">{item?.Tên_hàng_hóa_dịch_vụ}</td>
                                                        <td className=" border px-3 py-2 text-gray-700">Phần</td>
                                                        <td className=" border px-3 py-2 font-medium text-gray-900">1</td>
                                                        <td className=" border px-3 py-2 text-gray-700">{item?.Đơn_giá}</td>
                                                        <td className=" border px-3 py-2 text-gray-700">{item?.Chiết_khấu}</td>
                                                        <td className=" border px-3 py-2 text-gray-700">{item?.Thuế_suất}</td>
                                                        <td className=" border px-3 py-2 font-medium text-gray-900">{item?.Đơn_giá}</td>
                                                    </tr>

                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>

                                <div className="flex gap-2">
                                    <div className="overflow-x-auto py-3">
                                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                            <thead className="ltr:text-left rtl:text-right">
                                                <tr>
                                                    <th className=" border px-3 py-2 font-medium text-gray-900">Thuế suất</th>
                                                    <th className=" border px-3 py-2 font-medium text-gray-900">Tổng tiền chưa thuế	</th>
                                                    <th className=" border px-3 py-2 font-medium text-gray-900">Tổng tiền thuế</th>
                                                </tr>
                                            </thead>

                                            <tbody className="divide-y divide-gray-200">
                                                <tr className="border">
                                                    <td className=" border px-3 py-2 font-medium text-gray-900">8%</td>
                                                    <td className=" border px-3 py-2 text-gray-700">292.000</td>
                                                    <td className=" border px-3 py-2 text-gray-700">23.360</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="overflow-x-auto py-3">
                                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                            <thead className="ltr:text-left rtl:text-right">
                                                <tr>
                                                    <th className=" border px-3 py-2 font-medium text-gray-900">Tổng tiền chưa thuế
                                                        (Tổng cộng thành tiền chưa có thuế)</th>
                                                    <th className=" border px-3 py-2 font-medium text-gray-900">{dataBill?.tables[3]?.Tổng_tiền_thanh_toán_bằng_số}	</th>
                                                </tr>
                                            </thead>

                                            <tbody className="divide-y divide-gray-200">
                                                <tr className="border">
                                                    <td className=" border px-3 py-2 font-medium text-gray-900">Tổng giảm trừ không chịu thuế</td>
                                                    <td className=" border px-3 py-2 text-gray-700">{dataBill?.tables[3]?.Tổng_tiền_thuế}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="text-medium flex justify-around border-t border-[black] pt-4">
                                <div>
                                    <h3>NGƯỜI MUA HÀNG</h3>
                                    <p>(Chữ ký số (nếu có))</p>
                                </div>
                                <div>
                                    <h3>NGƯỜI BÁN HÀNG</h3>
                                    <p>(Chữ ký điện tử, chữ ký số)</p>
                                </div>
                            </div>
                            <div className="text-center mt-40">
                                <footer>(Cần kiểm tra, đối chiếu khi lập, nhận hóa đơn)</footer>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default BillTable