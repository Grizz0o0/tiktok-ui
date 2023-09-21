import styles from "./Video.module.scss";
import classNames from "classnames/bind";
// import {
//     PlayIcon,
//     PauseIcon,
//     VolumeIcon,
//     MoreHorizontalIcon,
// } from "~/components/Icon";

const cx = classNames.bind(styles);

function Video({ data = {} }) {
    return (
        <div className={cx("wrapper")}>
            <video
                className={cx("video")}
                src={data.file_url}
                poster={data.thumb_url}
                autoPlay
                loop
                controls
            ></video>

            {/* <div className={cx("btn")}>
                <div className={cx("play-btn")}>
                    <PlayIcon width='2rem' height='2rem' />
                </div>
                <div className={cx("pause-btn")}>
                    <PauseIcon width='2rem' height='2rem' />
                </div>
                <div className={cx("volume-btn")}>
                    <VolumeIcon width='2.4rem' height='2.4rem' />
                </div>
                <div className={cx("more-btn")}>
                    <MoreHorizontalIcon width='2.4rem' height='2.4rem' />
                </div>
            </div> */}
        </div>
    );
}

export default Video;
