import React, {useState,useEffect} from "react";
import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import useVideos from "./hooks/useVideos";



export default () => {
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('lenovo')

    useEffect(()=>{
        setSelectedVideo(videos[0])
    },[videos])


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail
                            video={selectedVideo}
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

