//var xhttp=new XMLHttpRequest()
document.getElementById('ready').innerHTML=""
document.getElementById("MonsterS").addEventListener("click", function(){
	console.log("running")
    let name=document.getElementById("Mon").value;
	let Dif= document.getElementById("DifA").value;
	console.log(name);
	console.log(Dif);
	var xhttp= new XMLHttpRequest()

	xhttp.open("POST", "/MonsterS", true)
	xhttp.setRequestHeader("Content-Type", "application/json")
	console.log(JSON.stringify({name:name, dif:Dif}))
	xhttp.send(JSON.stringify({name:name, dif:Dif}))
	document.getElementById('ready').innerHTML="YOU'RE MONSTER RESULTS ARE READY! CLICK THE LINK ABOVE TO SEE"
})
document.getElementById("ItemS").addEventListener("click", function(){
	console.log("met")
    let name=document.getElementById("It").value;
	let which= document.getElementById("C_o_M").value;
	console.log(name);
	var xhttp= new XMLHttpRequest()
	xhttp.open("POST", "/ItemS", true)
	xhttp.setRequestHeader("Content-Type", "application/json")
	xhttp.send(JSON.stringify({name:name, which:which}))
	document.getElementById('ready').innerHTML="YOU'RE ITEM RESULTS ARE READY! CLICK THE LINK ABOVE TO SEE"
})
document.getElementById("ChestS").addEventListener("click", function(){
	console.log("Het")
    let name=document.getElementById("Chest").value;
	let mag= document.getElementById("magical").value;
	let loc=document.getElementById("loc").value;
	let item= document.getElementById("It_C").value;
	let Dif= document.getElementById("DifB").value;
	console.log(name);
	console.log(mag);
	console.log(loc);
	console.log(item);
	console.log(Dif)
	var xhttp= new XMLHttpRequest()
	xhttp.open("POST", "/ChestS", true)
	xhttp.setRequestHeader("Content-Type", "application/json")
	xhttp.send(JSON.stringify({name:name,mag:mag,loc:loc,item:item,Dif:Dif}))
	document.getElementById('ready').innerHTML="YOU'RE CHEST RESULTS ARE READY! CLICK THE LINK ABOVE TO SEE"
})
