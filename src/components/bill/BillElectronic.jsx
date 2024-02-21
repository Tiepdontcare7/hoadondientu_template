import { useContext, useState } from "react";
import { BillContext } from "../../context/BillContext";

const BillElectronic = (props) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const { setIdBill } = useContext(BillContext);

    const handleRowClick = (index) => {
        setSelectedRow(index === selectedRow ? null : index);
        setIdBill(index);
    };

    return (
        <>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
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
                                Tổng tiền thanh toán
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
                                ? props.data?.map((item, index) => {
                                      // console.log(item)
                                      return (
                                          <tr
                                              key={index}
                                              className={`cursor-pointer py-3 ${
                                                  index === selectedRow
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
                                                      item.tables[0].rows[0]
                                                          .Đơn_giá
                                                  }
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
            </div>
        </>
    );
};

export default BillElectronic;
