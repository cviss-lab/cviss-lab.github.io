let settings = {
	"results_ig3": [
		{"thumb": "potree/results/results_ig3/Homer_Watson_Bridge/Homer_Watson_Bridge.png", "label": "Homer-Watson Bridge", "url": "Homer_Watson_Bridge/Homer_Watson_Bridge.html"},
		{"thumb": "potree/results/results_ig3/Garment_Street_Parking/Garment_Street_Parking.png", "label": "Garment Street Parking Garage", "url": "Garment_Street_Parking/Garment_Street_Parking.html"},
		{"thumb": "potree/results/results_ig3/Iron_Horse_Bridge/Iron_Horse_Bridge.png", "label": "Iron Horse Bridge", "url": "Iron_Horse_Bridge/Iron_Horse_Bridge.html"}

	],
	"results_ig4": [
		{"thumb": "potree/results/results_ig4/SDIC_Lab/SDIC_Lab.png", "label": "SDIC Lab", "url": "SDIC_Lab/SDIC_Lab.html"},
		{"thumb": "potree/results/results_ig4/UW_Structures_Lab/UW_Structures_Lab.png", "label": "Structures Lab", "url": "UW_Structures_Lab/UW_Structures_Lab.html"},
	],
	"results_faro": [
		// {"thumb": "potree/results/results_faro/ats_faro/ats_faro.png", "label": "ATS (Faro)", "url": "ats_faro/ats_faro.html"},
		{"thumb": "potree/results/results_faro/structures_lab_faro/structures_lab_faro.png", "label": "UW Structures Lab", "url": "structures_lab_faro/structures_lab_faro.html"},
		{"thumb": "potree/results/results_faro/fairway_faro/fairway_faro.png", "label": "Fairway Bridge", "url": "fairway_faro/fairway_faro.html"}
	],
	"results_igr": [
		{"thumb": "potree/results/results_igr/Conestogo_Bridge_Delams/conestogo_bridge_delams.png", "label": "Conestogo Bridge Delam", "url": "Conestogo_Bridge_Delams/conestogo_bridge_delams.html"},
		{"thumb": "potree/results/results_igr/Market_Square_Parking/IG_Market_Square_Parking.png", "label": "Market Square Parking", "url": "Market_Square_Parking/IG_Market_Square_Parking.html"}
	]
}

function includeAIGRResults(){
	let resultCode = "";
	for(let result of settings.results_igr){
		resultCode += `
		<a href="potree/results/results_igr/${result.url}" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('${result.thumb}'); ">
				<div class="thumb-label">${result.label}</div>
			</div>
		</a>
		<br><br>
		`;
	}
	document.write(resultCode);
}

function includeIGResults(){
	let resultCode = "";
	for(let result of settings.results_ig3){
		resultCode += `
		<a href="potree/results/results_ig3/${result.url}" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('${result.thumb}'); ">
				<div class="thumb-label">${result.label}</div>
			</div>
		</a>
		<br><br>
		`;
	}
	document.write(resultCode);
}

function includeRobenResults(){
	let resultCode = "";
	for(let result of settings.results_ig4){
		resultCode += `
		<a href="potree/results/results_ig4/${result.url}" target="_blank" style="hhdisplay: inline-block">
			<div class="thumb2" style="background-image: url('${result.thumb}'); ">
				<div class="thumb-label">${result.label}</div>
			</div>
		</a>
		<br><br>
		`;
	}
	document.write(resultCode);
}

function includeFaroResults(){
	let resultCode = "";
	for(let result of settings.results_faro){
		resultCode += `

		<a href="potree/results/results_faro/${result.url}" target="_blank" style="display: inline-block">
			<div class="thumb2" style="background-image: url('${result.thumb}'); ">
				<div class="thumb-label">${result.label}</div>
			</div>
		</a>
		<br><br>
		`;
	}
	document.write(resultCode);
}




function includeMooseResults2(){
		let resultCode = "";
		resultCode += `
			<a href="potree/results/results_moose/Colby_Snowy/Colby_Snowy.html" target="_blank" style="display: inline-block">
				<div class="thumb2" style="background-image: url('potree/results/results_moose/Colby_Snowy/Colby_Snowy.png'); ">
					<div class="thumb-label">Snowy Map</div>
				</div>
			</a>
			`;
		document.write(resultCode);
}

function includeMooseImage(){
		let resultCode = "";
		resultCode += `
			<a href="https://www.autonomoose.net/" target="_blank" style="display: inline-block">
				<div class="thumb2" style="background-image: url('images/Moose.jpg'); ">
					<div class="thumb-label">The Autonomoose</div>
				</div>
			</a>
			`;
		document.write(resultCode);
}
