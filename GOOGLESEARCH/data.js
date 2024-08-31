export default {
    search: function(searchItem,sort,limit){
        
     return fetch(`http://www.reddit.com/search.json?q=${searchItem} & sort=${sort} & limit=${limit}`

     ).then(res => res.json())
     .then(data =>{ 
     
       return data.data.children.map(data=> data.data)})
     .catch(err=> console.log(error));
    
        
     
    }
}