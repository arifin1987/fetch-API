function findNames(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}


function displayUsers(data){
    for(let user of data){
        let ul = document.getElementById('list-id');
        let li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}