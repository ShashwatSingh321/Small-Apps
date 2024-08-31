import reddit from './data.js';

document.getElementById('submit').addEventListener('click',(e)=>{
let searchItem = document.getElementById('Search').value;
let search = document.getElementById('Search');
// let results = document.querySelector('.results');

if(searchItem == ''){
    let div = document.createElement('div');
    div.className = 'alert';
    div.textContent = 'Search Empty';
    let box = document.querySelector('.box');

    box.insertBefore(div,search);

    setTimeout(()=>{
      div.style.display = 'none'
    },3000)
}
let sort = document.querySelector('input[name = "sortby"]:checked').value
let limit = document.querySelector('.limit').value;
    
search.value = '';

reddit.search(searchItem,sort,limit).then(results => {
  console.log(results)
  let output = '<div class="card-columns ">';
  results.forEach(post => {
    // Check for image
    let image = post.preview
    ? post.preview.images[0].source.url
    : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';
    output += `
    <div class="card mb-2 k">
    <img class="card-img-top" src="${image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${truncateString(post.selftext, 100)}</p>
      <a href="${post.url}" target="_blank
      " class="btn btn-primary">Read More</a>
      <hr>
      <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
      <span class="badge badge-dark">Score: ${post.score}</span>
    </div>
  </div>
    `;
  });
  output += '</div>';
  document.querySelector('.results').innerHTML = output;
 
});
e.preventDefault();
})


function truncateString(myString, limit) {
  const shortened = myString.indexOf(' ', limit);
  if (shortened == -1) return myString;
  return myString.substring(0, shortened);
}