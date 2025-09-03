const loadTodo = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const res = await fetch(url)
    const data = await res.json();
    displayTodo(data);
}  
const displayTodo = (todos)=>{
    // step 1
    const todoContainer = document.getElementById('todo-container')
    todoContainer.innerHTML = '';

    
    todos.forEach(todo =>{
        const todoCard = document.createElement('div');
        todoCard.innerHTML = `
        <div class= "todo-card">
            <p>${todo.completed == true ? `<i class="fa-solid fa-check"></i>`: `<i class="fa-solid fa-square-xmark"></i>`}</p>
            <h4>${todo.title}</h4>
        </div>
        `
        todoContainer.appendChild(todoCard)
    })
}

loadTodo()

/**
 * {userId: 9, id: 174, title: 'similique aut quo', completed: false}
 * */ 