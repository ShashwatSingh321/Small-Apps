

let input = document.querySelector('.input');
let downloadBtn = document.querySelector('.download');
downloadBtn.addEventListener('click', e=>{
e.preventDefault();
fetchFile(input.value);
downloadBtn.innerText = 'Downloading File....'
})

function fetchFile(url){
    fetch(url).then(data=> data.blob()).then(data2 =>{
        let TempUrl = URL.createObjectURL(data2);
        let atag = document.createElement("a");
        atag.href = TempUrl;
        atag.download = url.replace(/^.*[\\\/]/,'');
        document.body.appendChild(atag);
        atag.click();
        atag.remove();
        URL.revokeObjectURL(TempUrl);
        downloadBtn.innerText = 'Download File';
        console.log('hi');
       input.value = '';
    })
}