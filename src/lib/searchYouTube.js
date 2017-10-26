var options = {
  key: window.YOUTUBE_API_KEY,
  query: 'penguins',
  max: 5
};



var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      maxResults: options.max,
      q: options.query,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(data) {
      console.error(data);
    }
    // dataType: dataType,

  });
};

window.searchYouTube = searchYouTube;
