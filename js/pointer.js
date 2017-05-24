

function createPoint(){

	point = document.createElement("div");
	point.classList.add("point");
	left = Math.random()*100

	point.addEventListener("mouseover", overPoint);
	point.style.left = left + "%";

	linhaPoint = document.createElement("div");
	linhaPoint.classList.add("Lpoint");
	linhaPoint.style.top = "0px";

	linhaPoint.appendChild(point);
	body.appendChild(linhaPoint);


	Lpoint = document.querySelectorAll(".Lpoint");
	if(Lpoint.length == 4){
		remove(Lpoint[0]);
	}


}


function movePoint(){
	linhasP = document.querySelectorAll(".Lpoint");
	linhasP.forEach(move);
	console.log("entrou no createPoint");
	
}		
function overPoint() {
	this.parentElement.removeChild(this);
	ganhaPonto();
}