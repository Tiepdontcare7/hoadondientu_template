
const Inhoadon = () => {
    return (
        <div className="flex justify-center items-center h-auto bg-gray-200 text-gray-900 ">
            <div className="rounded-md relative w-[65%] shadow-2xl p-3 bg-[url('https://hoadondientu.gdt.gov.vn/static/images/viewinvoice-bg.jpg')] ">
                <div className="border px-4 py-4">
                    <div className="py-2 flex justify-between">
                        <div className="text-center text-xl font-bold"><img src="../qr.jpg" /></div>
                        <div className=" text-base font-bold text-left">
                            <div>Mẫu số 1</div>
                            <div>Ký hiệu: C23TDK</div>
                            <div>Số: 2771</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-3xl">HOÁ ĐƠN GIÁ TRỊ GIA TĂNG</h2>
                        <p className=" text-base my-2">Ngày
                            05
                            tháng
                            11
                            năm
                            2023</p>
                        <p className=" text-base">MCCQT:
                            00FB8169531B234F77B5960B8D491FDF96</p>
                    </div>
                    <div className="border-double border-y  border-l-0 border-r-0 border-gray-900 my-3 text-base py-2">
                        <p className="">Tên người bán: CÔNG TY CỔ PHẦN AKA HOUSE</p>
                        <p className="">Mã số thuế: 0314294897</p>
                        <p className="">Địa chỉ: 77 Trần Nhân Tôn, Phường 9, Quận 5, TP.HCM, VN</p>
                        <p className="">Điện thoại: </p>
                        <p className="">Số tài khoản: </p>
                    </div>
                    <div>
                        <p className="">Tên người mua:CÔNG TY TNHH MỘT THÀNH VIÊN CÔNG NGHỆ VÀ TRUYỀN THÔNG 3I</p>
                        <p className="">Họ tên người mua: </p>
                        <p className="">Mã số thuế: 0104113262</p>
                        <p className="">Địa chỉ:  Nhà B1- 4- khu đô thị 54 Hạ Đình, ngõ 85 Hạ Đình, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam </p>
                        <p className="">Số tài khoản: </p>
                        <p className="">Hình thức thanh toán: Tiền mặt/Chuyển khoản </p>
                        <p className="">Đơn vị tiền tệ: VND </p>
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
                                    <tr className="border">
                                        <td className=" border px-3 py-2 font-medium text-gray-900">1</td>
                                        <td className=" border px-3 py-2 text-gray-700">Hàng hóa, dịch vụ</td>
                                        <td className=" border px-3 py-2 text-gray-700">Khăn giấy ướt</td>
                                        <td className=" border px-3 py-2 text-gray-700">Phần</td>
                                        <td className=" border px-3 py-2 font-medium text-gray-900">1</td>
                                        <td className=" border px-3 py-2 text-gray-700">3.000</td>
                                        <td className=" border px-3 py-2 text-gray-700">0</td>
                                        <td className=" border px-3 py-2 text-gray-700">8%</td>
                                        <td className=" border px-3 py-2 font-medium text-gray-900">3.000</td>
                                    </tr>
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
                                            <th className=" border px-3 py-2 font-medium text-gray-900">292.000	</th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">
                                        <tr className="border">
                                            <td className=" border px-3 py-2 font-medium text-gray-900">Tổng giảm trừ không chịu thuế</td>
                                            <td className=" border px-3 py-2 text-gray-700"></td>
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
    )
}

export default Inhoadon