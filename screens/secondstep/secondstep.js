define(['morulus/explorer', 'morulus/layerCake', './stub.css'], function(explorer, layerCake) {
	var location = this.location;

	return layerCake({
		lower: '',
		middle: explorer('http://first-ep.ru/'),
		upper: '',
		cover: {
			title: "Цепленок в джунглях",
			descript: "Мини-игра как интерфейс к промо-сайту проекта Secondstep.ru",
			stack: ["Параллакс", "Спрайтовая анимация", "Горизонтальный скроллинг"],
			links: {}
		},
		origin: {
			name: 'Secondstep',
			strokeColor: '#fff',
			className: 'secondstep asMetroDesign'
		}
	});
});
