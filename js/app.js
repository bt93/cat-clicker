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

        // Starts the current cat at the first cat object
        model.currentCat = model.cats[0];

        // catListView.init();
        catView.init();
    },

    // returns the current cat
    getCurrentCat: function() {
        return model.currentCat;
    },

    // returns all cats
    getCats: function() {
        return model.cats;
    },

    // Sets the current cat to as object to pass in
    setCurrentCat: function(cat) {
        model.currentCat = cat;
    },

    // Increments the amount of clicks each cat has
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    }

}

let catView = {

    init: function() {

        // Stores DOM elements into variables for easy access
        let catElem = $('#cat');
        this.catNameElem = $('#cat-name');
        this.countElem = $('#cat-count');
        this.catImgElem = $('#cat-img');

        // Click listener increments clicks for current cat
        this.catImgElem.click(function() {
            octopus.incrementCounter();
        });

        this.render();
    },

    render: function() {

        let currentCat = model.currentCat;
        this.countElem.text(currentCat.clickCount);
        this.catNameElem.text(currentCat.name);
        this.catImgElem.attr('src', currentCat.img);
    }
}

octopus.init();