document.getElementById('btn').onclick = function(){
	var text = document.getElementById('text').value;
	window.canv = document.getElementById("canvas");
	var ctx = canv.getContext("2d");

	var grd = ctx.createLinearGradient(0,0,500,0);
	grd.addColorStop(0,"red");
	grd.addColorStop(1,"white");

	ctx.fillStyle = "black";
	ctx.fillRect(0,0,300,200);
	ctx.fillStyle = "white";
	ctx.font = "30px Arial";
	ctx.fillText(text,70,100);
};

function getImg(){
    var link=document.createElement("a");
    link.download="download";
    link.href=canv.toDataURL(["image/png"]);
    link.click();
}

