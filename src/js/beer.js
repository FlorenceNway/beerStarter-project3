//class is for only single bottle of beer
export default class Beer {
	constructor(name, description, tagline, image, abv, ibu, ebc, ph,hops,hops1,hops2,malt,malt1,malt2,yeast) {
		this.name = name;
		this.description = description;
		this.tagline = tagline;
		this.image = image;
		this.abv = abv;
		this.ibu = ibu;
		this.ebc = ebc;
		this.ph = ph;
		this.hops = hops;
		this.hops1 = hops1;
		this.hops2 = hops2;
		this.malt = malt;
		this.malt1 = malt1;
		this.malt2 = malt2;
		this.yeast = yeast;

	}

	addToPage() {

		let container = document.getElementById('beerlist');

		let ph_level = document.createElement('div');
			ph_level.className = 'pH';
			ph_level.setAttribute("class", "pH");

			if (this.ph < 4.5) {
				ph_level.classList.add('pH44');
			} else if (this.ph < 5.4) {
				ph_level.classList.add('pH52');
			} else if (this.ph < 5.7) {
				ph_level.classList.add('pH56');

			};

		let p1 = document.createElement('p');
		p1.innerText = "pH";
		let p2 = document.createElement('p');
		p2.innerText = this.ph;

		ph_level.appendChild(p1);
		ph_level.appendChild(p2);

		//console.log(ph_level);

		let beers = `<div class="beers">
		      			<div class="beer-img">
							<div></div>
							<div class="b-img"><img src="${this.image}" alt="beer-bottle"></div>
							<div></div>
						</div>

						<div class="descpt">
							<h1>${this.name} </h1>
							<p>${this.description}</p>
						</div>

						<div class="detail">
							<div>
								<p>ABV</p>
								<p> ${this.abv} </p>
							</div>
							<div>
								<p>IBU</p>
								<p> ${this.ibu} </p>
							</div>

							${ph_level.outerHTML}
						</div>				          
					</div>`	
							      
			
		container.innerHTML += beers;
	}


	quickfindPage() {

		//console.log('hello from quickFindPage');
		let quick_container = document.getElementById('beerlist');

		let ph_level = document.createElement('div');
			ph_level.className = 'pH';
			ph_level.setAttribute("class", "pH");

			if (this.ph < 4.5) {
				ph_level.classList.add('pH44');
			} else if (this.ph < 5.4) {
				ph_level.classList.add('pH52');
			} else if (this.ph < 5.7) {
				ph_level.classList.add('pH56');

			};

		let p1 = document.createElement('p');
		p1.innerText = "pH";
		let p2 = document.createElement('p');
		p2.innerText = this.ph;

		ph_level.appendChild(p1);
		ph_level.appendChild(p2);

		
		let quickfind_beer = `

							<div id="quick_find">
								<div class="beer-image">
									<img src="${this.image}" alt="beer-bottle">
								</div>
								<div class="beer-specf">
									<h2>${this.name}</h2>
									<h3>${this.tagline}</h3>
									<p class="beer-despt">${this.description}</p>
										     
									<div class="detail">
										<div>
										    <p>ABV</p>
										    <p> ${this.abv} </p>
										</div>
										<div>
										    <p>IBU</p>
										    <p> ${this.ibu} </p>
										</div>
										    ${ph_level.outerHTML}
									</div>
								</div>
							</div>
														
							`
						
		
						
		quick_container.innerHTML= quickfind_beer;

	
//-------Modal box calling when click ingredient button/ overlay background -----------
		document.querySelector('.ingredient-btn').addEventListener('click', function(event) {
	
			document.getElementById("overlay").style.display = "block";
			document.getElementById("modal").style.display = "block";
		});

		document.querySelector('#overlay').addEventListener('click', function(event) {

			document.getElementById("overlay").style.display = "none";
			document.getElementById("modal").style.display = "none";
		});

		document.querySelector('.close').addEventListener('click', function(event) {

			document.getElementById("overlay").style.display = "none";
			document.getElementById("modal").style.display = "none";
		});

	}

	modalBox() {

			let container = document.getElementById('ingredient-content');

			
				let modal = ` <h2 class="ingredient-title">Malt:</h2>
					          <p>${this.malt} ( ${this.malt1} ${this.malt2} )</p>
					     
					       
					          <h2 class="ingredient-title">Hops:</h2>
					          <p>${this.hops} ( ${this.hops1} ${this.hops2} )</p>
					    
					    
					          <h2 class="ingredient-title">Yeast:</h2>
					          <p>${this.yeast}</p>`
							
	
		container.innerHTML = modal;
	}



};



	



									
