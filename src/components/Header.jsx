import { useContext, useEffect, useState } from "react";
import { Modal } from "antd";
import { IoReload } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";
import { BillContext } from "../context/BillContext";
import { generateCaptcha } from "../utils/generateCaptcha";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  // const [captchaText, setCaptchaText] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha);
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
  // const generateCaptcha = () => {
  //   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let captcha = "";
  //   for (let i = 0; i < 6; i++) {
  //     captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  //   }
  //   setCaptchaText(captcha);
  // };

  // useEffect(() => {
  //   generateCaptcha();
  // }, []);

  // Hàm random img captcha
  const resetCaptcha = () => {
    setCaptcha(generateCaptcha);
  };

  const onFinish = (values) => {
    console.log("Success:", values);

    if (userInput.toUpperCase() === captcha.text.toUpperCase()) {
      // Xử lý khi captcha hợp lệ
      if (values.username === "123456" && values.password === "123456") {
        // Xử lý nếu nhập đúng username và password (fix cứng username và password là   )
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
      resetCaptcha(); // Tạo lại captcha mới
    }
    setUserInput("");
  };

  return (
    <>
      {/* <!-- Navigation--> */}
      <header
        className="bg-[url('https://hoadondientu.gdt.gov.vn/static/images/bg_hd.png')] navbar navbar-expand-lg navbar-light bg-white z-10 fixed-top py-3 shadow-sm"
        // id="mainNav"
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
          <div className="my-2 navbar-nav ms-auto my-lg-0">
            <div className="nav-item">
              <a className="nav-link text-[20px] text-black" href="/">
                Trang chủ
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-[20px] text-black" href="">
                Giới thiệu
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-[20px] text-black" href="">
                Hỗ trợ
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-[20px] text-black" href="">
                Liên hệ
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-[20px] text-black" href="">
                Danh sách TCTN
              </a>
            </div>
            <div onClick={() => toggleModal(0, true)} className="nav-item text-[20px] text-black hover:cursor-pointer">
              {/* <a
                                className="nav-link text-[20px] text-black"
                                href="#"
                            > */}
              <span>Đăng nhập</span>
              {/* </a> */}
            </div>
          </div>
        </div>
        <div className="mt-[1px]"></div>
      </header>

      <Modal
        title="Đăng nhập"
        open={isModalOpen[0]}
        onOk={() => toggleModal(0, false)}
        onCancel={() => toggleModal(0, false)}
        footer=""
        styles={modalStyles}
      >
        {/* <div className="max-w-screen-xl px-4 py-3 mx-auto sm:px-6 lg:px-8"> */}
        <Form onFinish={onFinish} autoComplete="off">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="ant-col ant-col-24 ant-form-item-label">
                <label htmlFor="username" className="mb-2">
                  Tên đăng nhập
                </label>
              </div>
              <Form.Item
                id="username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
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
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </div>

            <div>
              <div>
                <div htmlFor="text" className="mb-2">
                  Mã captcha
                </div>

                <div className="Captcha__ImageWrapper-sc-1up1k1e-0 hkCCjI">
                  <div>
                    <span>
                      <div>
                        <img
                          className="filter grayscale Captcha__Image-sc-1up1k1e-1 cmYBSe"
                          // src={`https://dummyimage.com/200x38/444/fff&text=${captchaText}`}
                          src={captcha.src}
                          alt="captcha"
                        />
                      </div>
                    </span>
                  </div>

                  <button
                    type="button"
                    className="cursor-pointer text-[20px] relative text-white bottom-8 left-[170px] inline-block ant-btn ButtonAnt__IconButton-sc-p5q16s-1 kgBiib ant-btn-icon-only"
                    // onClick={generateCaptcha}
                    onClick={resetCaptcha}
                  >
                    <i className="anticon">
                      <IoReload />
                    </i>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div className="ant-col ant-col-24 ant-form-item-label">
                <label htmlFor="cvalue" className="mb-2">
                  Nhập mã captcha
                </label>
              </div>
              <div className="ant-col ant-col-24 ant-form-item-control-wrapper">
                <div className="ant-form-item-control">
                  <span className="ant-form-item-children">
                    <input
                      id="cvalue"
                      type="text"
                      value={userInput}
                      onChange={(event) => setUserInput(event.target.value)}
                      className="w-full p-2 text-sm border-gray-200 rounded-sm shadow-sm pe-12 ant-input Input-sc-16b2ylx-0 ggIKll"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#936639]">Quên mật khẩu</p>
            </div>
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
        {/* </div> */}
      </Modal>
    </>
  );
};

export default Header;
