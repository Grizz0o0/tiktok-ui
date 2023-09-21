import styles from "./Following.module.scss";
import classNames from "classnames/bind";
import * as videoService from "~/apiServices/videoServices";
import { useState, useEffect } from "react";
import VideoList from "~/components/VideoList";

const cx = classNames.bind(styles);

function Following() {
    const [currentVideo, setCurrentVideo] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.video("following", 1);
            console.log(result);
            setCurrentVideo(result);
        };

        fetchApi();
    }, []);

    return (
        <main>
            <div className={cx("wrapper")}>
                <VideoList data={currentVideo} />
            </div>
        </main>
    );
}

export default Following;
