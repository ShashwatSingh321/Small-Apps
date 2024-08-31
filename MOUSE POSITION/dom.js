var box = document.querySelector(".box")
box.addEventListener('mousemove',runevent)

function runevent(e){
    console.log('Event type' +e.type);
    
box.innerHTML = '<h3>MouseX: '+e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+
'</h3>'
box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

}