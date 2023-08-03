import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import styles from "./Header.module.scss";
import images from "~/assets/img";
import Search from "../Search";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
import routes from "~/configs/routes";

import { Massages, Inbox } from "~/components/Icon";
import { IoLanguage } from "react-icons/io5";
import { IoMdAdd, IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineKeyboard, MdDarkMode } from "react-icons/md";
import { AiOutlineMore } from "react-icons/ai";

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <IoLanguage />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        icon: <IoMdHelpCircleOutline />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <MdOutlineKeyboard />,
        title: "Keyboard shortcuts",
    },
    {
        icon: <MdDarkMode />,
        title: "Dark mode",
    },
];

const userMenu = [
    {
        icon: <IoMdHelpCircleOutline />,
        title: "View profile",
        to: "/@hooa",
    },
    {
        icon: <IoMdHelpCircleOutline />,
        title: "Favorites",
        to: "/favorites",
    },
    {
        icon: <IoMdHelpCircleOutline />,
        title: "Get Coins",
        to: "/coin",
    },
    {
        icon: <IoMdHelpCircleOutline />,
        title: "Settings",
        to: "/settings",
    },
    ...MENU_ITEMS,
    {
        icon: <IoMdHelpCircleOutline />,
        title: "Log out",
        to: "/logout",
        separate: true,
    },
];

function Header() {
    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo-container")}>
                    <Link className={cx("logo")} to={routes.home}>
                        <img
                            className={cx("img-logo")}
                            src={images.logo}
                            alt='Tiktok'
                        />
                    </Link>
                </div>

                <Search />

                <div className={cx("action")}>
                    {currentUser ? (
                        <>
                            <Button
                                to={routes.upload}
                                leftIcon={<IoMdAdd />}
                                className={cx("upload")}>
                                <span>Upload</span>
                            </Button>
                            <Tippy
                                interactive
                                delay={[0, 50]}
                                content='Message'
                                placement='bottom'>
                                <button className={cx("action-btn")}>
                                    <Massages width='2.5rem' height='2.5rem' />
                                </button>
                            </Tippy>
                            <Tippy
                                interactive
                                delay={[0, 50]}
                                content='Inbox'
                                placement='bottom'>
                                <button className={cx("action-btn")}>
                                    <Inbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                leftIcon={<IoMdAdd />}
                                className={cx("upload")}>
                                <span>Upload</span>
                            </Button>
                            <Button
                                primary
                                to='https://github.com'
                                className={cx("login")}>
                                Log in
                            </Button>
                        </>
                    )}
                    {
                        <Menu
                            items={currentUser ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}>
                            {currentUser ? (
                                <div className={cx("avatar-container")}>
                                    <Image
                                        className={cx("user-avatar")}
                                        src='https://images.unsplash.com/photo-1688417141059-fadfb2596ce1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                                        alt='avatar'
                                    />
                                </div>
                            ) : (
                                <button className={cx("more")}>
                                    <AiOutlineMore />
                                </button>
                            )}
                        </Menu>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
