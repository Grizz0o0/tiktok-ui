import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import styles from "./Header.module.scss";
import images from "~/assets/img";

import { IoSearchOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { AiOutlineLoading3Quarters, AiOutlineMore } from "react-icons/ai";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => setSearchResult([1, 2, 3]), 2000);
    }, []);

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img
                        className={cx("img-logo")}
                        src={images.logo}
                        alt='Tiktok'
                    />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div
                                className={cx("search-result")}
                                tabIndex='-1'
                                {...attrs}>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </div>
                        </PopperWrapper>
                    )}>
                    <div className={cx("search")}>
                        <input
                            placeholder='Search'
                            type='text'
                            spellCheck={false}
                        />
                        <button className={cx("clear")}>
                            <MdClear />
                        </button>
                        <span className={cx("loading")}>
                            <AiOutlineLoading3Quarters />
                        </span>
                        <span className={cx("spliter")}></span>
                        <button className={cx("search-btn")}>
                            <IoSearchOutline />
                        </button>
                    </div>
                </Tippy>
                <div className={cx("action")}>
                    <button className={cx("upload")}>
                        <IoMdAdd />
                        <span>Upload</span>
                    </button>
                    <button className={cx("login")}>Log in</button>
                    <AiOutlineMore className={cx("more")} />
                </div>
            </div>
        </header>
    );
}

export default Header;
