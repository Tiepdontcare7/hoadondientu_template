function formatCurrency(price) {
    const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
    });

    // Sử dụng hàm format của formatter để định dạng giá
    return formatter.format(price);
}

function generateRandomInvoice() {
    const statusOptions = [
        "Hóa đơn mới",
        "Hóa đơn đã xác nhận",
        "Hóa đơn đã thanh toán",
    ];
    const msts = ["1", "2", "3", "4", "5"];
    const kyhieus = ["C23TPA", "D45UVB", "K67LMN"];
    const ngays = ["31", "30", "29"];
    const thangs = ["01", "02", "03"];
    const nam = "2023"; // Năm cố định

    const tenNguoiMua = ["Nguyễn Văn A", "Trần Thị B", "Lê Minh C"];
    const hoTenNguoiMua = ["Nguyễn Văn D", "Trần Thị E", "Lê Minh F"];
    const maSoThueNguoiMua = ["1234567890", "0987654321", "1357924680"];
    const diaChiNguoiMua = ["123 Đường ABC", "456 Đường DEF", "789 Đường GHI"];

    const tenNguoiBan = [
        "CÔNG TY TNHH P.A VIỆT NAM",
        "CÔNG TY TNHH HPVD",
        "CÔNG TY PHẦN MỀM ABC",
        "TẬP ĐOÀN FPT VIỆT NAM",
        "TẬP ĐOÀN VIETTEL",
    ];

    const randomChoice = (array) =>
        array[Math.floor(Math.random() * array.length)];
    const randomNumber = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    const invoice = {
        Trạng_thái: randomChoice(statusOptions),
        Kết_quả_kiểm_tra_hóa_đơn: "Đã cấp mã hóa đơn",
        Mẫu_số: randomChoice(msts),
        Ký_hiệu: randomChoice(kyhieus),
        Số: randomNumber(10000, 99999).toString(),
        Tên_hóa_đơn: "HOÁ ĐƠN GIÁ TRỊ GIA TĂNG",
        Ngày_thành_lập: `Ngày ${randomChoice(ngays)} tháng ${randomChoice(
            thangs
        )} năm ${nam}`,
        MCCQT: "007B9D81AB83154DCF9B848736FBE6E53D",
        Ngày: randomChoice(ngays),
        tháng: randomChoice(thangs),
        năm: nam,
        Tên_người_bán: randomChoice(tenNguoiBan),
        Mã_số_thuế: "0302431595",
        Địa_chỉ:
            "833 Lê Hồng Phong, Phường 12, Quận 10, Thành phố Hồ Chí Minh, Việt Nam",
        Điện_thoại: "02822317777",
        Số_tài_khoản:
            "35144929   Ngân hàng TMCP Á Châu, phòng giao dịch Sư Vạn Hạnh, Q.10, TP.HCM",
        Tên_người_mua: randomChoice(tenNguoiMua),
        Họ_tên_người_mua: randomChoice(hoTenNguoiMua),
        Mã_số_thuế_buyer: randomChoice(maSoThueNguoiMua),
        Địa_chỉ_buyer: randomChoice(diaChiNguoiMua),
        Số_tài_khoản_buyer: "",
        Hình_thức_thanh_toán: "Tiền mặt/Chuyển khoản",
        Đơn_vị_tiền_tệ: "VND",
        Số_bảng_kê: "",
        Ngày_bảng_kê: "",
        tables: [
            {
                rows: [
                    {
                        STT: "1",
                        Tính_chất: "Hàng hóa, dịch vụ",
                        Tên_hàng_hóa_dịch_vụ: "PHÍ DUY TRÌ TÊN MIỀN",
                        Đơn_vị_tính: "",
                        Số_lượng: formatCurrency(randomNumber(1, 100)),
                        Đơn_giá: formatCurrency(randomNumber(100, 1000) * 1000),
                        Chiết_khấu: randomNumber(1, 5),
                        Thuế_suất: "KCT",
                        Thành_tiền_chưa_có_thuế_GTGT: formatCurrency(
                            randomNumber(100, 1000) * 1000
                        ),
                    },
                    {
                        STT: "2",
                        Tính_chất: "Hàng hóa, dịch vụ",
                        "Tên_hàng_hóa, dịch_vụ":
                            "DỊCH VỤ TÀI KHOẢN QUẢN TRỊ TÊN MIỀN NĂM TIẾP THEO",
                        Đơn_vị_tính: "",
                        Số_lượng: formatCurrency(randomNumber(1, 100)),
                        Đơn_giá: formatCurrency(randomNumber(100, 1000) * 100),
                        Chiết_khấu: "0",
                        Thuế_suất: "10%",
                        Thành_tiền_chưa_có_thuế_GTGT: formatCurrency(
                            randomNumber(100, 1000) * 1000
                        ),
                    },
                ],
            },
            {
                rows: [
                    {
                        STT: "1",
                        Tên_loại_phí: "",
                        Tiền_phí: randomNumber(10, 100) * 1000,
                    },
                ],
            },
            {
                rows: [
                    {
                        Thuế_suất: "KCT",
                        Tổng_tiền_chưa_thuế: formatCurrency(
                            randomNumber(100, 1000) * 1000
                        ),
                        Tổng_tiền_thuế: randomNumber(10, 100) * 1000,
                    },
                    {
                        Thuế_suất: "10%",
                        Tổng_tiền_chưa_thuế: formatCurrency(
                            randomNumber(100, 1000) * 1000
                        ),
                        Tổng_tiền_thuế: randomNumber(10, 100) * 1000,
                    },
                ],
            },
            {
                "Tổng_tiền_chưa_thuế\n(Tổng_cộng_thành_tiền_chưa_có_thuế)":
                    formatCurrency(randomNumber(100, 1000) * 1000),
                Tổng_tiền_thuế: randomNumber(10, 100) * 1000,
                Tổng_tiền_phí: "",
                Tổng_tiền_chiết_khấu_thương_mại: 0,
                Tổng_tiền_thanh_toán_bằng_số: formatCurrency(
                    randomNumber(100, 1000) * 1000
                ),
                Tổng_tiền_thanh_toán_bằng_chữ:
                    "Ba trăm sáu mươi nghìn đồng chẵn",
            },
        ],
    };

    return invoice;
}

function generateMultipleRandomInvoices(numberOfInvoices) {
    const invoices: any = [];
    for (let i = 0; i < numberOfInvoices; i++) {
        invoices.push(generateRandomInvoice());
    }
    return invoices;
}

export default generateMultipleRandomInvoices;
