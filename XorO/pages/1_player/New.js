var freepos = [0,0,0,0,0,0,0,0,0];
var writePlayer = document.getElementById('player');
var pop_up = document.getElementById('pop_up');
var wrapper = document.getElementById('wrapper_btn');
var scoreX = document.getElementById('score-X');
var scoreII = document.getElementById('score-II');

var player = 1;
getWins("X");
getWins("II");

var allposition = 9;
function checkFreePos(pos){
	if(freepos[pos] == 1 || freepos[pos] == 2){allposition-=1;console.log("pos:",allposition);}
	if(allposition == 0){
		writePlayer.innerHTML = "End game";
		if(checkWin(freepos,1) == 1){
			WinAlert("X");
		}else if(checkWin(freepos,2) == 2){
			WinAlert("II");
		}else{
			WinAlert("D");
		}
	}else return;
}

function addWins(pl){
	let score = sessionStorage.getItem(pl);
	if(score==null){
		sessionStorage.setItem(pl, 0);
	}
	score = sessionStorage.getItem(pl);
	score=parseInt(score);
	score+=1;
	sessionStorage.setItem(pl, score);
	
}
function getWins(pl){
	let score = sessionStorage.getItem(pl);
	if(score==null){
		sessionStorage.setItem(pl, 0);
	}
	if(pl="X"){
		scoreX.innerHTML="score-"+pl+": "+parseInt(sessionStorage.getItem(pl));
	}
	if(pl="II"){
		scoreII.innerHTML="score-"+pl+": "+parseInt(sessionStorage.getItem(pl));
	}
	

}


function II(){
	IIpos = Math.round(Math.random()*8);
	if(checkPos(freepos[IIpos])){
		return IIpos;
	}else{
		
		II();
	}
	
}


function checkPos(pos){
	if(pos == 1 ||pos == 2) return 0;
	else return 1;
}
function reservPos(pos){
	if(checkPos(freepos[pos])){
		if(player == 1){
			freepos[pos] = 1;
			checkFreePos(pos);
			player=2;
			writePlayer.innerHTML ="Now do is II";
		}
		if(player == 2){
			II();
			freepos[IIpos] = 2;
			checkFreePos(IIpos);
			player=1;
			writePlayer.innerHTML ="Now do is X";}
	}else{WinAlert("R")}
};

function refresh(){
	location.reload();
};

function WinAlert(pl){
	pop_up.style.display="block";
	pop_up.style.background="green";
	pop_up.style.color="white";
	pop_up.style.opacity = "0.9";
	if(pl=="X" || pl=="II"){
		addWins(pl);
		getWins(pl);
		pop_up.innerHTML="Winner is "+pl+"<br><span>Click for restarting</span>";
		pop_up.onclick = function(){refresh();};
		writePlayer.style.opacity = "0";
	}else if(pl=="R"){
		pop_up.style.opacity = "1";
		pop_up.style.background="yellow";
		pop_up.style.color="black";
		pop_up.innerHTML="This place is reserved<br><span>Click for close</span>";
		pop_up.onclick = function(){
			pop_up.style.opacity = "0";
			pop_up.style.display="none";
		}
	}else if(pl=="D"){
		pop_up.style.background="orange";
		pop_up.style.color="black";
		pop_up.innerHTML="Draw<br><span>Click for restarting</span>";
		pop_up.onclick = function(){
			pop_up.style.opacity = "0";
			pop_up.style.display="none";
			pop_up.style.background="green";
			pop_up.style.color="white";
			refresh();};
	}

}

wrapper.addEventListener('click',function(e)
	{
		var el = event.target;

		if(el.id=="wrapper"){return}
		else{
			var pos =  el.id.substr(3,1) - 1;
			reservPos(pos);
			el.classList.remove('btn');
			el.classList.add('btnRed');
			wrapper.style.background = "#850000";
			//II();
			if(freepos[pos] == 1){el.innerHTML = "X";}
			for (let i = 0; i<9; i++) {
				if(freepos[i]==2){
					document.getElementById('btn'+(i+1)).innerHTML = "II";

				}
			}
			if(checkWin(freepos,1) == 1){
				WinAlert("X");
			}else if(checkWin(freepos,2) == 2){
				WinAlert("II");
			}
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

function checkWin(fp,n){
	var i;
	for(i=0;i<=6;i+=3){ if(fp[i]==n && fp[1+i]==n && fp[2+i]==n){return n;} }
	for(i=0;i<=2;i+=1){ if(fp[i]==n && fp[3+i]==n && fp[6+i]==n){return n;} }
	for(i=0;i<=2;i+=2){ if(fp[i]==n && fp[4]  ==n && fp[8-i]==n){return n;} }
}