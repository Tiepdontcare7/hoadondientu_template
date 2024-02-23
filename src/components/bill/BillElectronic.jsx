import { useContext, useState } from "react";
import { BillContext } from "../../context/BillContext";

const BillElectronic = (props) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const { setIdBill } = useContext(BillContext);

    const handleRowClick = (index) => {
        setSelectedRow(index === selectedRow ? null : index);
        setIdBill(index);
    };

    function formatCurrency(price) {
        const formatter = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
            minimumFractionDigits: 0,
        });

        // Sử dụng hàm format của formatter để định dạng giá
        return formatter.format(price);
    }

    return (
        <>
            {/* <div className="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">
                                STT
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Ký hiệu mẫu số
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Ký hiệu hóa đơn
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Số hóa đơn
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Ngày lập
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Thông tin người bán
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Tổng tiền chưa thuế
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Tổng tiền thuế
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Tổng tiền chiết khấu thương mại
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Tổng tiền phí
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Tổng tiền thanh toán
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Đơn vị tiền tệ
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Trạng thái hóa đơn
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Kết quả kiểm tra hóa đơn
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Hóa đơn liên quan
                            </th>
                            <th className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                Thông tin liên quan
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            // eslint-disable-next-line react/prop-types
                            props.data
                                // eslint-disable-next-line react/prop-types
                                ? props.data?.map((item, index) => {
                                    // console.log(item)
                                    return (
                                        <tr
                                            key={index}
                                            className={`cursor-pointer py-3 ${index === selectedRow
                                                ? "bg-neutral-200"
                                                : ""
                                                }`}
                                            onClick={() =>
                                                handleRowClick(index)
                                            }
                                        >
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {index + 1}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {item.Ký_hiệu}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {item.Số}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {item.Mã_số_thuế_buyer}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {item.Ngày_thành_lập}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {item.Tên_người_bán}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {
                                                    item.tables[0].rows[0]
                                                        .Đơn_giá
                                                }
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {
                                                    item.tables[0].rows[0]
                                                        .Đơn_giá
                                                }
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {
                                                    item.tables[0].rows[0]
                                                        .Thành_tiền_chưa_có_thuế_GTGT
                                                }
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {
                                                    formatCurrency(Math.floor(Math.random() * 10000))
                                                }
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {
                                                    item.tables[0].rows[0]
                                                        .Đơn_giá
                                                }
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                VND
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {item.Trạng_thái}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                {item.Hình_thức_thanh_toán}
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                Xem danh sách hóa đơn
                                            </td>
                                            <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                Thông tin liên quan
                                            </td>
                                        </tr>
                                    );
                                })
                                : undefined
                        }
                    </tbody>
                </table>
            </div> */}
           

            <div className="ant-table-wrapper Table__TableStyled-sc-1qus7rx-1 iNojWa">
                <div className="ant-spin-nested-loading">
                    <div className="ant-spin-container">
                        <div className="ant-table ant-table-default ant-table-bordered ant-table-empty ant-table-fixed-header ant-table-scroll-position-left ant-table-layout-fixed">
                            <div className="ant-table-content">
                                <div className="ant-table-scroll">
                                    <div
                                        className="ant-table-header ant-table-hide-scrollbar"
                                        style={{
                                            marginBottom: "-17px",
                                            paddingBottom: 0,
                                            minWidth: 17,
                                            overflow: "scroll",
                                        }}
                                    >
                                        <table
                                            className="ant-table-fixed"
                                            style={{ width: 300 }}
                                        >
                                            <colgroup>
                                                <col
                                                    style={{
                                                        width: 65,
                                                        minWidth: 65,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 65,
                                                        minWidth: 65,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 250,
                                                        minWidth: 250,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 210,
                                                        minWidth: 210,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 210,
                                                        minWidth: 210,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 170,
                                                        minWidth: 170,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 170,
                                                        minWidth: 170,
                                                    }}
                                                />
                                            </colgroup>
                                            <thead className="ant-table-thead">
                                                <tr>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    STT
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Ký hiệu
                                                                        <br />
                                                                        mẫu số
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Ký hiệu
                                                                        <br />
                                                                        hóa đơn
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    Số hóa đơn
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    Ngày lập
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Thông tin hóa đơn
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Tổng tiền
                                                                        <br />
                                                                        chưa thuế
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    Tổng tiền thuế
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Tổng tiền
                                                                        <br />
                                                                        chiết khấu
                                                                        <br />
                                                                        thương mại
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Tổng tiền phí
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Tổng tiền
                                                                        <br />
                                                                        thanh toán
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Đơn vị
                                                                        <br />
                                                                        tiền tệ
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Trạng thái
                                                                        <br />
                                                                        hóa đơn
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    <span>
                                                                        Kết quả
                                                                        <br />
                                                                        kiểm tra hóa đơn
                                                                    </span>
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    Hóa đơn liên quan
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                    <th
                                                        className="ant-table-align-center ant-table-row-cell-break-word ant-table-row-cell-last"
                                                        style={{
                                                            textAlign: "center",
                                                        }}
                                                    >
                                                        <span className="ant-table-header-column">
                                                            <div>
                                                                <span className="ant-table-column-title">
                                                                    Thông tin liên quan
                                                                </span>
                                                                <span className="ant-table-column-sorter" />
                                                            </div>
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>

                                    <div
                                        // tabIndex={-1}
                                        className="ant-table-body"
                                        style={{
                                            overflow: "scroll",
                                            maxHeight: 500,
                                        }}
                                    >
                                        <table
                                            className="ant-table-fixed"
                                            style={{ width: 300 }}
                                        >
                                            {/* <colgroup>
                                                <col
                                                    style={{
                                                        width: 65,
                                                        minWidth: 65,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 65,
                                                        minWidth: 65,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 250,
                                                        minWidth: 250,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 210,
                                                        minWidth: 210,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 210,
                                                        minWidth: 210,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 150,
                                                        minWidth: 150,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 170,
                                                        minWidth: 170,
                                                    }}
                                                />
                                                <col
                                                    style={{
                                                        width: 170,
                                                        minWidth: 170,
                                                    }}
                                                />
                                            </colgroup> */}
                                            <tbody className="ant-table-tbody">

                                                {
                                                    // eslint-disable-next-line react/prop-types
                                                    props.data
                                                        // eslint-disable-next-line react/prop-types
                                                        ? props.data?.map((item, index) => {
                                                            // console.log(item)
                                                            return (
                                                                <tr
                                                                    key={index}
                                                                    className={`cursor-pointer py-3 ${index === selectedRow
                                                                        ? "bg-neutral-200"
                                                                        : ""
                                                                        }`}
                                                                    onClick={() =>
                                                                        handleRowClick(index)
                                                                    }
                                                                >
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{index + 1}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{item.Ký_hiệu}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{item.Số}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{item.Mã_số_thuế_buyer}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{item.Ngày_thành_lập}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{item.Tên_người_bán}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>
                                                                            {
                                                                                item.tables[0].rows[0]
                                                                                    .Đơn_giá
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>
                                                                            {
                                                                                item.tables[0].rows[0]
                                                                                    .Đơn_giá
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>
                                                                            {
                                                                                item.tables[0].rows[0]
                                                                                    .Thành_tiền_chưa_có_thuế_GTGT
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>
                                                                            {
                                                                                formatCurrency(Math.floor(Math.random() * 10000))
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>
                                                                            {
                                                                                item.tables[0].rows[0]
                                                                                    .Đơn_giá
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        VND
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{item.Trạng_thái}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        <span>{item.Hình_thức_thanh_toán}</span>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        Xem danh sách hóa đơn
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                        Thông tin liên quan
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })
                                                        : undefined
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* <div className="ant-table-placeholder">
                                        <div
                                            style={{ color: "rgb(0, 0, 0)" }}
                                        >
                                            Không có dữ liệu hiển thị
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BillElectronic;