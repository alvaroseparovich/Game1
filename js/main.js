console.log("carregou");

var body = document.querySelector("body");
var ast = document.createElement("div");

inicia();
function inicia(){
	ast.classList.add("mouse");
	body.appendChild(ast);
}
function mouseMove(e) {
	/*console.log(e.clientX);
	console.log(e.clientY);*/
	let x = e.clientX;
	let y = e.clientY;

	moveAsterisco(x,y);
}
function moveAsterisco(x,y){
	ast.style.left = (x - 10) + "px";
	ast.style.top = (y-10) + "px";
}
