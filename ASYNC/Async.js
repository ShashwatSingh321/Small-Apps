const posts = [
    {title: 'Mark-Zugerberg', company: 'Facebook', age:21},
    {title: 'Steve-jobs', company: 'Apple', age:27},
    {title: 'Bill-Gates', company: 'Microsoft', age:24}



]

function getpost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index) =>{
            output +=`<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

// getpost();

function gepost(callback){
    setTimeout(()=>{
        let outpu = '';
        posts.forEach((post,index) =>{
            outpu +=`<li>${post.company}</li>`
        });
        document.body.innerHTML = outpu;
        callback();
    },2000);
}

gepost(getpost);