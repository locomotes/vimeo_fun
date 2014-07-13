// "http://vimeo.com/api/v2/channel/staffpicks/video.json"

var Video = Backbone.Model.extend ({
	defaults: {
		title: '',
		url: ''
	},

	initialize: function () {
		var title = this.get('title');
		var url = this.get('id');
		console.log( title + ' is the video title.');
		console.log(url);
	}

});

var ALLvideos = Backbone.Collection.extend ({
	model: Video,
	url: "http://vimeo.com/api/v2/channel/staffpicks/videos.json"
});

var all = new ALLvideos();

