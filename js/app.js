let model = {
	currentCat: null,
	cats: [
	{
		clickCount: 0,
		name: 'Mario',
		img: 'https://www.wwwallaboutcats.com/wp-content/uploads/2016/10/shutterstock_454564069.jpg'
	},
	{
		clickCount: 0,
		name: 'Yoshi',
		img: 'https://www.catster.com/wp-content/uploads/2017/11/Tabby-cat-opener.jpg'
	},
	{
		clickCount: 0,
		name: 'Luigi',
		img: 'https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/f/f6/White-cat-breeds.jpg/revision/latest?cb=20161217162830'
	},
	{
		clickCount: 0,
		name: 'Luke',
		img: 'http://www.ourfriends4ever.com/wp-content/uploads/2017/02/ourfriends4ever_russian_blue_cat2_header.jpg'
	},
	{
		clickCount: 0,
		name: 'Obi',
		img: 'https://www.thesprucepets.com/thmb/q5G2nOmG7Z0afdZnzf1nCSknRHI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/egypt-59b7224c6f53ba00114fa958-59bae4346f53ba0010439047.jpg'
	}
	]
};

let octopus = {

	init: function() {

		// Set Current cat to first one on the list
		model.currentCat = model.cats[0];

		// Veiws initialize
		// catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	}
}

let catView = {

	init: function() {

		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.CountElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		})

		this.render();
	},

	render: function() {
		let currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.img;
	}
};

let catListView = {

	init: function() {

		this.callListElem = document.getElementById('cat-list');

		this.render();
	},

	render: function() {

		let cat, elem, incrementCounter;

		let cats = octopus.getCats();


		this.catListItem.innerHTML = '';

		for (i = 0; i < cats.length; i++) {
			cat = cats[i];

			elem = document.createElement('li');
			elem.textContent = cat.name;


			elem.addEventListener('click', function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})()
		}
	}
}

octopus.init();