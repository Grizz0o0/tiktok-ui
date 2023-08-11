import classNames from "classnames/bind";
import styles from "./ScrollTop.module.scss";
import { ScrollTopIcon } from "~/components/Icon";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);
    const [isScroll, setIsScroll] = useState(0);

    const handleScrollEvent = () => {
        setIsScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent);
        return () => {
            window.removeEventListener("scroll", handleScrollEvent);
        };
    }, []);

    useEffect(() => {
        if (isScroll > 200) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    }, [isScroll]);

    return (
        <>
            {showScroll && (
                <div
                    className={cx("wrapper")}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }>
                    <ScrollTopIcon width='1.6rem' height='1.6rem' />
                </div>
            )}
        </>
    );
}

export default ScrollTop;
