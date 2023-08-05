import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Menu, { MenuItem } from "./Menu";
import routes from "~/configs/routes";

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
        </aside>
    );
}
//otome-dori
export default Sidebar;
