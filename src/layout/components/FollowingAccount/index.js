import classNames from "classnames/bind";
import styles from "./FollowingAccount.module.scss";
import PropTypes from "prop-types";
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function FollowingAccount({ label, data = [] }) {
    return (
        <div className={cx("wrapper")}>
            <p className={cx("title")}>{label}</p>
            {data.map((user) => (
                <AccountItem key={user.id} data={user} />
            ))}

            <span className={cx("more")}>See more</span>
        </div>
    );
}

FollowingAccount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default FollowingAccount;
