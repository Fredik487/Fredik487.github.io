let inpt = document.getElementById('js-inpt');
let btns = document.getElementById('js-btns');

function Calculate(value){
	console.log("value:",value);
	return eval(value);
}
btns.addEventListener('click',function(e){
	let el = event.target;
	if(el.id=="js-btns"){
		return;
	}
	let elValue=el.innerText;
	if(elValue=="="){
		if(Calculate(inpt.value)==undefined){return}
		inpt.value=Calculate(inpt.value);
		return
	}
	inpt.value+=elValue;
	}
);