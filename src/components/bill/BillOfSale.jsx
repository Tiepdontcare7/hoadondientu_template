import dayjs from "dayjs";
import { DatePicker } from "antd";
import BillTable from "./BillTable";
import { Select } from "antd";
import { SaleInvoices } from "../../data/data";
import { useState } from "react";

const BillOfSale = () => {
    const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
    const [toDay, setToday] = useState(dayjs());

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const handleFromDateChange = (value) => {
        value && setToday(value.add(1, "day"));
    };

    return (
        <>
            <div>
                <div>Danh sách hóa đơn điện tử bán ra</div>
                <div>
                    {/* <div></div> */}
                    {/* <div></div> */}
                    <section className="flex gap-4 mx-10 pt-3  justify-between">
                        <aside className=" w-1/2 py-3">
                            <div>
                                <label className="w-[25%]  px-2">
                                    MST người mua
                                </label>
                                <input
                                    id="nmmst"
                                    data-__meta="[object Object]"
                                    data-__field="[object Object]"
                                    className="w-[70%] border-b ml-5 "
                                    type="text"
                                ></input>
                            </div>
                            <div className="my-3">
                                <label className="w-[25%]  px-2">
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
                                    <option>Tất cả</option>
                                    <option>Tổng cục thuế đã nhận</option>
                                    <option>
                                        Đang tiến hành kiểm tra điều kiện cấp mã
                                    </option>
                                    <option>
                                        CQT từ chối hóa đơn theo từng lần phát
                                        sinh
                                    </option>
                                    <option>Hóa đơn đủ điều kiện cấp mã</option>
                                    <option>
                                        Hóa đơn không đủ điều kiện cấp mã
                                    </option>
                                    <option>Đã cấp mã hóa đơn</option>
                                    <option>
                                        Tổng cục thuế đã nhận không mã
                                    </option>
                                    <option>
                                        Đã kiểm tra định kỳ HĐĐT không có mã
                                    </option>
                                    <option>
                                        Tổng cục thuế đã nhận hóa đơn có mã khởi
                                        tạo từ máy tính tiền
                                    </option>
                                </select>
                            </div>
                            <div className="my-3">
                                <label className="w-[25%]  px-2">
                                    Số hóa đơn
                                </label>
                                <input
                                    id="shdon"
                                    className="w-[70%] border-b ml-5 "
                                />
                            </div>
                            <div>
                                <label className="w-[25%]  px-2">
                                    Hóa đơn ủy nhiệm
                                </label>
                                <input
                                    type="checkbox"
                                    className=" border-b  "
                                />
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
                                />
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
                                    <div
                                        className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                        style={{
                                            paddingLeft: 6,
                                            paddingRight: 6,
                                        }}
                                    >
                                        <label>
                                            Ngày lập hóa đơn&nbsp;
                                            <span style={{ color: "red" }}>
                                                (*)
                                            </span>
                                        </label>
                                    </div>

                                    {/* Phần chọn Từ ngày và Đến ngày */}
                                    <div
                                        className="ant-col ant-col-18"
                                        style={{
                                            paddingLeft: 175,
                                            paddingRight: 6,
                                        }}
                                    >
                                        {/* Hàng chứa Từ ngày */}
                                        <div
                                            className="ant-row"
                                            style={{ marginTop: "-22px" }}
                                        >
                                            <div className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                                <label>Từ ngày</label>
                                            </div>
                                            <div
                                                className="ant-col ant-col-16"
                                                style={{
                                                    paddingLeft: 70,
                                                    marginTop: "-30px",
                                                }}
                                            >
                                                <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                                    <div className="ant-col ant-form-item-control-wrapper">
                                                        <div className="ant-form-item-control has-success">
                                                            <span className="ant-form-item-children">
                                                                {/* DatePicker cho Từ ngày */}
                                                                <span
                                                                    id="tngay"
                                                                    className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker"
                                                                >
                                                                    <DatePicker
                                                                        style={{
                                                                            borderBottom:
                                                                                "1px solid #ccc", // Đường line dưới
                                                                            borderLeft:
                                                                                "none", // Không có đường line bên trái
                                                                            borderRight:
                                                                                "none", // Không có đường line bên phải
                                                                            borderTop:
                                                                                "none", // Không có đường line phía trên
                                                                            borderRadius:
                                                                                "0", // Không có đường cong
                                                                        }}
                                                                        defaultValue={dayjs().subtract(
                                                                            30,
                                                                            "days"
                                                                        )}
                                                                        onChange={
                                                                            handleFromDateChange
                                                                        }
                                                                        format={
                                                                            dateFormatList
                                                                        }
                                                                    />
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hàng chứa Đến ngày */}
                                        <div
                                            className="ant-row"
                                            style={{
                                                paddingLeft: 230,
                                                paddingRight: 6,
                                            }}
                                        >
                                            <div
                                                className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                                style={{
                                                    marginTop: "-22px",
                                                }}
                                            >
                                                <label>Đến ngày</label>
                                            </div>
                                            <div
                                                className="ant-col ant-col-16"
                                                style={{
                                                    paddingLeft: 75,
                                                    marginTop: "-30px",
                                                }}
                                            >
                                                <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                                    <div className="ant-col ant-form-item-control-wrapper">
                                                        <div className="ant-form-item-control has-success">
                                                            <span className="ant-form-item-children">
                                                                {/* DatePicker cho Đến ngày */}
                                                                <span
                                                                    id="dngay"
                                                                    className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker"
                                                                >
                                                                    <DatePicker
                                                                        style={{
                                                                            borderBottom:
                                                                                "1px solid #ccc", // Đường line dưới
                                                                            borderLeft:
                                                                                "none", // Không có đường line bên trái
                                                                            borderRight:
                                                                                "none", // Không có đường line bên phải
                                                                            borderTop:
                                                                                "none", // Không có đường line phía trên
                                                                            borderRadius:
                                                                                "0", // Không có đường cong
                                                                        }}
                                                                        value={
                                                                            toDay
                                                                        }
                                                                        defaultValue={dayjs()}
                                                                        format={
                                                                            dateFormatList
                                                                        }
                                                                    />
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
                                <label className="w-[25%]  px-2">
                                    Ký hiệu mẫu số hóa đơn
                                </label>
                                <Select
                                    defaultValue=""
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
                                    className="w-[60%] border-b ml-5 "
                                />
                            </div>
                        </main>
                    </section>

                    <div>
                        <div>
                            <div>
                                <form>
                                    <div></div>
                                    <div></div>
                                    <div className="flex gap-5 justify-center">
                                        <div>
                                            {" "}
                                            <button className="bg-[#915715] text-white px-3 py-1 rounded-[5px]">
                                                Tìm kiếm
                                            </button>
                                        </div>
                                        <div>
                                            {" "}
                                            <button className="bg-[#915715] text-white px-3 py-1 rounded-[5px]">
                                                Bỏ tìm kiếm
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <BillTable invoices={SaleInvoices} />
                </div>
                <div></div>
            </div>
        </>
    );
};

export default BillOfSale;
