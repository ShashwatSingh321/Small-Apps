var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// form submit event
form.addEventListener('submit',additem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filteritems)

function additem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));



    var deleteBtn = document.createElement('button')
    //Add classes to delete button

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append textnode
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn)

    
    itemList.appendChild(li);
    console.log(li);
    

}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);

        }
        console.log(1);
        
    }

}

function filteritems(e){
    var text =e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){

        var itemname = item.firstChild.textContent;

        if(itemname.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none'
        }
    })
}
