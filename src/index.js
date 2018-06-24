import _ from 'lodash';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import './style.css';

const API_KEY = 'YOUR API KEY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state={ 
            videos: [],

            selectedVideo: null 
        
        };

        this.videoSearch('avengers');
    }
  

    videoSearch(term){
        
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                
                videos: videos,
            selectedVideo: videos[0] });
            //  this.setState({videos : videos})
        });


    }
    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return (
    <div>
        <SearchBar onSeachTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')

);