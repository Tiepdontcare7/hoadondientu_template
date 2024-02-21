import dayjs from 'dayjs';
import { DatePicker } from 'antd';

const Soldout = () => {
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
    return (
        <div>
            <div>
                Danh sách hóa đơn điện tử bán ra
            </div>
            <div>
                <section className="flex gap-4 mx-10 pt-3  justify-between">
                    <aside className=" w-1/2 py-3">
                        <div>
                            <label className="w-[20%]  px-2">MST người mua</label>
                            <input className="w-[70%] border-b ml-5 " />
                        </div>
                        <div className="my-3">
                            <label className="w-[20%]  px-2">Trạng thái hóa đơn  (*)</label>
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
                            <label className="w-[20%]  px-2">Kết quả kiểm tra  (*)</label>
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
                            <label className="w-[20%]  px-2">Số hóa đơn</label>
                            <input className="w-[70%] border-b ml-5 " />
                        </div>
                        <div>
                            <label className="w-[25%]  px-2">Hóa đơn ủy nhiệm</label>
                            <input type="checkbox" className=" border-b  " />
                        </div>
                    </aside>
                    <main className="py-3 w-1/2">
                        <div>
                            <label className="w-[20%]  px-2">CCCD người mua</label>
                            <input className="w-[70%] border-b ml-5 " />
                        </div>
                        <div className="my-3">
                            <label className="w-[20%]  px-2">Ngày lập hóa đơn (*)
                            </label>
                            <span className='mr-2'> Từ ngày</span>
                            <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                            <span className='mx-2'> Đến ngày</span>
                            <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                        </div>
                        <div>
                            <label className="w-[20%]  px-2">Ký hiệu mẫu số hóa đơn</label>
                            <input className="w-[70%] border-b ml-5 " />
                        </div>
                        <div className="my-3">
                            <label className="w-[20%]  px-2">Ký hiệu hóa đơn</label>
                            <input className="w-[70%] border-b ml-5 " />
                        </div>
                    </main>

                </section>
                <div>
                    <div className='flex gap-5 justify-center'>
                    <button className='bg-[#915715] text-white px-3 py-1 rounded-[5px]'>Tìm kiếm</button>
                    <button className='bg-[#915715] text-white px-3 py-1 rounded-[5px]'>Bỏ tìm kiếm</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Soldout