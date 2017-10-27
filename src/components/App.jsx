class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: startData[0], //does not need to be named 'video'
      videos: startData,
      query: 'penguins',
      autoPlayStatus: ''
    };
  }
  
  componentDidMount() {
    this.activateSearchYT();
  }

  toggleAutoPlay() {
    if (this.state.autoPlayStatus === '') {
      this.setState({autoPlayStatus: '?autoplay=1'});
    } else {
      this.setState({autoPlayStatus: ''});
    }
  }
    
  activateSearchYT() {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        video: data[0],
        videos: data
      });
    });
  }

  searchEvent (text) {
    this.setState({
      query: text
    }, this.activateSearchYT);
  }

  clickEvent(clickedVid, e) {
    this.setState({
      video: clickedVid
    });
  }
    
  render() { 
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchClicked={_.debounce(this.searchEvent.bind(this), 500)} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.video} autoPlayStatus={this.state.autoPlayStatus} />
        </div>
        <div className="col-md-5">
          <VideoList toggleAutoPlay={this.toggleAutoPlay.bind(this)} myClickHandler={this.clickEvent.bind(this)} videos={this.state.videos} />
        </div>
      </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

window.fakeVideo = {
  kind: 'youtube#searchResult',
  etag: '',
  id: {
    kind: 'youtube#video',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 120,
        height: 90
      }
    }
  }
};

window.startData = Array(5).fill(fakeVideo);


