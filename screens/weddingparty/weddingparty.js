define(['explorer', 'layerCake', './stub.html', './upper.js', './stub.css'], function(explorer, layerCake, stub, upper) {
	var location = this.location;

	return layerCake({
		lower: stub,
		middle: explorer('https://morulus.github.io/demo-weddingparty/'),
		upper: upper,
		origin: {
			strokeColor: '#e9412d'
		}
	});
	// {
	// 	html: stub,
	// 	className: 'weddingparty',
	// 	strokeColor: '#e9412d',
	// 	explore: 'https://morulus.github.io/demo-weddingparty/',
	// 	onCreate: function() {
	// 		// vendor(['bower_components/demo-weddingparty/pack/pack.js'], function(demo) {
	// 		// 	this.demo = demo;
	// 		// 	if (this.active) {
	// 		// 		demo(this.node[0]);
	// 		// 	} else {
	// 		// 		this.once('enter', function(){
	// 		// 			demo(this.node[0]);
	// 		// 		}.bind(this));
	// 		// 	}
	// 		// }.bind(this));
	// 	}
	// }
});
