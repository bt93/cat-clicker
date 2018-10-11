let model = {
	currentCat: null,
	cats: [
	{
		clicks: 0,
		name: 'Mario',
		img: 'https://www.wwwallaboutcats.com/wp-content/uploads/2016/10/shutterstock_454564069.jpg'
	},
	{
		clicks: 0,
		name: 'Yoshi',
		img: 'https://www.catster.com/wp-content/uploads/2017/11/Tabby-cat-opener.jpg'
	},
	{
		clicks: 0,
		name: 'Luigi',
		img: 'https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/f/f6/White-cat-breeds.jpg/revision/latest?cb=20161217162830'
	},
	{
		clicks: 0,
		name: 'Luke',
		img: 'http://www.ourfriends4ever.com/wp-content/uploads/2017/02/ourfriends4ever_russian_blue_cat2_header.jpg'
	},
	{
		clicks: 0,
		name: 'Obi',
		img: 'https://www.thesprucepets.com/thmb/q5G2nOmG7Z0afdZnzf1nCSknRHI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/egypt-59b7224c6f53ba00114fa958-59bae4346f53ba0010439047.jpg'
	}
	]
};

let octopus = {

	init: function() {
		// Sets the current cat to the first one
		model.currentCat = model.cats[0];

		// Inits the list and photos/name
		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.curentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCat: function() {
		model.currentCat = cat;
	},

	incrementor: function() {
		model.currentCat.clicks++;
		catView.render();
	}
}

let catView = {

	init: function() {
		// Stores the dom elements
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');


		this.catImageElem.addEventListener('click', function() {
			octopus.incrementor();
		})
	}
}