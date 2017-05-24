placar = body.querySelector(".placar");
placarD = body.querySelector(".placarD");

function ganhaPonto() {
	placar.textContent = parseInt(placar.textContent) + 1
}
function perdePonto() {
	placarD.textContent = parseInt(placarD.textContent) + 1
}