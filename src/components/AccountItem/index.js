import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { AiFillCheckCircle } from "react-icons/ai";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <img
                className={cx("avatar")}
                src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1688824800&x-signature=M8%2Fg5pwqnuJp3sGIAfoePZ7smm8%3D'
                alt='avatar'
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>Nguyen Van A</span>{" "}
                    <AiFillCheckCircle className={cx("check")} />
                </p>
                <span className={cx("username")}>NguyenVanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
