define(['morulus/explorer', 'morulus/layerCake', './stub.html', './stub.css'], function(explorer, layerCake, stub) {
	var location = this.location;

	return layerCake({
		lower: stub,
		middle: explorer('https://morulus.github.io/demo-weddingparty/'),
		upper: '',
		cover: {
			title: "Свадебный кич",
			descript: "Спрайтовая и javascript-анимация в многоэтажном SPA для большой свадебной тусовки в Chateau Saint Jeannet",
			stack: ["Спрайтовая анимация", "Движение по кривым Безье"],
			links: {
				medium: {
					url: "https://medium.com/@vladimirmorulus/%D0%BA%D0%B0%D0%BA-%D1%8F-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%B0%D1%82%D1%8B%D0%B2%D0%B0%D0%BB-%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B0%D1%86%D0%B8%D0%B8-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-%D0%BF%D0%BE-%D0%BA%D1%80%D0%B8%D0%B2%D0%BE%D0%B9-%D0%B1%D0%B5%D0%B7%D1%8C%D0%B5-%D0%BD%D0%B0-javascript-907bc1c7cd09#.xcc6a9ev0"
				}
			},
			className: "TransparentTheme"
		},
		origin: {
			name: 'Animation-on-Wedding-party-kitsch',
			strokeColor: '#000',
			className: 'weddingparty asMetroDesign'
		}
	});
});
