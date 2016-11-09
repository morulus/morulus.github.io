define(['morulus/explorer', 'morulus/layerCake', './stub.css'], function(explorer, layerCake) {
	var location = this.location;

	return layerCake({
		lower: '',
		middle: explorer('https://morulus.github.io/demo-solomki/'),
		upper: '',
		cover: {
			title: "Arcade game \"Solomki\"",
			descript: "",
			links: {}
		},
		origin: {
			name: 'SolomkiArcadeGame',
			strokeColor: '#fff',
			className: 'solomki'
		}
	});
});
