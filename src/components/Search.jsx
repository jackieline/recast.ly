
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }   

  keyHandler(e) {
    this.setState({
      searchText: e.target.value
    }, (e) => this.props.searchClicked(this.state.searchText));
  }

  render() {
    return ( <div className="search-bar form-inline">
      <input className="form-control" 
        type="text" 
        onChange={(e) => this.keyHandler(e)} 
        value={this.state.searchText}
      />
      <button onClick={(e) => this.props.searchClicked(this.state.searchText)} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>); 
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
