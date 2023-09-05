import styles from "./VideoList.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import VideoItem from "~/components/VideoItem";

const cx = classNames.bind(styles);

function VideoList({ data = [] }) {
    return (
        <div className={cx("wrapper")}>
            {data.map((item) => (
                <VideoItem key={item.id} data={item} />
            ))}
        </div>
    );
}

VideoList.propTypes = {
    data: PropTypes.array,
};

export default VideoList;
