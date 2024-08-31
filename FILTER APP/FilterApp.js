document.querySelector('.search').addEventListener('keyup',function(){
    let currentchar = this.value.toLowerCase();
    
    let list = document.querySelectorAll( 'li');
    list.forEach(function(name) {
    
    let text = name.textContent;
    if(text.toLowerCase().indexOf(currentchar)>-1){
        name.style.display = '';

    }
        else {
            name.style.display = 'none'; 
            // document.querySelector('.a').style.display = 'none'


        }
    
        
    });
    
    
    
    
    
    
    
    
    
    })