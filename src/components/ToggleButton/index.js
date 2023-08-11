import classNames from "classnames/bind";
import styles from "./ToggleButton.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function ToggleButton() {
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = (e) => {
        setIsToggle(!isToggle);
    };

    return (
        <div
            className={cx("toggle", { active: isToggle })}
            onClick={handleToggle}>
            <i className={cx("indicator")}></i>
        </div>
    );
}

export default ToggleButton;
