define(['morulus/explorer', 'morulus/layerCake', './stub.html', './stub.css'], function(explorer, layerCake, html) {
	var location = this.location;

	return layerCake({
		lower: '',
		middle: explorer('https://morulus.github.io/demo-solomki/'),
		upper: '',
		cover: {
			title: "Игра в \"Соломки\"",
			descript: "Сразитесь в неравной битве с котом Матроскиным по вытягиванию соломок в рамках проекта \"Деревня дества\" Простоквашино",
			links: {},
			stack: ['SVG','Game logic','Animation']
		},
		origin: {
			strokeColor: '#fff',
			className: 'solomki asMetroDesign'
		}
	});
});
