define(['morulus/explorer', 'morulus/layerCake', './stub.css'], function(explorer, layerCake) {
	var location = this.location;

	return layerCake({
		lower: '',
		middle: explorer('http://first-ep.ru/'),
		upper: '',
		cover: {
			title: "Parallax mini-game \"Сhick in jungle\"",
			descript: "",
			links: {}
		},
		origin: {
			name: 'Secondstep',
			strokeColor: '#fff',
			className: 'secondstep'
		}
	});
});
