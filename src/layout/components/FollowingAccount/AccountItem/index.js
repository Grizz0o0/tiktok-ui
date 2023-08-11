import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import { AiFillCheckCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function AccountItem({ data = {} }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <Image
                className={cx("avatar")}
                src={data.avatar}
                alt={data.nickname}
            />
            <div className={cx("info")}>
                <p className={cx("name")}>
                    <span>{`${data.first_name} ${data.last_name}`}</span>
                    {data.tick && <AiFillCheckCircle className={cx("check")} />}
                </p>
                <span className={cx("username", "clip-text")}>
                    {data.nickname}
                </span>
            </div>
        </Link>
    );
}

AccountItem.proTypes = {
    data: PropTypes.object,
};

export default AccountItem;
