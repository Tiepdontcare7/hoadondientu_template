import BillTable from "./BillTable";
import { DatePicker, Select } from "antd";
import dayjs from "dayjs";

const BillBuying = () => {
    const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <div>Danh sách hóa đơn điện tử mua vào</div>

            <div>
                <section className="flex gap-4 mx-10 pt-3  justify-between">
                    <aside className=" w-1/2 py-3">
                        <div>
                            <label className="w-[20%]  px-2">
                                MST người mua
                            </label>
                            <input
                                id="nmmst"
                                className="w-[70%] border-b ml-5 "
                            />
                        </div>
                        <div className="my-3">
                            <label className="w-[20%]  px-2">
                                Trạng thái hóa đơn (*)
                            </label>
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
                            <label className="w-[25%]  px-2">
                                Kết quả kiểm tra (*)
                            </label>
                            <select className="w-[70%] border-b ml-5 ">
                                <option>Đã cấp mã hóa đơn</option>
                                <option>Tổng cục thuế đã nhận không mã</option>
                                <option>
                                    Tổng cục thuế đã nhận hóa đơn có mã khởi tạo
                                    từ máy tính tiền
                                </option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label className="w-[25%]  px-2">Số hóa đơn</label>
                            <input
                                id="shdon"
                                className="w-[70%] border-b ml-5 "
                            />
                        </div>
                        <div>
                            <label className="w-[25%]  px-2">
                                Hóa đơn ủy nhiệm
                            </label>
                            <input type="checkbox" className=" border-b  " />
                        </div>
                    </aside>
                    <main className="py-3 w-1/2">
                        <div>
                            <label className="w-[25%]  px-2">
                                CCCD người mua
                            </label>
                            <input
                                id="nmcccd"
                                className="w-[70%] border-b ml-5 "
                                type="text"
                            ></input>
                        </div>
                        <div className="my-3 d-flex">
                            <div className="d-flex items-center gapx-2">
                                {/* Label cho Ngày lập hóa đơn */}
                                <div className="px-2 mt-2">
                                    <label>
                                        Ngày lập hóa đơn&nbsp;
                                        <span style={{ color: "red" }}>
                                            (*)
                                        </span>
                                    </label>
                                </div>

                                {/* Phần chọn Từ ngày và Đến ngày */}
                                <div className="d-flex items-center">
                                    {/* Hàng chứa Từ ngày */}
                                    <div className="d-flex items-center gap-4">
                                        <div className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                            <label>Từ ngày</label>
                                        </div>
                                        <div>
                                            <span
                                                id="tngay"
                                                className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker"
                                            >
                                                <DatePicker
                                                    style={{
                                                        borderBottom:
                                                            "1px solid #ccc", // Đường line dưới
                                                        borderLeft: "none", // Không có đường line bên trái
                                                        borderRight: "none", // Không có đường line bên phải
                                                        borderTop: "none", // Không có đường line phía trên
                                                        borderRadius: "0", // Không có đường cong
                                                    }}
                                                    defaultValue={dayjs()}
                                                    format={dateFormatList}
                                                />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hàng chứa Đến ngày */}
                                    <div className="d-flex items-center gap-4">
                                        <div className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                            <label>Đến ngày</label>
                                        </div>
                                        <div>
                                            <span
                                                id="dngay"
                                                className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker"
                                            >
                                                <DatePicker
                                                    style={{
                                                        borderBottom:
                                                            "1px solid #ccc", // Đường line dưới
                                                        borderLeft: "none", // Không có đường line bên trái
                                                        borderRight: "none", // Không có đường line bên phải
                                                        borderTop: "none", // Không có đường line phía trên
                                                        borderRadius: "0", // Không có đường cong
                                                    }}
                                                    defaultValue={dayjs()}
                                                    format={dateFormatList}
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="w-[25%]  px-2">
                                Ký hiệu mẫu số hóa đơn
                            </label>
                            <Select
                                // defaultValue=""
                                style={{ width: 440 }}
                                onChange={handleChange}
                                options={[
                                    {
                                        label: "1",
                                        value: "1",
                                    },
                                    {
                                        label: "2",
                                        value: "2",
                                    },
                                    {
                                        label: "3",
                                        value: "3",
                                    },
                                    {
                                        label: "4",
                                        value: "4",
                                    },
                                    {
                                        label: "5",
                                        value: "5",
                                    },
                                    {
                                        label: "6",
                                        value: "6",
                                    },
                                ]}
                            />
                        </div>
                        <div className="my-3">
                            <label className="w-[25%]  px-2">
                                Ký hiệu hóa đơn
                            </label>
                            <input
                                id="khhdon"
                                className="w-[70%] border-b ml-5 "
                                type="text"
                            ></input>
                        </div>
                    </main>
                </section>

                <div></div>
                
                <div>
                    <div className="flex gap-5 justify-center">
                        <button className="bg-[#915715] text-white px-3 py-1 rounded-[5px]">
                            Tìm kiếm
                        </button>
                        <button className="bg-[#915715] text-white px-3 py-1 rounded-[5px]">
                            Bỏ tìm kiếm
                        </button>
                    </div>
                </div>

                <BillTable />
            </div>
        </div>
    );
};

export default BillBuying;
