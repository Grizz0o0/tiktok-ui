import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import FollowingAccount from "~/layout/components/FollowingAccount";
import * as userServices from "~/apiServices/userServices";
import routes from "~/configs/routes";
import { useEffect, useState } from "react";

import {
    HomeIcon,
    HomeActiveIcon,
    FollowingIcon,
    FollowingActiveIcon,
    ExploreIcon,
    ExploreActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from "~/components/Icon";
const cx = classNames.bind(styles);

function Sidebar() {
    const [suggestUser, setSuggestUser] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await userServices.following(1, 5);
            setSuggestUser(result);
        };

        fetchApi();
    }, []);

    return (
        <aside className={cx("sidebar")}>
            <header className={cx("header")}>
                <Menu>
                    <MenuItem
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                        title='For You'
                        to={routes.home}
                    />
                    <MenuItem
                        icon={<FollowingIcon />}
                        activeIcon={<FollowingActiveIcon />}
                        title='Following'
                        to={routes.following}
                    />
                    <MenuItem
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreActiveIcon />}
                        title='Explore'
                        to={routes.explore}
                    />
                    <MenuItem
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                        title='Live'
                        to={routes.live}
                    />
                </Menu>
            </header>

            <span className={cx("separate")}></span>

            <FollowingAccount label={"Following accounts"} data={suggestUser} />

            <span className={cx("separate")}></span>

            <footer className={cx("footer")}>
                <div className={cx("link-container")}>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        About
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Newsroom
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Contact
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Careers
                    </a>
                </div>
                <div className={cx("link-container")}>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        TikTok for Good
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Advertise
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Developers
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Transparency
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        TikTok Rewards
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        TikTok Embeds
                    </a>
                </div>
                <div className={cx("link-container")}>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Help
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Safety
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Terms
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Privacy
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Creator Portal
                    </a>
                    <a href={routes.home} target='_blank' rel='noreferrer'>
                        Community Guidelines
                    </a>
                </div>
                <span className={cx("copyright")}>© 2023 TikTok</span>
            </footer>
        </aside>
    );
}
//otome-dori
export default Sidebar;
