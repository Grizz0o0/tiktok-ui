//Layouts
import { HeaderOnly } from "~/layout";
import routes from "~/configs/routes";

import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Live from "~/pages/Live";
import Explore from "~/pages/Explore";

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.explore, component: Explore },
    { path: routes.live, component: Live },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
