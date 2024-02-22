import { useContext, useEffect, useState } from "react";
import { Modal } from "antd";
import { IoReload } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { BillContext } from "../context/BillContext";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState([false, false]);
    const [captchaText, setCaptchaText] = useState("");
    const [userInput, setUserInput] = useState("");
    const next = useNavigate();

    const { setIsToasting, setToastMessage } = useContext(BillContext);

    const toggleModal = (idx, target) => {
        setIsModalOpen((p) => {
            p[idx] = target;
            return [...p];
        });
    };

    const modalStyles = {
        header: {
            borderLeft: `25px solid #936639`,
            borderRadius: 0,
            paddingInlineStart: 5,
        },
        body: {
            // boxShadow: 'inset 0 0 5px #999',
            // borderRadius: 5,
        },
        content: {
            boxShadow: "0 0 30px #999",
        },
    };

    // Hàm tạo mã captcha ngẫu nhiên
    const generateCaptcha = () => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let captcha = "";
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        setCaptchaText(captcha);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const onFinish = (values) => {
        console.log("Success:", values);

        if (userInput.toUpperCase() === captchaText.toUpperCase()) {
            // Xử lý khi captcha hợp lệ
            if (values.username === "123456" && values.password === "123456") {
                // Xử lý nếu nhập đúng username và password (fix cứng username và password là 123456)
                next("/home");
                toggleModal(0, false);
            } else {
                // Xử lý khi nhập sai username hoặc password
                setIsToasting(true);
                setToastMessage("Tên đăng nhập hoặc mật khẩu không đúng");
            }
        } else {
            // Toast error message
            setIsToasting(true);
            setToastMessage("Mã captcha không đúng.");
            generateCaptcha(); // Tạo lại captcha mới
        }
        setUserInput("");
    };

    return (
        <>
            {/* <!-- Navigation--> */}
            <nav
                className="bg-[url('https://hoadondientu.gdt.gov.vn/static/images/bg_hd.png')] navbar navbar-expand-lg navbar-light bg-white z-10 fixed-top py-3 shadow-sm"
                id="mainNav"
            >
                <div className="container px-4 px-lg-5">
                    <a href="/">
                        <img src="/NTT_Logo.png" alt="logo" />
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link text-[20px] text-black"
                                    href="/"
                                >
                                    Trang chủ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-[20px] text-black"
                                    href=""
                                >
                                    Giới thiệu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-[20px] text-black"
                                    href=""
                                >
                                    Hỗ trợ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-[20px] text-black"
                                    href=""
                                >
                                    Liên hệ
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link text-[20px] text-black"
                                    href=""
                                >
                                    Danh sách TCTN
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    onClick={() => toggleModal(0, true)}
                                    className="nav-link text-[20px] text-black"
                                    href="#"
                                >
                                    <div className="ant-col home-header-menu-item">
                                        <span>Đăng nhập</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Modal
                title="Đăng nhập"
                open={isModalOpen[0]}
                onOk={() => toggleModal(0, false)}
                onCancel={() => toggleModal(0, false)}
                footer=""
                styles={modalStyles}
            >
                <div className="mx-auto max-w-screen-xl px-4 py-3 sm:px-6 lg:px-8">
                    <Form onFinish={onFinish} autoComplete="off">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="username" className="mb-2">
                                    Tên đăng nhập
                                </label>
                                <Form.Item
                                    id="username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2">
                                    Mật khẩu
                                </label>
                                <Form.Item
                                    id="password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </div>

                            <div>
                                <label htmlFor="text" className="mb-2">
                                    Mã captcha
                                </label>
                                <img
                                    className="filter grayscale"
                                    src={`https://dummyimage.com/200x38/444/fff&text=${captchaText}`}
                                    alt="Captcha"
                                />

                                <span
                                    className="cursor-pointer text-[20px] relative text-white bottom-8 left-[170px] inline-block"
                                    onClick={generateCaptcha}
                                >
                                    <IoReload />
                                </span>
                            </div>

                            <div>
                                <label htmlFor="cvalue" className="mb-2">
                                    Nhập mã captcha
                                </label>
                                <input
                                    id="cvalue"
                                    type="text"
                                    value={userInput}
                                    onChange={(event) =>
                                        setUserInput(event.target.value)
                                    }
                                    className="w-full rounded-sm border-gray-200 p-2 pe-12 text-sm shadow-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <p className="text-sm text-[#936639]">
                                Quên mật khẩu
                            </p>
                            <div className="flex justify-center mt-3">
                                <button
                                    type="submit"
                                    className="inline-block rounded-sm shadow-sm bg-[#936639] px-4 py-2 text-sm font-medium text-white"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default Header;
