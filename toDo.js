function getTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => collectTodo(data))
}


function collectTodo(data){
    let myDiv = document.getElementById('my-div');
    for(let items of data){
        console.log(items)

        let div = document.createElement('div');
        div.innerHTML =`
        <h1>userId: ${items.userId}</h1>
        <p>title ${items.title}</p>
        
        `
        myDiv.appendChild(div);
        
    }

}

