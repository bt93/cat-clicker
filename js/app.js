const clickOne = document.getElementById('click1');
const clickTwo = document.getElementById('click2');
const jollyReset = document.getElementById('jolly-reset');
const kittyReset = document.getElementById('kitty-reset');
const nameOne = document.getElementById('name-one');
const nameTwo = document.getElementById('name-two');
const jolly = 'Jolly';
const kitty = 'Kitty';
let jollyTotal = document.getElementById('jolly-total');
let kittyTotal = document.getElementById('kitty-total');
let jollyClicks = 0;
let kittyClicks = 0;

// Event Listeners for First Cat
clickOne.addEventListener('click', function(){
	jollyClicks  += 1;
	jollyTotal.innerHTML = jollyClicks ;
	}, false);

jollyReset.addEventListener('click', function(){
	if (jollyClicks  === 0) {
		alert('Cannot reset when number is already Zero.');
	} else {
		jollyClicks  = 0;
		jollyTotal.innerHTML = jollyClicks ;
	}
}, false);

// Event Listeners for Second Cat
clickTwo.addEventListener('click', function(){
	kittyClicks  += 1;
	kittyTotal.innerHTML = kittyClicks ;
	}, false);

kittyReset.addEventListener('click', function(){
	if (kittyClicks  === 0) {
		alert('Cannot reset when number is already Zero.');
	} else {
		kittyClicks  = 0;
		kittyTotal.innerHTML = kittyClicks ;
	}
}, false);

nameOne.innerHTML = jolly;
nameTwo.innerHTML = kitty;