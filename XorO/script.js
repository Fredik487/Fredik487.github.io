var freepos = [0,0,0,0,0,0,0,0,0];
var writePlayer = document.getElementById('player');
var pop_up = document.getElementById('pop_up');
var wrapper = document.getElementById('wrapper');

var player = 1;

function checkPos(pos){
	if(pos == 1 ||pos == 2) return 0;
	else return 1;
}

var allposition = 9;
function checkFreePos(pos){
	if(freepos[pos] == 1 ||freepos[pos] == 2){allposition-=1;}
	if(allposition == 0){writePlayer.innerHTML = "End game";refresh();
}
	else return;
}

function reservPos(pos){
	if(checkPos(freepos[pos])){
		if(player == 1){freepos[pos] = 1;player=2;writePlayer.innerHTML ="Now do is O";}
		else{freepos[pos] = 2;player=1;writePlayer.innerHTML ="Now do is X";}
	}else{WinAlert("R")}
	checkFreePos(pos);
};

function refresh(){
	location.reload();
};

function WinAlert(pl){
	pop_up.style.display="block";
	pop_up.style.opacity = "1";
	if(pl=="X" || pl=="O"){
		pop_up.innerHTML="Winner is "+pl+"<br><span>Click for restarting</span>";
		pop_up.onclick = function(){refresh();};
		wrapper.style.opacity = "0";
		writePlayer.style.opacity = "0";
	}else if(pl=="R"){
		pop_up.style.background="yellow";
		pop_up.innerHTML="This place is reserved<br><span>Click for close</span>";
		pop_up.onclick = function(){
			pop_up.style.opacity = "0";
			pop_up.style.display="none";
			pop_up.style.background="green";
		}
	}
}


wrapper.addEventListener('click',function(e)
	{
		var el = event.target;
		var pos =  el.id.substr(3,1) - 1;
		reservPos(pos);
		el.classList.remove('btn');
		el.classList.add('btnRed');
		wrapper.style.background = "#850000";
		if(freepos[pos] == 1){el.innerHTML = "X";}
		else{el.innerHTML = "O";}
		if(checkWin(freepos) == 1){
			WinAlert("X");
		}else if(checkWin(freepos) == 2){
			WinAlert("O");
		}
	}
);

wrapper.addEventListener('mouseover',function(e)
	{
		var el = event.target;
		if(el.className == "btnRed"){wrapper.style.background = "#850000";}
		else{wrapper.style.background="#006100";}
	}
);

function checkWin(fp){
	if(fp[0]==1 && fp[1]==1 && fp[2]==1){return 1;}
	if(fp[3]==1 && fp[4]==1 && fp[5]==1){return 1;}
	if(fp[6]==1 && fp[7]==1 && fp[8]==1){return 1;}

	if(fp[0]==1 && fp[3]==1 && fp[6]==1){return 1;}
	if(fp[1]==1 && fp[4]==1 && fp[7]==1){return 1;}
	if(fp[2]==1 && fp[5]==1 && fp[8]==1){return 1;}

	if(fp[0]==1 && fp[4]==1 && fp[8]==1){return 1;}
	if(fp[2]==1 && fp[4]==1 && fp[6]==1){return 1;}


	if(fp[0]==2 && fp[1]==2 && fp[2]==2){return 2;}
	if(fp[3]==2 && fp[4]==2 && fp[5]==2){return 2;}
	if(fp[6]==2 && fp[7]==2 && fp[8]==2){return 2;}

	if(fp[0]==2 && fp[3]==2 && fp[6]==2){return 2;}
	if(fp[1]==2 && fp[4]==2 && fp[7]==2){return 2;}
	if(fp[2]==2 && fp[5]==2 && fp[8]==2){return 2;}

	if(fp[0]==2 && fp[4]==2 && fp[8]==2){return 2;}
	if(fp[2]==2 && fp[4]==2 && fp[6]==2){return 2;}
};

//complite:добавить норм push up
//добавить выбор игры с компом или с игроком
//написать фнц компа