import styles from "./Home.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Home() {
    return (
        <main>
            <div className={cx("wrapper")}></div>
        </main>
    );
}

export default Home;
