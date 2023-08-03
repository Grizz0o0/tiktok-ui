import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { MdOutlineArrowBackIos } from "react-icons/md";
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cx("header")}>
            <button className={cx("back-btn")} onClick={onBack}>
                <MdOutlineArrowBackIos />
            </button>
            <h4 className={cx("header-title")}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func,
};

export default Header;
