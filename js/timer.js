timerNumber = document.createElement("p");
timerNumber.classList.add("timerNumber");

timer = body.querySelector(".timer");
timer.appendChild(timerNumber);

timerNumber.textContent = ("000");
t1=0;
t2=0;
t3=0;
timerRolando();


function timerRolando(){
	t1 = t1 + 4;
	if(t1 == 100){
		t2 = t2 + 1;
		t1 = 0;

		if(t2%4 == 0){
			createBlock();
		}
		if(((t2-2)%4) == 0){
			createPoint();
		}
	
	}
	if(t2 == 100){
		t3 = t3 + 1;
		t2 = 0;
	}
	moveBlock();
	movePoint();
	timerNumber.textContent = t3 + ":" + t2 + ":" + t1;
	setTimeout(timerRolando, 10);

}