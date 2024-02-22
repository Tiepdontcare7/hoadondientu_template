import dayjs from 'dayjs';
import { DatePicker } from 'antd';
import { useContext, useState } from 'react';
import { Pagination } from 'antd';
import BillTable from './BillTable';
import { BsPrinter } from "react-icons/bs";
import { FaFileInvoice } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import { Select } from 'antd';
import { BillContext } from '../../context/BillContext';
import { Modal } from 'antd';
import generateMultipleRandomInvoices from '../../utils/bill';

const BillOfSale = () => {
    const { idBill } = useContext(BillContext)
    const [dataBill, setDataBill] = useState(null);
    const invoices = generateMultipleRandomInvoices(10);
    const [current, setCurrent] = useState(1);
    const [open, setOpen] = useState(false);
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const viewBill = () => {
        if (idBill) {
            setDataBill(invoices[idBill])
            setOpen(true)
        }
    }

    console.log(dataBill)

    return (
        <div>
            <div>
                Danh sách hóa đơn điện tử bán ra
            </div>
            <div>
                <section className="flex gap-4 mx-10 pt-3  justify-between">
                    <aside className=" w-1/2 py-3">
                        <div>
                            <label className="w-[25%]  px-2">MST người mua</label>
                            <input id="nmmst" data-__meta="[object Object]" data-__field="[object Object]" className="w-[70%] border-b ml-5 " type="text" value=""></input>
                        </div>
                        <div className="my-3">
                            <label className="w-[25%]  px-2">Trạng thái hóa đơn  (*)</label>
                            <select className="w-[70%] border-b ml-5 ">
                                <option>Tất cả</option>
                                <option>Hóa đơn mới</option>
                                <option>Hóa đơn thay thế</option>
                                <option>Hóa đơn điều chỉnh</option>
                                <option>Hóa đơn đã bị thay thế</option>
                                <option>Hóa đơn đã bị điều chỉnh</option>
                                <option>Hóa đơn đã bị hủy</option>
                            </select>
                        </div>
                        <div>
                            <label className="w-[25%]  px-2">Kết quả kiểm tra  (*)</label>
                            <select className="w-[70%] border-b ml-5 ">
                                <option>Tất cả</option>
                                <option>Tổng cục thuế đã nhận</option>
                                <option>Đang tiến hành kiểm tra điều kiện cấp mã</option>
                                <option>CQT từ chối hóa đơn theo từng lần phát sinh</option>
                                <option>Hóa đơn đủ điều kiện cấp mã</option>
                                <option>Hóa đơn không đủ điều kiện cấp mã</option>
                                <option>Đã cấp mã hóa đơn</option>
                                <option>Tổng cục thuế đã nhận không mã</option>
                                <option>Đã kiểm tra định kỳ HĐĐT không có mã</option>
                                <option>Tổng cục thuế đã nhận hóa đơn có mã khởi tạo từ máy tính tiền</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label className="w-[25%]  px-2">Số hóa đơn</label>
                            <input id='shdon' className="w-[70%] border-b ml-5 " />
                        </div>
                        <div>
                            <label className="w-[25%]  px-2">Hóa đơn ủy nhiệm</label>
                            <input type="checkbox" className=" border-b  " />
                        </div>
                    </aside>
                    <main className="py-3 w-1/2">
                        <div>
                            <label className="w-[25%]  px-2">CCCD người mua</label>
                            <input id='nmcccd' className="w-[70%] border-b ml-5 " />
                        </div>
                        <div className="my-3">
                            {/* <label className="w-[25%]  px-2">Ngày lập hóa đơn (*)
                            </label> */}
                            {/* <label className="w-[25%]  px-2">Ngày lập hóa đơn&nbsp;<span style={{ color: 'red' }}>(*)</span></label>
                            <span className='mr-2' id='tngay'> Từ ngày</span>
                            <DatePicker style={{ borderBottom: '1px solid #ccc',  // Border bottom
                                                borderLeft: 'none',               // No left border
                                                borderRight: 'none',              // No right border
                                                borderTop: 'none',                // No top border
                                                borderRadius: '0'                 // No border radius
                                                }} defaultValue={dayjs().subtract(30, 'days')} format={dateFormatList} />
                            <span className='mx-2' id='dngay'> Đến ngày</span>
                            <DatePicker style={{ borderBottom: '1px solid #ccc',  // Border bottom
                                                borderLeft: 'none',               // No left border
                                                borderRight: 'none',              // No right border
                                                borderTop: 'none',                // No top border
                                                borderRadius: '0'                 // No border radius
                                                }} defaultValue={dayjs()} format={dateFormatList} /> */}
                            <div className="ant-row">
                                {/* Label cho Ngày lập hóa đơn */}
                                <div className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl" style={{ paddingLeft: 6, paddingRight: 6}}>
                                    <label>Ngày lập hóa đơn&nbsp;<span style={{ color: 'red' }}>(*)</span></label>
                                </div>

                                {/* Phần chọn Từ ngày và Đến ngày */}
                                <div className="ant-col ant-col-18" style={{ paddingLeft: 175, paddingRight: 6, }}>
                                    {/* Hàng chứa Từ ngày */}
                                    <div className="ant-row" style={{marginTop: "-22px"}}>
                                        <div className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                            <label>Từ ngày</label>
                                        </div>
                                        <div className="ant-col ant-col-16" style={{paddingLeft: 70,marginTop: "-30px"}}>
                                            <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                                <div className="ant-col ant-form-item-control-wrapper">
                                                    <div className="ant-form-item-control has-success">
                                                        <span className="ant-form-item-children">
                                                            {/* DatePicker cho Từ ngày */}
                                                            <span id="tngay" className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker">
                                                                <div>
                                                                    <DatePicker style={{
                                                                        borderBottom: '1px solid #ccc',  // Đường line dưới
                                                                        borderLeft: 'none',               // Không có đường line bên trái
                                                                        borderRight: 'none',              // Không có đường line bên phải
                                                                        borderTop: 'none',                // Không có đường line phía trên
                                                                        borderRadius: '0'                 // Không có đường cong
                                                                    }} defaultValue={dayjs().subtract(30, 'days')} format={dateFormatList}/>
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hàng chứa Đến ngày */}
                                    <div className="ant-row"style={{ paddingLeft: 230, paddingRight: 6 }}>
                                        <div className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl" style={{marginTop: "-22px"}}>
                                            <label>Đến ngày</label>
                                        </div>
                                        <div className="ant-col ant-col-16" style={{paddingLeft: 75,marginTop: "-30px"}}>
                                            <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                                <div className="ant-col ant-form-item-control-wrapper">
                                                    <div className="ant-form-item-control has-success">
                                                        <span className="ant-form-item-children">
                                                            {/* DatePicker cho Đến ngày */}
                                                            <span id="dngay" className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker">
                                                                <div>
                                                                    <DatePicker style={{
                                                                        borderBottom: '1px solid #ccc',  // Đường line dưới
                                                                        borderLeft: 'none',               // Không có đường line bên trái
                                                                        borderRight: 'none',              // Không có đường line bên phải
                                                                        borderTop: 'none',                // Không có đường line phía trên
                                                                        borderRadius: '0'                 // Không có đường cong
                                                                    }} defaultValue={dayjs()} format={dateFormatList} />
                                                                </div>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div>
                            <label className="w-[25%]  px-2">Ký hiệu mẫu số hóa đơn</label>
                            <Select
                                defaultValue=""
                                style={{ width: 440 }}
                                onChange={handleChange}
                                options={[
                                    {
                                        label: '1',
                                        value: '1',
                                    },
                                    {
                                        label: '2',
                                        value: '2',
                                    },
                                    {
                                        label: '3',
                                        value: '3',
                                    },
                                    {
                                        label: '4',
                                        value: '4',
                                    },
                                    {
                                        label: '5',
                                        value: '5',
                                    },
                                    {
                                        label: '6',
                                        value: '6',
                                    },
                                ]}
                            />
                        </div>
                        <div className="my-3">
                            <label className="w-[25%]  px-2">Ký hiệu hóa đơn</label>
                            <input id='khhdon' className="w-[60%] border-b ml-5 " />
                        </div>
                    </main>

                </section>
                <div>
                    <div className='flex gap-5 justify-center'>
                        <button className='bg-[#915715] text-white px-3 py-1 rounded-[5px]'>Tìm kiếm</button>
                        <button className='bg-[#915715] text-white px-3 py-1 rounded-[5px]'>Bỏ tìm kiếm</button>
                    </div>
                </div>

                <div className='mt-14 flex justify-end px-[80px]'>
                    <Pagination current={current} onChange={onChange} total={30} />

                    <div className='flex gap-x-[20px] items-center pl-[20px]'>
                        <span onClick={viewBill} title='Xem hoa đơn' className='border p-[8px] border-[#000] rounded cursor-pointer hover:bg-slate-500 hover:text-white'>
                            <GrView />
                        </span>
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

                <BillTable />
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
                        <div className="border px-4 py-4">
                            <div className="py-2 flex justify-between">
                                <div className="text-center text-xl font-bold"><img src="../qr.jpg" /></div>
                                <div className=" text-base font-bold text-left">
                                    <div>Mẫu số {dataBill?.Mẫu_số}</div>
                                    <div>Ký hiệu: {dataBill?.Ký_hiệu}</div>
                                    <div>Số: {dataBill?.Số}</div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className="font-bold text-3xl">HOÁ ĐƠN GIÁ TRỊ GIA TĂNG</h2>
                                <p className=" text-base my-2">{dataBill?.Ngày_thành_lập}</p>
                                <p className=" text-base">MCCQT:
                                    {dataBill?.MCCQT}</p>
                            </div>
                            <div className="border-double border-y  border-l-0 border-r-0 border-gray-900 my-3 text-base py-2">
                                <p className="">Tên người bán: {dataBill?.Tên_người_bán}</p>
                                <p className="">Mã số thuế: {dataBill?.Mã_số_thuế}</p>
                                <p className="">Địa chỉ: {dataBill?.Địa_chỉ}</p>
                                <p className="">Điện thoại: {dataBill?.Điện_thoại}</p>
                                <p className="">Số tài khoản:  {dataBill?.Số_tài_khoản}</p>
                            </div>
                            <div>
                                <p className="">Tên người mua:CÔNG TY TNHH MỘT THÀNH VIÊN CÔNG NGHỆ VÀ TRUYỀN THÔNG 3I</p>
                                <p className="">Họ tên người mua: {dataBill?.Tên_người_mua}</p>
                                <p className="">Mã số thuế: {dataBill?.Mã_số_thuế_buyer}</p>
                                <p className="">Địa chỉ:  {dataBill?.Địa_chỉ_buyer}</p>
                                <p className="">Số tài khoản: {dataBill?.Số}</p>
                                <p className="">Hình thức thanh toán: {dataBill?.Hình_thức_thanh_toán} </p>
                                <p className="">Đơn vị tiền tệ: {dataBill?.Đơn_vị_tiền_tệ} </p>
                                <div className="flex justify-around ">
                                    <p className="">Số bảng kê: </p>
                                    <p className="">Ngày bảng kê: </p>
                                </div>
                                <div className="overflow-x-auto py-3">
                                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
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
        </div>
    )
}

export default BillOfSale