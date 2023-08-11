import classNames from "classnames/bind";
import styles from "./GetApp.module.scss";
import { useState } from "react";
import { ComputerIcon, MobileIcon } from "~/components/Icon";

const cx = classNames.bind(styles);

function GetApp() {
    const [showApp, setShowApp] = useState(false);

    const handleShowApp = () => {
        setShowApp(!showApp);
    };

    return (
        <div className={cx("wrapper")}>
            {showApp ? (
                <div className={cx("container")}>
                    <div className={cx("content")}>
                        <div className={cx("item-container")}>
                            <ComputerIcon width='2.1rem' height='2.1rem' />
                            <span className={cx("text")}>
                                Get TikTok for desktop
                            </span>
                        </div>
                        <span className={cx("separate")}></span>
                        <div className={cx("item-container")}>
                            <MobileIcon width='2.1rem' height='2.1rem' />

                            <span className={cx("text")}>Get TikTok App</span>
                        </div>
                    </div>
                    <span className={cx("close")} onClick={handleShowApp}>
                        &times;
                    </span>
                </div>
            ) : (
                <button className={cx("btn-get-app")} onClick={handleShowApp}>
                    Get app
                </button>
            )}
        </div>
    );
}

export default GetApp;
