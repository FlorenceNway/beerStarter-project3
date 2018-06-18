import axios from 'axios';
import Beer from './beer.js';

//$.ajax()

//change the page depends on API url -- pagination
function changePage(page) {

	axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=6`)

		//done() = .then(function(response)){} =
		.then(response => {

			let beerData = response.data; //console.log(beerData);

			for (let value of beerData) {

				if (beerData.length) {

					let beer = new Beer(value.name, value.description, value.tagline, value.image_url, value.abv, value.ibu, value.ebc, value.ph, value.hop, value.hop1, value.hop2, value.malt, value.malt1, value.malt2, value.yeast);

					beer.addToPage();

				}
			}

		})
		//fail()
		.catch(function(error) {
				console.log(error);
		});
}

changePage(1); //for opening page


//----for pagination when click the button 1, 2, .... 5 -----------
let page = 0;
document.querySelectorAll('.btn').forEach(button => {

	button.addEventListener('click', function(event) {
		//console.log(event.target.id);
		page = event.target.id; // value = 1,2... ,6

		document.querySelector('.active').classList.remove('active');
		this.setAttribute("class", "active");

		let container = document.getElementById('beerlist');
		container.innerHTML = "";

		changePage(page);

	})

});


// -------------for quick find page -------------
function quickfind() {

	axios.get(`https://api.punkapi.com/v2/beers/random`)

		.then(response => {

			let beerData = response.data; //console.log(beerData);

			for (let value of beerData) {

				if (beerData.length) {

					let beer = new Beer(value.name, value.description, value.tagline, value.image_url, value.abv, value.ibu, value.ebc, value.ph, value.hop, value.hop1, value.hop2, value.malt, value.malt1, value.malt2, value.yeast);

					beer.quickfindPage();

				}
			}

		})
		//fail()
		.catch(function(error) {
			console.log(error);
		});
}


// To show a random beer bottle when click 'quick find'
let quickfindlink = document.querySelector('.quicklink');

quickfindlink.addEventListener('click', function(event) {
	
	//clear previous page content
	let beer_container = document.getElementById('beerlist');
	beer_container.innerHTML = '';

	//hide pagination bar
	let pagination_nav = document.getElementById('pagination_nav');
    pagination_nav.style.display = 'none';       
           
    //show quickfind buttons       
    let quick_find_btn = document.getElementById('quick_find_btn');
    quick_find_btn.style.display = 'block';

    let pickbeer_container = document.getElementById('searchform');
	pickbeer_container.style.display = 'none';
           
	quickfind();

});

// To show beer list when click  'beer'
let beer = document.querySelector('.beerlink');

beer.addEventListener('click', function(event) {
	
	//clear previous page content
	let content = document.getElementById('beerlist');
	content.innerHTML = '';

	//show pagination bar
	let pagination_nav = document.getElementById('pagination_nav');
    pagination_nav.style.display = 'block';   

    let quick_find_btn = document.getElementById('quick_find_btn');
    quick_find_btn.style.display = 'none'; 

    let pickbeer_container = document.getElementById('searchform');
	pickbeer_container.style.display = 'none';

	
	changePage(1);
	
});


// To show 'Pick a beer' page when click back to 'pick beer'
let pickbeerlink = document.querySelector('.pickbeerlink');

pickbeerlink.addEventListener('click', function(event) {
	//console.log("hello");

	//clear previous page content
	let content = document.getElementById('beerlist');
	content.innerHTML = '';

	let pickbeer_container = document.getElementById('searchform');
	pickbeer_container.style.display = 'block';

	let pagination_nav = document.getElementById('pagination_nav');
    pagination_nav.style.display = 'none';

    let quick_find_btn = document.getElementById('quick_find_btn');
    quick_find_btn.style.display = 'none';


});


// to change the blue color when click to navigation menu link
document.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', function(event) {

		document.querySelector('.activelink').classList.remove('activelink');
		this.setAttribute("class", "activelink");
	})

});


//--------------for Ingredient Modal Box ---------------
function modal() {

	axios.get(`https://api.punkapi.com/v2/beers/random`)

		.then(response => {

			let beerData = response.data; console.log(beerData);
			
			for (let value of beerData) {

				if (beerData.length) {

					let malt = value.ingredients.malt[0].name;
					let malt1 = value.ingredients.malt[0].amount.value;
					let malt2 = value.ingredients.malt[0].amount.unit;
					let hops = value.ingredients.hops[0].name;
					let hops1 = value.ingredients.hops[0].amount.value;
					let hops2 = value.ingredients.hops[0].amount.unit;
					let yeast = value.ingredients.yeast;

					let beer = new Beer(value.name, value.description, value.tagline, value.image_url, value.abv, value.ibu, value.ebc, value.ph, hops, hops1, hops2, malt, malt1, malt2, yeast);


					beer.modalBox();

				}
			}

		})
		//fail()
		.catch(function(error) {
			console.log(error);
		});
}

//------------To show the ingredient modal box when click 'ingredient button'----------

document.querySelector('.ingredient-btn').addEventListener('click', function(event) {
	
	console.log("hello");
			modal();

});