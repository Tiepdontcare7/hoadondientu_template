import { useContext, useEffect } from "react";
import { BillContext } from "../context/BillContext";

export default function ToastMessage() {
    const { isToasting, setIsToasting, toastMessage } = useContext(BillContext);

    useEffect(() => {
        let timeOutId;
        if (isToasting === true) {
            timeOutId = setTimeout(() => setIsToasting(false), 3000);
        }
        return () => clearTimeout(timeOutId);
    }, [isToasting, setIsToasting]);
    return (
        <div
            className="ant-notification ant-notification-bottomRight"
            style={{ right: 0, top: "auto", bottom: "24px" }}
        >
            <div className="ant-notification-notice ant-notification-notice-closable">
                <div className="ant-notification-notice-content">
                    <div className="ant-notification-notice-with-icon">
                        <i
                            aria-label="icon: close-circle-o"
                            className="anticon anticon-close-circle-o ant-notification-notice-icon ant-notification-notice-icon-error"
                        >
                            <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="close-circle"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
                                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                            </svg>
                        </i>
                        <div className="ant-notification-notice-message">
                            <span className="ant-notification-notice-message-single-line-auto-margin" />
                            {toastMessage}
                        </div>
                        <div className="ant-notification-notice-description" />
                    </div>
                </div>
                <a tabIndex={0} className="ant-notification-notice-close">
                    <span className="ant-notification-close-x">
                        <button
                            onClick={() => setIsToasting(false)}
                            aria-label="icon: close"
                            className="anticon anticon-close ant-notification-close-icon"
                        >
                            <svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="close"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                            </svg>
                        </button>
                    </span>
                </a>
            </div>
        </div>
    );
}
