var text = document.getElementById('text');
var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");

ctx.fillStyle = "#d3d3d3";
ctx.font = "20px Arial";
ctx.fillText("Здесь будет фото",60,100);

document.getElementById('btn').onclick = function(){

	var grd = ctx.createLinearGradient(0,0,500,0);
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"white");

	ctx.fillStyle = "black";
	ctx.fillRect(0,0,300,200);
	ctx.fillStyle = "white";
	ctx.font = "30px Arial";
	ctx.fillText(text.value,20,100);
};

function getImg(){
    var link=document.createElement("a");
    link.download="download";
    link.href=canv.toDataURL(["image/png"]);
    text.value ="";
    link.click();
}

//выбор размера картинки
//выбор фона
//выбор выравнивание текста