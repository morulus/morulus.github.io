define(['./startScreen.html'], function(startHtml) {
	var location = this.location;
	return {
		html: startHtml,
		css: {
			"overflow-y": "scroll"
		},
		strokeColor: 'black',
		onCreate: function() {
			vendor(['bower_components/demo-weddingparty/pack/pack.js'], function(demo) {
				this.demo = demo;
				if (this.active) {
					demo(this.node[0]);
				} else {
					this.once('enter', function(){
						demo(this.node[0]);
					}.bind(this));
				}
			}.bind(this));
		}
	}
});
