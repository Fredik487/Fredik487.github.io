let inpt = document.getElementById("inpt");
let showBlock = document.getElementById("Dh");
let inpt2 = document.getElementById("inpt2");
let findDh = document.getElementById("findDh");
let textb = document.getElementById("textb");
let geth = document.getElementById("geth");
let findh = document.getElementById("findh");

bb=0;
show(textb,bb);


let m = Math;
function rad(int) {
	return int * m.PI /180;
}
function grad(int) {
	return int * 180 /m.PI;
}
function sin(int){
	return m.sin(rad(int));
}
function cos(int){
	return m.cos(rad(int));
}
function tg(int){
	return m.tan(rad(int));
}
function asin(int){
	return grad(m.asin(rad(int)));
}
function acos(int){
	return grad(m.acos(rad(int)));
}
function toNormTime(time) {
	//time++;
	let t = m.round(time)+" h : "+m.round(( time - m.floor(time) )*60)+" min";
	return t;
}
	//show(showBlock,DhrTime);
	//console.log("Dhr:",DhrTime,"\nDhr:",++r);

function b(int){

	bb = parseFloat(int);
	show(textb,bb);
	bb=rad(bb);
	console.log(bb);

	
}
function show(block,msg){
	block.innerHTML=msg;
}
function addshow(block,msg){
	block.innerHTML+=msg;
}
function Dhf(lat,b){
	return (24/m.PI)*acos(-tg(lat)*tg(b));
}
function Dhr(lat,b){
	let r = Dhf(lat,b) + (Dhf(lat,b)/100);
	//let DhrTime = toNormTime(r);
	console.log("r:",rad(r));
	return r;
}
//inpt.addEventListener("change",Dhr(this.value,7,1));



function findDhr(Dh){
	parseInt(Dh);
	let Dh_lenght=(String(Dh).length - String(Math.trunc(Dh)).length)-1;
	let k;
	if(Dh_lenght==1){k=0.1}
	if(Dh_lenght==2){k=0.01}
	if(Dh_lenght==3){k=0.001}
	if(Dh_lenght==4){k=0.0001}
	if(Dh_lenght==5){k=0.00001}
	//console.clear();
	show(findDh,"");
	for (var i = -90; i<=90; i+=k) {
		let v = NDhr(rad(i),bb);
		if(v.toFixed(Dh_lenght)==Dh){
			let textDh ="Широта:"+ i.toFixed(Dh_lenght)+"<br>";
			findDh.innerHTML+=textDh;
			//show(findDh,textDh);
			console.log(i.toFixed(Dh_lenght)+":"+v.toFixed(Dh_lenght));
		}
	}
}

function findDhr2(Dh,st,end,k){
	parseInt(Dh);
	//console.clear();
	for (var i = st; i<=end+1; i+=k) {
		let v = NDhr(rad(i),rad(b));
		if(v.toFixed(5)==Dh){
			
			console.log(i.toFixed(5)+":"+v.toFixed(5));
		}
	}
	
}
//inpt2.addEventListener("change",findDhr2(this.value));

function NDhf(lat,b){
	return (24/m.PI)*m.acos(-m.tan(lat)*m.tan(b));
}
function NDhr(lat,b){
	return NDhf(lat,b) + (NDhf(lat,b)/100);
}
function NDhr2(lat){
	lat=grad(lat);
	let lat_lenght=(String(lat).length - String(Math.trunc(lat)).length)-1;
	lat=rad(lat);
	let Dhr=NDhf(lat,bb) + (NDhf(lat,bb)/100);
	console.log(Dhr.toFixed(lat_lenght))
	let DhrTime = toNormTime(Dhr);
	show(showBlock,DhrTime+"<br>"+Dhr.toFixed(lat_lenght));
	
}
let dayOfMonth={
	"1":31,
	"2":29,
	"3":31,

	"4":30,
	"5":31,
	"6":30,

	"7":31,
	"8":31,
	"9":30,

	"10":31,
	"11":30,
	"12":31
}
function CountDayOfYear(day,month) {
	let DayOfYear = 0;
	for (var i = 1; i<=month-1; i++) {
		i=String(i);
		DayOfYear+=dayOfMonth[i];
		console.log(DayOfYear);
	}
	DayOfYear+=day;
	console.log(DayOfYear);
	return DayOfYear;
}
function findB(day,AnotherYear){
	let findB;
	if(AnotherYear){
		findB = -23.45 * cos( 360*( (day+11.25)/366 ) );
	}else{
		findB = -23.45 * cos( 360*( (day+10)/365 ) );
	}
	return findB;
}
//findB(CountDayOfYear(day,month),1);
function getH(Lat,b,H){
	let h = asin(sin(rad(b))*sin(rad(Lat))+cos(rad(Lat))*cos(rad(bb))*cos(rad(H)));
	show(geth,grad(h).toFixed(2));
	console.log("Lat:",Lat,"h:",grad(h).toFixed(2));
	//return grad(h);
}
function findH(hReal,H){
	for (var i = 0; i<=90; i+=0.1) {
		let h = getH(i,bb,H);
		console.log("hReal",grad(hReal).toFixed(2),"Lat2:",i,"h2:",grad(h));
		if(grad(h.toFixed(1))==grad(hReal).toFixed(1)){
			let texth ="Широта:"+ i.toFixed(1)+"<br>";
			findh.innerHTML+=texth;
			//show(findDh,textDh);
			console.log(i.toFixed(1)+":"+v.toFixed(1));
		}
	}
}

function getH2(Lat,b,H){
	let sin1 = sin(b)*sin(Lat);
	let cos2 = cos(Lat)*cos(b);
	let cosH = cos(H);
	let h = asin( sin1 + cos2*cosH);
	show(findh,grad(h).toFixed(2));
	console.log("Lat:",Lat,"h:",grad(h).toFixed(2));
	//return grad(h);
}




function getH3(Lat,b,H,sh){
	let h = Math.asin(Math.sin(rad(b))*Math.sin(rad(Lat))+Math.cos(rad(Lat))*Math.cos(rad(b))*Math.cos(rad(H)));
	console.log("Lat:",Lat,"h:",grad(h).toFixed(5));
	if(sh){show(geth,grad(h).toFixed(5));}
	
	return grad(h);
}
function findH2(hReal,H){
	findh.innerHTML="";
	let hReal_lenght=(String(hReal).length - String(Math.trunc(hReal)).length)-1;
	for (var i = -90; i<=90; i+=0.1) {
		let h = getH3(i,bb,0,false);
		console.log(hReal_lenght,h.toFixed(hReal_lenght),grad(hReal).toFixed(hReal_lenght));
		if(h.toFixed(hReal_lenght) == parseFloat(hReal).toFixed(hReal_lenght)){
			let texth ="Широта:"+ i.toFixed(hReal_lenght)+"<br>";
			findh.innerHTML+=texth;
			console.log("hReal",grad(hReal).toFixed(2),"Lat2:",i.toFixed(2),"h2:",h.toFixed(1));
		}
	}
}