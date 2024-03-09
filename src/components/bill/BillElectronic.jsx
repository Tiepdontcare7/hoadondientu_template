import { useContext, useState } from "react";
import { BillContext } from "../../context/BillContext";
import invoiceData from '../../data/copyx_1.json'; // Import dữ liệu từ file JSON
// import PaginationBill from "../Pagination";
import { Pagination } from 'antd';

const BillElectronic = () => {
    const [selectedRow, setSelectedRow] = useState(null);
    const [invoiceData2, setInvoiceData] = useState(invoiceData.invoices.slice(0, 50));

    const { setIdBill } = useContext(BillContext);

    const handleRowClick = (index) => {
        console.log(index);
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

    // console.log(invoiceData.invoices)
    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
        const startIndex = (current - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const newData = invoiceData.invoices.slice(startIndex, endIndex);
        setInvoiceData(newData);
    };

    return (
        <>
            <div></div>
            <div>
                {/* <div></div>

                <div></div>
                <div></div>
                <div></div>
                <div></div> */}

                <div>
                    <div></div>

                    <div className="ant-table-wrapper Table__TableStyled-sc-1qus7rx-1 iNojWa">
                        <div className="ant-spin-nested-loading">
                            <div className="ant-spin-container">
                                <div className="ant-table ant-table-default ant-table-bordered ant-table-empty ant-table-fixed-header ant-table-scroll-position-left ant-table-layout-fixed">
                                    <div className="ant-table-content">
                                        <div className="ant-table-scroll">
                                            <div
                                                className="ant-table-header ant-table-hide-scrollbar mb-2"
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
                                                                    textAlign:
                                                                        "center",
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
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Ký
                                                                                hiệu
                                                                                <br />
                                                                                mẫu
                                                                                số
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Ký
                                                                                hiệu
                                                                                <br />
                                                                                hóa
                                                                                đơn
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            Số
                                                                            hóa
                                                                            đơn
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            Ngày
                                                                            lập
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Thông
                                                                                tin
                                                                                hóa
                                                                                đơn
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Tổng
                                                                                tiền
                                                                                <br />
                                                                                chưa
                                                                                thuế
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            Tổng
                                                                            tiền
                                                                            thuế
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Tổng
                                                                                tiền
                                                                                <br />
                                                                                chiết
                                                                                khấu
                                                                                <br />
                                                                                thương
                                                                                mại
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Tổng
                                                                                tiền
                                                                                phí
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Tổng
                                                                                tiền
                                                                                <br />
                                                                                thanh
                                                                                toán
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Đơn
                                                                                vị
                                                                                <br />
                                                                                tiền
                                                                                tệ
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Trạng
                                                                                thái
                                                                                <br />
                                                                                hóa
                                                                                đơn
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            <span>
                                                                                Kết
                                                                                quả
                                                                                <br />
                                                                                kiểm
                                                                                tra
                                                                                hóa
                                                                                đơn
                                                                            </span>
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            Hóa
                                                                            đơn
                                                                            liên
                                                                            quan
                                                                        </span>
                                                                        <span className="ant-table-column-sorter" />
                                                                    </div>
                                                                </span>
                                                            </th>
                                                            <th
                                                                className="ant-table-align-center ant-table-row-cell-break-word ant-table-row-cell-last"
                                                                style={{
                                                                    textAlign:
                                                                        "center",
                                                                }}
                                                            >
                                                                <span className="ant-table-header-column">
                                                                    <div>
                                                                        <span className="ant-table-column-title">
                                                                            Thông
                                                                            tin
                                                                            liên
                                                                            quan
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

                                                    <tbody className="ant-table-tbody">
                                                        {
                                                            // eslint-disable-next-line react/prop-types
                                                            invoiceData2
                                                                ? // eslint-disable-next-line react/prop-types
                                                                invoiceData2?.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
                                                                        // console.log(item)
                                                                        return (
                                                                            <tr
                                                                                key={
                                                                                    index
                                                                                }
                                                                                className={`cursor-pointer py-3 ${index ===
                                                                                        selectedRow
                                                                                        ? "bg-neutral-200"
                                                                                        : ""
                                                                                    }`}
                                                                                onClick={() =>
                                                                                    handleRowClick(
                                                                                        index
                                                                                    )
                                                                                }
                                                                            >
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {index +
                                                                                            1}
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    {
                                                                                        item[
                                                                                        "Ki_hieu"
                                                                                        ]
                                                                                    }
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item[
                                                                                            "So"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item[
                                                                                            "Ki_hieu"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {item[
                                                                                            "Ngày"
                                                                                        ] +
                                                                                            "-" +
                                                                                            item[
                                                                                            "Tháng"
                                                                                            ] +
                                                                                            "-" +
                                                                                            item[
                                                                                            "Năm"
                                                                                            ]}
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item[
                                                                                            "Địa chỉ:buyer"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    {
                                                                                        item
                                                                                            ?.tables_1[0]
                                                                                            .row[0][
                                                                                        "Thành tiền chưa có thuế GTGT"
                                                                                        ]
                                                                                    }
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item
                                                                                                ?.tables_1[0]
                                                                                                .row[0][
                                                                                            "Đơn giá"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item[
                                                                                            "Tên người mua"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item[
                                                                                            "Địa chỉ"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item
                                                                                                .tables_1[0]
                                                                                                .row[0][
                                                                                            "Điện thoại"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item
                                                                                                .tables_1[0][
                                                                                            "Địa chỉ:buyer"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {formatCurrency(
                                                                                            Math.floor(
                                                                                                Math.random() *
                                                                                                10000
                                                                                            )
                                                                                        )}
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item
                                                                                                .tables_1[0]
                                                                                                .row[0][
                                                                                            "Số tài khoản:buyer"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    VND
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item[
                                                                                            "Trạng thái"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    <span>
                                                                                        {
                                                                                            item[
                                                                                            "Hình thức thanh toán"
                                                                                            ]
                                                                                        }
                                                                                    </span>
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    Xem
                                                                                    danh
                                                                                    sách
                                                                                    hóa
                                                                                    đơn
                                                                                </td>
                                                                                <td className="whitespace-nowrap px-[20px] py-2 font-medium text-gray-900">
                                                                                    Thông
                                                                                    tin
                                                                                    liên
                                                                                    quan
                                                                                </td>
                                                                            </tr>
                                                                        );
                                                                    }
                                                                )
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

                                            <div className="my-10 ml-[30%]">
                                                <Pagination
                                                    showSizeChanger
                                                    onChange={onShowSizeChange}
                                                    defaultCurrent={1}
                                                    defaultPageSize={20}
                                                    total={invoiceData?.invoices?.length}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
};

export default BillElectronic;
