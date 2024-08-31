window.addEventListener("load", ()=>{
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");


    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;

    function startposition(){
        painting = true;
    }
    function endposition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting) return;

        ctx.lineWidth = 10;
        ctx.lineCap = "round";


        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();

    }

    canvas.addEventListener("mousedown",startposition);
    canvas.addEventListener("mouseup",endposition);
    canvas.addEventListener("mousemove",draw);
})