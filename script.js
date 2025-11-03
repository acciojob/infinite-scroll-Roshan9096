
let id = document.getElementById("infi-list")
let count =1;
for(let i=0;i<10;i++){
	let ol = document.createElement("li")
	ol.textContent = `Item ${count}`
	count++;
	id.appendChild(ol)
}

id.addEventListener("scroll",()=>{
  for(let i=0;i<2;i++){
	let ol = document.createElement("li")
	ol.textContent = `Item ${count}`
	count++;
	id.appendChild(ol)
}
})