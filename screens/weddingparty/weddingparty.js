define(['morulus/explorer', 'morulus/layerCake', './stub.html', './stub.css'], function(explorer, layerCake, stub) {
	var location = this.location;

	return layerCake({
		lower: stub,
		middle: explorer('https://morulus.github.io/demo-weddingparty/'),
		upper: '',
		cover: {
			title: "Animation on Wedding party kitsch",
			descript: "Heigh Educia, wheelf ank-from Have fausle Chist he ofiatio frost id the com wheing-moge wistas"
		},
		origin: {
			name: 'Animation-on-Wedding-party-kitsch',
			strokeColor: '#000',
			className: 'weddingparty'
		}
	});
});
