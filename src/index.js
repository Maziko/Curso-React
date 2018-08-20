import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY='AIzaSyCWtEmkgjEucEQspfRZm2ksbIWMVRWwDf4';

// create a new component. This component should produce some HTML

class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

//Take this component's HTML and put it on the page.

ReactDOM.render(<App />, document.querySelector('.container'));