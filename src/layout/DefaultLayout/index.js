import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import GetApp from "~/components/GetApp";
import ScrollTop from "~/components/ScrollTop";
import Header from "~/layout/components/Header";
import Sidebar from "~/layout/components/Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <Sidebar />
                <div className={cx("content")}>{children}</div>
                <div className={cx("bottom-container")}>
                    <GetApp />
                    <ScrollTop />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
