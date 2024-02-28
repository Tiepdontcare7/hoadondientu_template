/* eslint-disable react/prop-types */
import { useState } from "react";
import BillBuying from "../components/bill/BillBuying";
import BillOfSale from "../components/bill/BillOfSale";

const items = [
  {
    key: "1",
    label: "Tra cứu hóa đơn điện tử bán ra",
    children: <BillOfSale />,
  },
  {
    key: "2",
    label: "Tra cứu hóa đơn điện tử mua vào",
    children: <BillBuying />,
  },
];

const CheckBill = () => {
  const [activeKey, setActiveKey] = useState("1");

  const CustomTabs = ({ items, activeKey, onChange }) => {
    return (
      <>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div className="custom-tabs flex">
                    {/* <div className="custom-tabs flex"> */}
                    {items?.map((item) => (
                      <div
                        key={item.key}
                        className={`custom-tab ${
                          activeKey === item.key ? "active" : ""
                        } border py-2 px-2 mt-4 mb-4 cursor-pointer`}
                        onClick={() => onChange(item.key)}
                      >
                        <span>{item.label}</span>
                      </div>
                    ))}
                    {/* </div> */}
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const onChange = (key) => {
    console.log(key);
    setActiveKey(key);
  };

  return (
    <>
      <main>
        <div>
          <div>
            <div>
              <div>
                {/* <Tabs id={null} defaultActiveKey="1" items={items} onChange={onChange} /> */}

                <CustomTabs items={items} activeKey={activeKey} onChange={onChange} />

                <div></div>

                {activeKey === "1" ? <BillOfSale /> : <BillBuying />}
                {/* {activeKey === "2" && } */}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <main className="styles__ContentWrapper-sc-1mp373d-1 hPlCCR ant-layout-content">
        <div className="styles__PageWrapper-sc-eevgvg-1 bKhKhj">
          <div className="ant-row-flex ant-row-flex-center">
            <div className="ant-col ld-tabs ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-22">
              <div className="ant-tabs ant-tabs-top Tabs-sc-1nufobv-0 iMcRvz ant-tabs-line">
                <div
                  role="tablist"
                  className="ant-tabs-bar ant-tabs-top-bar"
                  tabIndex={0}
                >
                  <div className="ant-tabs-nav-container">
                    <span
                      unselectable="unselectable"
                      className="ant-tabs-tab-prev ant-tabs-tab-btn-disabled"
                    >
                      <span className="ant-tabs-tab-prev-icon">
                        <i
                          aria-label="icon: left"
                          className="anticon anticon-left ant-tabs-tab-prev-icon-target"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className
                            data-icon="left"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                          </svg>
                        </i>
                      </span>
                    </span>
                    <span
                      unselectable="unselectable"
                      className="ant-tabs-tab-next ant-tabs-tab-btn-disabled"
                    >
                      <span className="ant-tabs-tab-next-icon">
                        <i
                          aria-label="icon: right"
                          className="anticon anticon-right ant-tabs-tab-next-icon-target"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            className
                            data-icon="right"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                          </svg>
                        </i>
                      </span>
                    </span>
                    <div className="ant-tabs-nav-wrap">
                      <div className="ant-tabs-nav-scroll">
                        <div className="ant-tabs-nav ant-tabs-nav-animated">
                          <div>
                            <div
                              role="tab"
                              aria-disabled="false"
                              aria-selected="true"
                              className="ant-tabs-tab-active ant-tabs-tab"
                            >
                              <span>Tra cứu hóa đơn điện tử bán ra</span>
                            </div>
                            <div
                              role="tab"
                              aria-disabled="false"
                              aria-selected="false"
                              className=" ant-tabs-tab"
                            >
                              <span>Tra cứu hóa đơn điện tử mua vào</span>
                            </div>
                          </div>
                          <div
                            className="ant-tabs-ink-bar ant-tabs-ink-bar-animated"
                            style={{
                              display: "block",
                              transform: "translate3d(0px, 0px, 0px)",
                              width: 255,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  role="presentation"
                  style={{
                    width: 0,
                    height: 0,
                    overflow: "hidden",
                    position: "absolute",
                  }}
                />
                <div
                  className="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"
                  style={{ marginLeft: "0%" }}
                >
                  <div
                    role="tabpanel"
                    aria-hidden="false"
                    className="ant-tabs-tabpane ant-tabs-tabpane-active"
                  >
                    <div
                      tabIndex={0}
                      role="presentation"
                      style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        position: "absolute",
                      }}
                    />
                    <div className="ant-row-flex ld-header">
                      <div className="ant-col ant-col-12 ld-header-title">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={39}
                          height={30}
                        >
                          <defs>
                            <clipPath id="a">
                              <path d="M0 0h39v30H0z" />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#a)">
                            <path
                              data-name="Path 53089"
                              d="M0 0h26.8l11.537 14.383L26.8 30H0z"
                              fill="#915715"
                            />
                          </g>
                        </svg>
                        <span>Danh sách hóa đơn điện tử bán ra</span>
                      </div>
                    </div>
                    <div className="ant-row">
                      <div className="ant-col ant-col-24">
                        <div className="ant-row-flex ant-row-flex-center ld-form">
                          <div className="ant-col styles__FormWrapper-sc-eevgvg-0 iqDBUc ant-col-xs-24 ant-col-sm-24 ant-col-md-24 ant-col-lg-22">
                            <form className="ant-form ant-form-horizontal">
                              <div
                                className="ant-row"
                                style={{
                                  marginLeft: "-18px",
                                  marginRight: "-18px",
                                }}
                              >
                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div
                                    className="ant-row"
                                    style={{
                                      marginLeft: "-9px",
                                      marginRight: "-9px",
                                    }}
                                  >
                                    <div
                                      className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <label>MST người mua</label>
                                    </div>
                                    <div
                                      className="ant-col ant-col-18"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control">
                                            <span className="ant-form-item-children">
                                              <input
                                                id="nmmst"
                                                data-__meta="[object Object]"
                                                data-__field="[object Object]"
                                                className="ant-input Input__BorderBottomInput-sc-16b2ylx-2 fAKTjC"
                                                type="text"
                                                defaultValue
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div
                                    className="ant-row"
                                    style={{
                                      marginLeft: "-9px",
                                      marginRight: "-9px",
                                    }}
                                  >
                                    <div
                                      className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <label>CCCD người mua</label>
                                    </div>
                                    <div
                                      className="ant-col ant-col-18"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control">
                                            <span className="ant-form-item-children">
                                              <input
                                                id="nmcccd"
                                                data-__meta="[object Object]"
                                                data-__field="[object Object]"
                                                className="ant-input Input__BorderBottomInput-sc-16b2ylx-2 fAKTjC"
                                                type="text"
                                                defaultValue
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div className="ant-row">
                                    <div className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                      <label>
                                        <span>Trạng thái hóa đơn</span> &nbsp;
                                        <span style={{ color: "red" }}>
                                          (*)
                                        </span>
                                      </label>
                                    </div>
                                    <div className="ant-col ant-col-18">
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                              <div
                                                id="tthai"
                                                className="Select__BorderBottomSelect-sc-gv2ysz-0 kteLHf ant-select ant-select-enabled"
                                              >
                                                <div
                                                  className="ant-select-selection
      ant-select-selection--single"
                                                  role="combobox"
                                                  aria-autocomplete="list"
                                                  aria-haspopup="true"
                                                  aria-controls="6b3b24cd-1be8-4d6a-8d86-9b649b9ac6f2"
                                                  aria-expanded="false"
                                                  data-__meta="[object Object]"
                                                  data-__field="[object Object]"
                                                  tabIndex={0}
                                                >
                                                  <div className="ant-select-selection__rendered">
                                                    <div
                                                      className="ant-select-selection-selected-value"
                                                      title="Tất cả"
                                                      style={{
                                                        display: "block",
                                                        opacity: 1,
                                                      }}
                                                    >
                                                      Tất cả
                                                    </div>
                                                  </div>
                                                  <span
                                                    className="ant-select-arrow"
                                                    unselectable="on"
                                                    style={{
                                                      userSelect: "none",
                                                    }}
                                                  >
                                                    <i
                                                      aria-label="icon: down"
                                                      className="anticon anticon-down ant-select-arrow-icon"
                                                    >
                                                      <svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        className
                                                        data-icon="down"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                      >
                                                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                      </svg>
                                                    </i>
                                                  </span>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div
                                    className="ant-row"
                                    style={{
                                      marginLeft: "-6px",
                                      marginRight: "-6px",
                                    }}
                                  >
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
                                    <div
                                      className="ant-col ant-col-9"
                                      style={{
                                        paddingLeft: 6,
                                        paddingRight: 6,
                                      }}
                                    >
                                      <div className="ant-row">
                                        <div className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                          <label>Từ ngày</label>
                                        </div>
                                        <div className="ant-col ant-col-16">
                                          <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                            <div className="ant-col ant-form-item-control-wrapper">
                                              <div className="ant-form-item-control has-success">
                                                <span className="ant-form-item-children">
                                                  <span
                                                    id="tngay"
                                                    className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker"
                                                  >
                                                    <div>
                                                      <input
                                                        readOnly
                                                        placeholder="Chọn thời điểm"
                                                        className="ant-calendar-picker-input ant-input"
                                                        defaultValue="23/01/2024"
                                                      />
                                                      <i
                                                        aria-label="icon: close-circle"
                                                        tabIndex={-1}
                                                        className="anticon anticon-close-circle ant-calendar-picker-clear"
                                                      >
                                                        <svg
                                                          viewBox="64 64 896 896"
                                                          focusable="false"
                                                          className
                                                          data-icon="close-circle"
                                                          width="1em"
                                                          height="1em"
                                                          fill="currentColor"
                                                          aria-hidden="true"
                                                        >
                                                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                                                        </svg>
                                                      </i>
                                                      <i
                                                        aria-label="icon: calendar"
                                                        className="anticon anticon-calendar ant-calendar-picker-icon"
                                                      >
                                                        <svg
                                                          viewBox="64 64 896 896"
                                                          focusable="false"
                                                          className
                                                          data-icon="calendar"
                                                          width="1em"
                                                          height="1em"
                                                          fill="currentColor"
                                                          aria-hidden="true"
                                                        >
                                                          <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                                                        </svg>
                                                      </i>
                                                    </div>
                                                  </span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="ant-col ant-col-9"
                                      style={{
                                        paddingLeft: 6,
                                        paddingRight: 6,
                                      }}
                                    >
                                      <div className="ant-row">
                                        <div className="ant-col ant-col-8 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                          <label>Đến ngày</label>
                                        </div>
                                        <div className="ant-col ant-col-16">
                                          <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                            <div className="ant-col ant-form-item-control-wrapper">
                                              <div className="ant-form-item-control has-success">
                                                <span className="ant-form-item-children">
                                                  <span
                                                    id="dngay"
                                                    className="DatePicker__BorderBottomDatePicker-sc-1aaey2t-4 csgOby ant-calendar-picker"
                                                  >
                                                    <div>
                                                      <input
                                                        readOnly
                                                        placeholder="Chọn thời điểm"
                                                        className="ant-calendar-picker-input ant-input"
                                                        defaultValue="22/02/2024"
                                                      />
                                                      <i
                                                        aria-label="icon: close-circle"
                                                        tabIndex={-1}
                                                        className="anticon anticon-close-circle ant-calendar-picker-clear"
                                                      >
                                                        <svg
                                                          viewBox="64 64 896 896"
                                                          focusable="false"
                                                          className
                                                          data-icon="close-circle"
                                                          width="1em"
                                                          height="1em"
                                                          fill="currentColor"
                                                          aria-hidden="true"
                                                        >
                                                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                                                        </svg>
                                                      </i>
                                                      <i
                                                        aria-label="icon: calendar"
                                                        className="anticon anticon-calendar ant-calendar-picker-icon"
                                                      >
                                                        <svg
                                                          viewBox="64 64 896 896"
                                                          focusable="false"
                                                          className
                                                          data-icon="calendar"
                                                          width="1em"
                                                          height="1em"
                                                          fill="currentColor"
                                                          aria-hidden="true"
                                                        >
                                                          <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                                                        </svg>
                                                      </i>
                                                    </div>
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
                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div className="ant-row">
                                    <div className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl">
                                      <label>
                                        <span>Kết quả kiểm tra</span> &nbsp;
                                        <span style={{ color: "red" }}>
                                          (*)
                                        </span>
                                      </label>
                                    </div>
                                    <div className="ant-col ant-col-18">
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                              <div
                                                id="ttxly"
                                                className="Select__BorderBottomSelect-sc-gv2ysz-0 kteLHf ant-select ant-select-enabled"
                                              >
                                                <div
                                                  className="ant-select-selection
      ant-select-selection--single"
                                                  role="combobox"
                                                  aria-autocomplete="list"
                                                  aria-haspopup="true"
                                                  aria-controls="9df7fe94-6e55-489d-d1e0-402c5b2a0579"
                                                  aria-expanded="false"
                                                  data-__meta="[object Object]"
                                                  data-__field="[object Object]"
                                                  tabIndex={0}
                                                >
                                                  <div className="ant-select-selection__rendered">
                                                    <div
                                                      className="ant-select-selection-selected-value"
                                                      title="Tất cả"
                                                      style={{
                                                        display: "block",
                                                        opacity: 1,
                                                      }}
                                                    >
                                                      Tất cả
                                                    </div>
                                                  </div>
                                                  <span
                                                    className="ant-select-arrow"
                                                    unselectable="on"
                                                    style={{
                                                      userSelect: "none",
                                                    }}
                                                  >
                                                    <i
                                                      aria-label="icon: down"
                                                      className="anticon anticon-down ant-select-arrow-icon"
                                                    >
                                                      <svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        className
                                                        data-icon="down"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                      >
                                                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                      </svg>
                                                    </i>
                                                  </span>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div
                                    className="ant-row"
                                    style={{
                                      marginLeft: "-9px",
                                      marginRight: "-9px",
                                    }}
                                  >
                                    <div
                                      className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <label>Ký hiệu mẫu số hóa đơn</label>
                                    </div>
                                    <div
                                      className="ant-col ant-col-18"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control">
                                            <span className="ant-form-item-children">
                                              <div
                                                id="khmshdon"
                                                className="Select__BorderBottomSelect-sc-gv2ysz-0 kteLHf ant-select ant-select-enabled"
                                              >
                                                <div
                                                  className="ant-select-selection
      ant-select-selection--single"
                                                  role="combobox"
                                                  aria-autocomplete="list"
                                                  aria-haspopup="true"
                                                  aria-controls="4d690488-11a9-4905-ada1-e4378bb66302"
                                                  aria-expanded="false"
                                                  data-__meta="[object Object]"
                                                  data-__field="[object Object]"
                                                  tabIndex={0}
                                                >
                                                  <div className="ant-select-selection__rendered" />
                                                  <span
                                                    className="ant-select-arrow"
                                                    unselectable="on"
                                                    style={{
                                                      userSelect: "none",
                                                    }}
                                                  >
                                                    <i
                                                      aria-label="icon: down"
                                                      className="anticon anticon-down ant-select-arrow-icon"
                                                    >
                                                      <svg
                                                        viewBox="64 64 896 896"
                                                        focusable="false"
                                                        className
                                                        data-icon="down"
                                                        width="1em"
                                                        height="1em"
                                                        fill="currentColor"
                                                        aria-hidden="true"
                                                      >
                                                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                                      </svg>
                                                    </i>
                                                  </span>
                                                </div>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div
                                    className="ant-row"
                                    style={{
                                      marginLeft: "-9px",
                                      marginRight: "-9px",
                                    }}
                                  >
                                    <div
                                      className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <label>Số hóa đơn</label>
                                    </div>
                                    <div
                                      className="ant-col ant-col-18"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control">
                                            <span className="ant-form-item-children">
                                              <input
                                                id="shdon"
                                                data-__meta="[object Object]"
                                                data-__field="[object Object]"
                                                className="ant-input Input__BorderBottomInput-sc-16b2ylx-2 fAKTjC"
                                                type="text"
                                                defaultValue
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="ant-col ant-col-12"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <div
                                    className="ant-row"
                                    style={{
                                      marginLeft: "-9px",
                                      marginRight: "-9px",
                                    }}
                                  >
                                    <div
                                      className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <label>Ký hiệu hóa đơn</label>
                                    </div>
                                    <div
                                      className="ant-col ant-col-18"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control">
                                            <span className="ant-form-item-children">
                                              <input
                                                id="khhdon"
                                                data-__meta="[object Object]"
                                                data-__field="[object Object]"
                                                className="ant-input Input__BorderBottomInput-sc-16b2ylx-2 fAKTjC"
                                                type="text"
                                                defaultValue
                                              />
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ant-row">
                                <div className="ant-col ant-col-12">
                                  <div
                                    className="ant-row"
                                    style={{
                                      marginLeft: "-9px",
                                      marginRight: "-9px",
                                    }}
                                  >
                                    <div
                                      className="ant-col ant-col-6 Form__ColLabel-sc-9ty27c-0 dQoyFl"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <label>Hóa đơn ủy nhiệm</label>
                                    </div>
                                    <div
                                      className="ant-col ant-col-18"
                                      style={{
                                        paddingLeft: 9,
                                        paddingRight: 9,
                                      }}
                                    >
                                      <div className="ant-row ant-form-item Form__NoMarginBottomItem-sc-9ty27c-1 dpgfQK">
                                        <div className="ant-col ant-form-item-control-wrapper">
                                          <div className="ant-form-item-control has-success">
                                            <span className="ant-form-item-children">
                                              <div
                                                className="ant-checkbox-group"
                                                id="unhiem"
                                                data-__meta="[object Object]"
                                                data-__field="[object Object]"
                                              >
                                                <label className="Checkbox__BorderBottomCheckbox-sc-1npbixd-0 jGDVeb ant-checkbox-wrapper">
                                                  <span className="ant-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="ant-checkbox-input"
                                                      defaultValue={1}
                                                    />
                                                    <span className="ant-checkbox-inner" />
                                                  </span>
                                                </label>
                                              </div>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="ant-row-flex ant-row-flex-center"
                                style={{
                                  marginLeft: "-18px",
                                  marginRight: "-18px",
                                  marginTop: 20,
                                }}
                              >
                                <div
                                  className="ant-col"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <button
                                    type="submit"
                                    className="ant-btn ButtonAnt__Button-sc-p5q16s-0 bdtMvg ant-btn-primary"
                                  >
                                    <span>Tìm kiếm</span>
                                  </button>
                                </div>
                                <div
                                  className="ant-col"
                                  style={{ paddingLeft: 18, paddingRight: 18 }}
                                >
                                  <button
                                    type="button"
                                    className="ant-btn ButtonAnt__Button-sc-p5q16s-0 bdtMvg ant-btn-primary"
                                  >
                                    <span>Bỏ tìm kiếm</span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div
                        className="ant-col ant-col-24"
                        style={{ padding: "0px 20px 20px" }}
                      >
                        <div
                          className="ant-row-flex ant-row-flex-space-between ant-row-flex-middle"
                          style={{
                            marginLeft: "-2.5px",
                            marginRight: "-2.5px",
                            marginBottom: 5,
                          }}
                        >
                          <div
                            className="ant-col"
                            style={{
                              paddingLeft: "2.5px",
                              paddingRight: "2.5px",
                            }}
                          />
                          <div
                            className="ant-col"
                            style={{
                              paddingLeft: "2.5px",
                              paddingRight: "2.5px",
                            }}
                          >
                            <div
                              className="ant-row-flex ant-row-flex-start"
                              style={{
                                marginLeft: "-6px",
                                marginRight: "-6px",
                              }}
                            >
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <button
                                  disabled
                                  type="button"
                                  className="ant-btn ButtonAnt__Button-sc-p5q16s-0 bdtMvg ant-btn-primary ant-btn-icon-only"
                                >
                                  <i
                                    aria-label="icon: left"
                                    className="anticon anticon-left"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className
                                      data-icon="left"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                                    </svg>
                                  </i>
                                </button>
                              </div>
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <div className="styles__PageIndex-sc-eevgvg-3 eKHueX">
                                  1 / 1
                                </div>
                              </div>
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <button
                                  disabled
                                  type="button"
                                  className="ant-btn ButtonAnt__Button-sc-p5q16s-0 bdtMvg ant-btn-primary ant-btn-icon-only"
                                >
                                  <i
                                    aria-label="icon: right"
                                    className="anticon anticon-right"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className
                                      data-icon="right"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                    </svg>
                                  </i>
                                </button>
                              </div>
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <div className="ant-select ant-select-disabled">
                                  <div
                                    className="ant-select-selection
      ant-select-selection--single"
                                    role="combobox"
                                    aria-autocomplete="list"
                                    aria-haspopup="true"
                                    aria-controls="d66e2735-7bf6-442b-c09e-19d4d4aa3a14"
                                    aria-expanded="false"
                                    tabIndex={-1}
                                  >
                                    <div className="ant-select-selection__rendered">
                                      <div
                                        className="ant-select-selection-selected-value"
                                        title={15}
                                        style={{ display: "block", opacity: 1 }}
                                      >
                                        15
                                      </div>
                                    </div>
                                    <span
                                      className="ant-select-arrow"
                                      unselectable="on"
                                      style={{ userSelect: "none" }}
                                    >
                                      <i
                                        aria-label="icon: down"
                                        className="anticon anticon-down ant-select-arrow-icon"
                                      >
                                        <svg
                                          viewBox="64 64 896 896"
                                          focusable="false"
                                          className
                                          data-icon="down"
                                          width="1em"
                                          height="1em"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                                        </svg>
                                      </i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <span
                                  style={{
                                    display: "inline-block",
                                    cursor: "not-allowed",
                                  }}
                                >
                                  <button
                                    disabled
                                    type="button"
                                    className="ant-btn ButtonAnt__IconButton-sc-p5q16s-1 kgBiib ant-btn-icon-only"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <i className="anticon">
                                      <svg
                                        id="Layer_2"
                                        data-name="Layer 2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="11.82"
                                        height="11.82"
                                        viewBox="0 0 11.82 11.82"
                                      >
                                        <g id="Layer_1" data-name="Layer 1">
                                          <path
                                            id="Path_53170"
                                            data-name="Path 53170"
                                            d="M.55,5.91a5.36,5.36,0,1,1,5.36,5.36A5.36,5.36,0,0,1,.55,5.91ZM0,5.91A5.91,5.91,0,1,0,5.91,0,5.91,5.91,0,0,0,0,5.91Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53171"
                                            data-name="Path 53171"
                                            d="M4,4.6a6.06,6.06,0,0,0-.53.4,7.27,7.27,0,0,0-.95.91,7.27,7.27,0,0,0,.95.91A6.06,6.06,0,0,0,4,7.18,2.33,2.33,0,0,1,4,4.6Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53172"
                                            data-name="Path 53172"
                                            d="M8.41,5a6.06,6.06,0,0,0-.52-.37,2.33,2.33,0,0,1,0,2.57,6.06,6.06,0,0,0,.52-.37,7.26,7.26,0,0,0,.95-.91A7.27,7.27,0,0,0,8.41,5Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53173"
                                            data-name="Path 53173"
                                            d="M5.94,4A1.93,1.93,0,1,0,7.87,5.89,1.93,1.93,0,0,0,5.94,4Zm0,3A1.09,1.09,0,1,1,7,5.89,1.09,1.09,0,0,1,5.94,7Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53174"
                                            data-name="Path 53174"
                                            d="M5.94,5.2a.69.69,0,1,0,.69.69A.69.69,0,0,0,5.94,5.2Z"
                                            fill="#444"
                                          ></path>
                                          <path
                                            id="Path_53175"
                                            data-name="Path 53175"
                                            d="M6.45,2.78l-.07.4A2.75,2.75,0,0,1,8,4l.3-.27a3.16,3.16,0,0,0-1.85-.95Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53176"
                                            data-name="Path 53176"
                                            d="M5.42,2.78a3.16,3.16,0,0,0-1.81,1l.3.27a2.75,2.75,0,0,1,1.58-.86Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53177"
                                            data-name="Path 53177"
                                            d="M8,7.74a2.75,2.75,0,0,1-1.58.86l.07.4A3.16,3.16,0,0,0,8.26,8Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53178"
                                            data-name="Path 53178"
                                            d="M3.91,7.74,3.61,8A3.16,3.16,0,0,0,5.42,9l.07-.4a2.75,2.75,0,0,1-1.58-.86Z"
                                            fill="#444"
                                          />
                                        </g>
                                      </svg>
                                    </i>
                                  </button>
                                </span>
                              </div>
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <span
                                  style={{
                                    display: "inline-block",
                                    cursor: "not-allowed",
                                  }}
                                >
                                  <button
                                    disabled
                                    type="button"
                                    className="ant-btn ButtonAnt__IconButton-sc-p5q16s-1 kgBiib ant-btn-icon-only"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <i className="anticon">
                                      <svg
                                        id="Layer_2"
                                        data-name="Layer 2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={12}
                                        height="12.81"
                                        viewBox="0 0 12 12.81"
                                      >
                                        <g id="Layer_1" data-name="Layer 1">
                                          <path
                                            id="Path_53108"
                                            data-name="Path 53108"
                                            d="M10.87,4.14h-.12a.31.31,0,0,0-.18,0,.315.315,0,0,0-.11.52.28.28,0,0,0,.11.07h.3A.33.33,0,0,0,11,4.41a.33.33,0,0,0-.09-.23Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53109"
                                            data-name="Path 53109"
                                            d="M9.9,4.33h0V4.25h0a.33.33,0,0,0-.35-.07.345.345,0,0,0-.2.3.32.32,0,0,0,0,.12.27.27,0,0,0,.07.1.3.3,0,0,0,.11.07h.13a.32.32,0,0,0,.22-.09.29.29,0,0,0,.07-.11.32.32,0,0,0,0-.12Zm-.08,0Z"
                                            fill="#444"
                                          />
                                          <path
                                            id="Path_53110"
                                            data-name="Path 53110"
                                            d="M11.24,2.89H9.61V.32A.32.32,0,0,0,9.29,0H2.69a.32.32,0,0,0-.32.32V2.89H.75A.75.75,0,0,0,0,3.64V9.11a.75.75,0,0,0,.75.75H2.37v2.63a.32.32,0,0,0,.32.32h6.6a.32.32,0,0,0,.32-.32V9.86h1.62A.75.75,0,0,0,12,9.11V3.64a.75.75,0,0,0-.76-.75ZM9.15,7.45v4.71H2.83V7.45ZM2.83,2.84V.52H9.15V2.84Zm6.9,4.65h.75a.335.335,0,1,0,0-.67h-9a.335.335,0,1,0,0,.67h.75V9.31H.57a.11.11,0,0,1-.1-.11V3.55a.11.11,0,0,1,.11-.11H11.41a.11.11,0,0,1,.11.11V9.2a.11.11,0,0,1-.11.11H9.73Z"
                                            fill="#444"
                                          />
                                        </g>
                                      </svg>
                                    </i>
                                  </button>
                                </span>
                              </div>
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <span
                                  style={{
                                    display: "inline-block",
                                    cursor: "not-allowed",
                                  }}
                                >
                                  <button
                                    disabled
                                    type="button"
                                    className="ant-btn ButtonAnt__IconButton-sc-p5q16s-1 kgBiib ant-btn-icon-only"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <i className="anticon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10.65"
                                        height="11.908"
                                        viewBox="0 0 10.65 11.908"
                                      >
                                        <g
                                          id="Layer_2"
                                          data-name="Layer 2"
                                          transform="translate(0 -0.002)"
                                        >
                                          <g id="Layer_1" data-name="Layer 1">
                                            <path
                                              id="Path_53113"
                                              data-name="Path 53113"
                                              d="M10.54,4.4a.29.29,0,0,0,.11-.23.3.3,0,0,0-.11-.23L5.84.07A.3.3,0,0,0,5.35.3v2C0,2.53,0,6.61,0,8.6v.24a.3.3,0,0,0,.22.29H.3A.3.3,0,0,0,.56,9c1.59-2.83,2.9-3,4.79-3V8a.3.3,0,0,0,.49.23Zm-.66-.23L6,7.43V5.73a.308.308,0,0,0-.3-.3h0c-2.08,0-3.52.13-5,2.35A6.24,6.24,0,0,1,1.22,5C2,3.63,3.42,2.95,5.65,2.93a.3.3,0,0,0,.29-.3V.93Z"
                                              fill="#444"
                                            />
                                            <path
                                              id="Path_53114"
                                              data-name="Path 53114"
                                              d="M.3,11.91h10a.3.3,0,0,0,.3-.3V6.12a.3.3,0,0,0-.6,0v5.2H.6v-1a.3.3,0,1,0-.6,0v1.31A.3.3,0,0,0,.3,11.91Z"
                                              fill="#444"
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </i>
                                  </button>
                                </span>
                              </div>
                              <div
                                className="ant-col"
                                style={{ paddingLeft: 6, paddingRight: 6 }}
                              >
                                <span
                                  style={{
                                    display: "inline-block",
                                    cursor: "not-allowed",
                                  }}
                                >
                                  <button
                                    disabled
                                    type="button"
                                    className="ant-btn ButtonAnt__IconButton-sc-p5q16s-1 kgBiib ant-btn-icon-only"
                                    style={{ pointerEvents: "none" }}
                                  >
                                    <i className="anticon">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="10.65"
                                        height="11.908"
                                        viewBox="0 0 10.65 11.908"
                                      >
                                        <g
                                          id="Layer_2"
                                          data-name="Layer 2"
                                          transform="translate(0 -0.002)"
                                        >
                                          <g id="Layer_1" data-name="Layer 1">
                                            <path
                                              id="Path_53113"
                                              data-name="Path 53113"
                                              d="M10.54,4.4a.29.29,0,0,0,.11-.23.3.3,0,0,0-.11-.23L5.84.07A.3.3,0,0,0,5.35.3v2C0,2.53,0,6.61,0,8.6v.24a.3.3,0,0,0,.22.29H.3A.3.3,0,0,0,.56,9c1.59-2.83,2.9-3,4.79-3V8a.3.3,0,0,0,.49.23Zm-.66-.23L6,7.43V5.73a.308.308,0,0,0-.3-.3h0c-2.08,0-3.52.13-5,2.35A6.24,6.24,0,0,1,1.22,5C2,3.63,3.42,2.95,5.65,2.93a.3.3,0,0,0,.29-.3V.93Z"
                                              fill="#444"
                                            />
                                            <path
                                              id="Path_53114"
                                              data-name="Path 53114"
                                              d="M.3,11.91h10a.3.3,0,0,0,.3-.3V6.12a.3.3,0,0,0-.6,0v5.2H.6v-1a.3.3,0,1,0-.6,0v1.31A.3.3,0,0,0,.3,11.91Z"
                                              fill="#444"
                                            />
                                          </g>
                                        </g>
                                      </svg>
                                    </i>
                                  </button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ant-tabs ant-tabs-top Tabs-sc-1nufobv-0 iMcRvz ant-tabs-line">
                          <div
                            role="tablist"
                            className="ant-tabs-bar ant-tabs-top-bar"
                            tabIndex={0}
                          >
                            <div className="ant-tabs-nav-container">
                              <span
                                unselectable="unselectable"
                                className="ant-tabs-tab-prev ant-tabs-tab-btn-disabled"
                              >
                                <span className="ant-tabs-tab-prev-icon">
                                  <i
                                    aria-label="icon: left"
                                    className="anticon anticon-left ant-tabs-tab-prev-icon-target"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className
                                      data-icon="left"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                                    </svg>
                                  </i>
                                </span>
                              </span>
                              <span
                                unselectable="unselectable"
                                className="ant-tabs-tab-next ant-tabs-tab-btn-disabled"
                              >
                                <span className="ant-tabs-tab-next-icon">
                                  <i
                                    aria-label="icon: right"
                                    className="anticon anticon-right ant-tabs-tab-next-icon-target"
                                  >
                                    <svg
                                      viewBox="64 64 896 896"
                                      focusable="false"
                                      className
                                      data-icon="right"
                                      width="1em"
                                      height="1em"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
                                    </svg>
                                  </i>
                                </span>
                              </span>
                              <div className="ant-tabs-nav-wrap">
                                <div className="ant-tabs-nav-scroll">
                                  <div className="ant-tabs-nav ant-tabs-nav-animated">
                                    <div>
                                      <div
                                        role="tab"
                                        aria-disabled="false"
                                        aria-selected="true"
                                        className="ant-tabs-tab-active ant-tabs-tab"
                                      >
                                        <span>Hóa đơn điện tử</span>
                                      </div>
                                      <div
                                        role="tab"
                                        aria-disabled="false"
                                        aria-selected="false"
                                        className=" ant-tabs-tab"
                                      >
                                        <span>
                                          Hóa đơn có mã khởi tạo từ máy tính
                                          tiền
                                        </span>
                                      </div>
                                    </div>
                                    <div
                                      className="ant-tabs-ink-bar ant-tabs-ink-bar-animated"
                                      style={{
                                        display: "block",
                                        transform: "translate3d(0px, 0px, 0px)",
                                        width: 164,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            tabIndex={0}
                            role="presentation"
                            style={{
                              width: 0,
                              height: 0,
                              overflow: "hidden",
                              position: "absolute",
                            }}
                          />
                          <div
                            className="ant-tabs-content ant-tabs-content-animated ant-tabs-top-content"
                            style={{ marginLeft: "0%" }}
                          >
                            <div
                              role="tabpanel"
                              aria-hidden="false"
                              className="ant-tabs-tabpane ant-tabs-tabpane-active"
                            >
                              <div
                                tabIndex={0}
                                role="presentation"
                                style={{
                                  width: 0,
                                  height: 0,
                                  overflow: "hidden",
                                  position: "absolute",
                                }}
                              />

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
                                            tabIndex={-1}
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
                                              <tbody className="ant-table-tbody" />
                                            </table>
                                          </div>
                                          <div className="ant-table-placeholder">
                                            <div
                                              style={{ color: "rgb(0, 0, 0)" }}
                                            >
                                              Không có dữ liệu hiển thị
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                tabIndex={0}
                                role="presentation"
                                style={{
                                  width: 0,
                                  height: 0,
                                  overflow: "hidden",
                                  position: "absolute",
                                }}
                              />
                            </div>
                            <div
                              role="tabpanel"
                              aria-hidden="true"
                              className="ant-tabs-tabpane ant-tabs-tabpane-inactive"
                            >
                              <div className="ant-table-wrapper Table__TableStyled-sc-1qus7rx-1 iNojWa">
                                <div className="ant-spin-nested-loading">
                                  <div className="ant-spin-container">
                                    <div className="ant-table ant-table-default ant-table-bordered ant-table-empty ant-table-fixed-header ant-table-layout-fixed ant-table-scroll-position-left">
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
                                            tabIndex={-1}
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
                                              <tbody className="ant-table-tbody" />
                                            </table>
                                          </div>
                                          <div className="ant-table-placeholder">
                                            <div
                                              style={{ color: "rgb(0, 0, 0)" }}
                                            >
                                              Không có dữ liệu hiển thị
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            tabIndex={0}
                            role="presentation"
                            style={{
                              width: 0,
                              height: 0,
                              overflow: "hidden",
                              position: "absolute",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      tabIndex={0}
                      role="presentation"
                      style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        position: "absolute",
                      }}
                    />
                  </div>
                  <div
                    role="tabpanel"
                    aria-hidden="true"
                    className="ant-tabs-tabpane ant-tabs-tabpane-inactive"
                  />
                </div>
                <div
                  tabIndex={0}
                  role="presentation"
                  style={{
                    width: 0,
                    height: 0,
                    overflow: "hidden",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main> */}
    </>
  );
};

export default CheckBill;
