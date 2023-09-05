import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import * as videoService from "~/apiServices/videoServices";
import { useState, useEffect } from "react";
import VideoList from "~/components/VideoList";

const cx = classNames.bind(styles);

function Home() {
    const [currentVideo, setCurrentVideo] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.video("for-you", 1);
            setCurrentVideo(result);
        };

        fetchApi();
    });

    return (
        <main>
            <div className={cx("wrapper")}>
                <VideoList data={currentVideo} />
            </div>
        </main>
    );
}

export default Home;
