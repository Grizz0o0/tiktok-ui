import styles from "./VideoItem.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Image from "~/components/Image";
import Video from "~/components/Video";
import {
    MusicIcon,
    LikeIcon,
    CommentIcon,
    FavoriteIcon,
    ShareIcon,
} from "~/components/Icon";

const cx = classNames.bind(styles);
function VideoItem({ data = {} }) {
    return (
        <div className={cx("wrapper")}>
            <Link to={`/@${data.nickname}`}>
                <Image
                    className={cx("img-avatar")}
                    src={data.user.avatar}
                    alt='avatar'
                />
            </Link>
            <div className={cx("content")}>
                <div className={cx("info")}>
                    <Link to={`/@${data.nickname}`} className={cx("")}>
                        <span className={cx("fullname")}>
                            {`${data.user.first_name} ${data.user.last_name}`}
                        </span>
                        <span className={cx("nickname")}>
                            {data.user.nickname}
                        </span>
                    </Link>
                    <p className={cx("desc", "cliptext")}>{data.description}</p>
                    <Link to={""} className={cx("music")}>
                        <MusicIcon
                            className={cx("music-icon")}
                            width='1.4rem'
                            height='1.4rem'
                        />
                        <span className={cx("desc-music", "cliptext")}>
                            {data.music}
                        </span>
                    </Link>
                </div>
                <div className={cx("video-container")}>
                    <Video data={data} />

                    <div className={cx("container-active")}>
                        <button className={cx("btn-active")}>
                            <div className={cx("active-icon")}>
                                <LikeIcon width='2.4rem' height='2.4rem' />
                            </div>
                            <span className={cx("count")}>
                                {data.likes_count}
                            </span>
                        </button>
                        <button className={cx("btn-active")}>
                            <div className={cx("active-icon")}>
                                <CommentIcon width='2.4rem' height='2.4rem' />
                            </div>
                            <span className={cx("count")}>
                                {data.comments_count}
                            </span>
                        </button>
                        <button className={cx("btn-active")}>
                            <div className={cx("active-icon")}>
                                <FavoriteIcon width='2.4rem' height='2.4rem' />
                            </div>
                            <span className={cx("count")}>
                                {data.views_count}
                            </span>
                        </button>
                        <button className={cx("btn-active")}>
                            <div className={cx("active-icon")}>
                                <ShareIcon width='2.4rem' height='2.4rem' />
                            </div>
                            <span className={cx("count")}>
                                {data.shares_count}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
