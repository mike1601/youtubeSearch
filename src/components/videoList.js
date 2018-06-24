import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {
//   const videos = props.videos;
 const videoItems = props.videos.map((video) =>{
    return (<VideoItem 
        onVideoSelect = {props.onVideoSelect}
        key={video.etag} video={video} />);
});

    return (
        <ul className="col-md-4 list-group" >
         {/* {videos.length} */}

         {videoItems}


        </ul>
    );
};

export default VideoList;