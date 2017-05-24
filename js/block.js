var linha = 0;


function createBlock(){
	
	space = 30;

	block1 = document.createElement("div");
	block1.classList.add("bl1");
	block1.addEventListener("mouseover", overBlock);


	block2 = document.createElement("div");
	block2.classList.add("bl2");
	block2.addEventListener("mouseover", overBlock);


	espacoDosBlocos = 100 - space;

	espacoDoBloco1 = espacoDosBlocos - (Math.random()*espacoDosBlocos);
	espacoDoBloco2 = espacoDosBlocos - espacoDoBloco1;


	block1.style.width = espacoDoBloco1 + "%";
	block2.style.width = espacoDoBloco2 + "%";
	
	linha = document.createElement("div");
	linha.classList.add("linha");
	linha.style.top = 0;

	linha.appendChild(block1);
	linha.appendChild(block2);
	
	body.appendChild(linha);

	linhas = document.querySelectorAll(".linha");
	if(linhas.length == 4){
		remove(linhas[0]);
	}
}

function moveBlock(){
	linhas = document.querySelectorAll(".linha");
	linhas.forEach(move);
}
function move(itens,n,l) {
	l[n].style.top = (parseInt(l[n].style.top) + 3) + "px";
}		
function remove(elemento){
	body.removeChild(elemento)
}

function overBlock() {
	perdePonto();
	location.reload();
}



