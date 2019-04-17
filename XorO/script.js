var freepos = [0,0,0,0,0,0,0,0,0];
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');

pos={
	"btn1":0,
	"btn2":1,
	"btn3":2,
	"btn4":3,
	"btn5":4,
	"btn6":5,
	"btn7":6,
	"btn8":7,
	"btn9":8,
}
var player = 1;
function checkPos(pos){
	if(pos == 1 ||pos == 2) return 0;
	else return 1;
}
function reservPos(pos){
	if(checkPos(freepos[pos])){
		if(player == 1){freepos[pos] = 1;player=2;}
		else{freepos[pos] = 2;player=1;}
	}else{alert("RESERVED!")}
	//alert(freepos)
}
for (var i = 1; i <= 9; i++) {
	var btn = document.getElementById('btn' +i);
	if(freepos[i-1] == 1){btn.style.backgroundColor = "red";}
}
btn1.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn1.innerHTML = "X";}
	else{btn1.innerHTML = "O";}
}
btn2.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn2.innerHTML = "X";}
	else{btn2.innerHTML = "O";}
}
btn3.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn3.innerHTML = "X";}
	else{btn3.innerHTML = "O";}
}
btn4.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn4.innerHTML = "X";}
	else{btn4.innerHTML = "O";}
}
btn5.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn5.innerHTML = "X";}
	else{btn5.innerHTML = "O";}
}
btn6.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn6.innerHTML = "X";}
	else{btn6.innerHTML = "O";}
}
btn7.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn7.innerHTML = "X";}
	else{btn7.innerHTML = "O";}
}
btn8.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn8.innerHTML = "X";}
	else{btn8.innerHTML = "O";}
}
btn9.onclick = function(e){
	reservPos(pos[this.id]);
	if(freepos[pos[this.id]] == 1){btn9.innerHTML = "X";}
	else{btn9.innerHTML = "O";}
}
