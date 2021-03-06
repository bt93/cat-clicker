let model = {
	currentCat: null,
	cats: [
	{
		clickCount: 0,
		name: 'Mario',
		img: 'img/mario.jpg'
	},
	{
		clickCount: 0,
		name: 'Yoshi',
		img: 'img/yoshi.jpg'
	},
	{
		clickCount: 0,
		name: 'Luigi',
		img: 'img/luigi.jpg'
	},
	{
		clickCount: 0,
		name: 'Luke',
		img: 'img/luke.jpg'
	},
	{
		clickCount: 0,
		name: 'Obi',
		img: 'img/obi.jpg'
	}
	]
};

let octopus = {

    init: function() {

        // Starts the current cat at the first cat object
        model.currentCat = model.cats[0];

        catListView.init();
        catView.init();
        adminView.init();
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
    },

    adminClick: function() {
        adminView.form.show();
    },

    closeAdmin: function() {
        adminView.nameInput.val('');
        adminView.urlInput.val('');
        adminView.clicksInput.val('');
        adminView.form.hide();
    },

    catSubmit: function() {
        let newCat = {
            clickCount: adminView.clicksInput.val(),
            name: adminView.nameInput.val(),
            img: adminView.urlInput.val(),
        }
        model.cats.push(newCat);
        adminView.nameInput.val('');
        adminView.urlInput.val('');
        adminView.clicksInput.val('');
        adminView.form.hide();
        return catListView.render();
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
        // Renders the click counter when reclicked
        let currentCat = octopus.getCurrentCat();
        this.countElem.text(currentCat.clickCount);
        this.catNameElem.text(currentCat.name);
        this.catImgElem.attr('src', currentCat.img);
    }
}

let catListView = {

    init: function() {

        // Stores DOM for list
        this.catListElem = $('#cat-list');

        // renders list
        this.render();
    },

    render: function() {
        let cat, elem, i;

        // Saves all cats in variable
        let cats = octopus.getCats();

        // Clears list 
        this.catListElem.html('');

        // Loops through all of cats names
        for (i = 0; i < cats.length; i++) {
            
            cat = cats[i];

            elem = $('<li></li>');
            elem.html(cat.name);
            
            elem.click((function(catCopy) {
                return function() {
                    octopus.setCurrentCat(catCopy);
                    catView.render();
                }
            })(cat))

            this.catListElem.append(elem);
        };
    }

};

let adminView = {

    init: function() {

        // Grabs all parts of the admin
        this.adminBtn = $('#admin-button');
        this.form = $('form');
        this.nameInput = $('#name');
        this.urlInput = $('#img');
        this.clicksInput = $('#clicks');
        this.cancelBtn = $('#cancel');
        this.submitBtn = $('#submit');


        this.render();
    },

    render: function() {

        this.adminBtn.click(function() {
            octopus.adminClick();
        })

        this.cancelBtn.click(function() {
            octopus.closeAdmin();
            return false;
        })

        this.submitBtn.click(function() {
            octopus.catSubmit();
            return false;
        })

        this.submitBtn.keydown(function(e) {
            if (e.keydown == 13) {
                event.preventDefault();
                octopus.catSubmit();
                return false;
            }
        })

    }
}

octopus.init();