let inpt = document.getElementById("inpt");
let showBlock = document.getElementById("Dh");
let inpt2 = document.getElementById("inpt2");
let findDh = document.getElementById("findDh");
let textb = document.getElementById("textb");
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
	//console.clear();
	show(findDh,"");
	for (var i = -90; i<=90; i+=0.1) {
		let v = NDhr(rad(i),bb);
		if(v.toFixed(2)==Dh){
			let textDh ="Широта:"+ i.toFixed(3)+"<br>";
			findDh.innerHTML+=textDh;
			//show(findDh,textDh);
			console.log(i.toFixed(1)+":"+v.toFixed(2));
		}
	}
}

function findDhr2(Dh,st,end,k){
	parseInt(Dh);
	//console.clear();
	for (var i = st; i<=end+1; i+=k) {
		let v = NDhr(rad(i),rad(b));
		if(v.toFixed(2)==Dh){
			
			console.log(i.toFixed(2)+":"+v.toFixed(2));
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
	
	let Dhr=NDhf(lat,bb) + (NDhf(lat,bb)/100);
	console.log(Dhr.toFixed(4))
	let DhrTime = toNormTime(Dhr);
	show(showBlock,DhrTime+"<br>"+Dhr.toFixed(2));
	
}
