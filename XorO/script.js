var freepos = [0,0,0,0,0,0,0,0,0];
var writePlayer = document.getElementById('player');
var wrapper = document.getElementById('wrapper');

var player = 1;

function checkPos(pos){
	if(pos == 1 ||pos == 2) return 0;
	else return 1;
}

var allposition = 9;
function checkFreePos(pos){
	if(freepos[pos] == 1 ||freepos[pos] == 2){allposition-=1;}
	if(allposition == 0){writePlayer.innerHTML = "End game";refresh();}
	else return;
}

function reservPos(pos){
	if(checkPos(freepos[pos])){
		if(player == 1){freepos[pos] = 1;player=2;writePlayer.innerHTML ="Now do is O";}
		else{freepos[pos] = 2;player=1;writePlayer.innerHTML ="Now do is X";}
	}else{alert("RESERVED!")}
	checkFreePos(pos);
};

function refresh(){
	location.reload();
};

wrapper.addEventListener('click',function(e)
	{
		var el = event.target;
		var pos =  el.id.substr(3,1) - 1;
		reservPos(pos);
		if(freepos[pos] == 1){el.innerHTML = "X";}
		else{el.innerHTML = "O";}
		if(checkWin(freepos) == 1){
			alert("Win X");
			refresh();
		}else if(checkWin(freepos) == 2){
			alert("Win O");
			refresh();
		}
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

//добавить норм push up
//добавить выбор игры с компом или с игроком
//написать фнц компа