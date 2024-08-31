document.querySelector('.submit').addEventListener('click', async (e) => {
    let inputvalue = document.querySelector('.input').value;
    let input = document.querySelector('.input');
    let result = document.querySelector('.result');

    if (inputvalue === '') {
        let alertdiv = document.createElement('div');
        alertdiv.textContent = 'Empty!!!';
        alertdiv.className = 'alertmsg';
        let form = document.querySelector('.form');
        form.insertBefore(alertdiv, input);

        setTimeout(() => {
            alertdiv.style.display = 'none';
        }, 2500);
        result.innerHTML = '';
    } else {
        input.value = '';
        result.innerHTML = '';

        
        let img = document.createElement('img');
        let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" + inputvalue;
        img.src = url;
        result.appendChild(img);

        // Fetch the image as a blob
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        // Create the download button
        let buttonn = document.createElement('a');
        buttonn.className = 'Download';
        buttonn.textContent = 'Download';
        buttonn.href = blobUrl; // Set the href to the blob URL
        buttonn.download = 'qrcode.png'; // Add the download attribute with a filename

        result.appendChild(buttonn);
    }
});
