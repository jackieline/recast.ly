var VideoList = (props) => (
  <div className="video-list">
    <span>Autoplay </span> <input onClick={props.toggleAutoPlay} type="checkbox" id="test1" className="toggle"/>
    <label htmlFor="test1"></label>
    {props.videos.map((listItem, index) =>
      <VideoListEntry clicked={props.myClickHandler} video={listItem} key={index} />
    )}
  </div>
  
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;

// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>

// <li>{props.list[0].snippet.title}</li>