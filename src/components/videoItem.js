import React from 'react';

const VideoItems = ({video, onVideoSelect}) => {



    const imageURL = video.snippet.thumbnails.default.url;

    // const video = props.video
    // console.log(video);

    return(
        <li onClick={() => onVideoSelect(video)}   className="list-group-item">
        <div className="video-list media">
        <div className="media-left">
        <img className="media-object" src={imageURL}/>

        </div>
        <div className="media-body">
         <div className="media-heading ">{video.snippet.title}
         
         </div>
        </div>

        </div>


        </li>


    ); 
};

export default VideoItems;