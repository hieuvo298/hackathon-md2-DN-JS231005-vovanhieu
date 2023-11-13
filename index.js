const todoList = [];

if (!JSON.parse(localStorage.getItem("todoList"))) {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function renderTodo() {
    const localData = JSON.parse(localStorage.getItem('todoList'));
    const listTodo = document.querySelector('.list-todo');
    listTodo.innerHTML = "";

    if (!localData || localData.length === 0) { 
        listTodo.innerHTML = `
            <img src="./img/no-data-concept-illustration_114360-536.avif" alt="">
        `;
    } else {
        localData.forEach(function (item, index) {
            listTodo.innerHTML += `
                <div class="todo-list">
                    <div class="checkbox">
                    <input type="checkbox" onclick="updateTodo(${index})" ${item.status ? 'checked' : ''}>
                        <p style="text-decoration:${item.status ? 'line-through' : 'none'}")">${item.content}</p>
                    </div>
                    <div class="icon">
                        <i onclick="editTodo('${index}')" class="fa-solid fa-pen" style="color: #ffa200;"></i>
                        <i onclick="deleteTodo('${index}')" class="fa-solid fa-trash" style="color: #e10505;"></i>
                    </div>
                </div>
            `;
        });
    }
}
renderTodo();
function addTodo() {
    const inputElement = document.querySelector('#input-form')
    const inputValue = inputElement.value
    const newTodo = {
        content: inputValue,
        status: false
    }
    if (!inputValue) {
        alert('Tên công việc không được để trống.'); 
        return;
    }
    const localData = JSON.parse(localStorage.getItem('todoList'))
    localData.push(newTodo)
    localStorage.setItem('todoList', JSON.stringify(localData))
    document.querySelector('#input-form').value = ""
    renderTodo()
}
function deleteTodo(index) {
    const dataLocal = JSON.parse(localStorage.getItem('todoList'))
    const item = dataLocal[index];
    const confirmDelete = confirm(`Bạn có chắc muốn xóa công việc "${item.content}" không?`);
    
    if (confirmDelete) {
        const newData = dataLocal.filter(function (item, i) {
            return index != i
        })
        localStorage.setItem('todoList', JSON.stringify(newData))
        renderTodo()
    }
}

function editTodo(index) {
    const dataLocal = JSON.parse(localStorage.getItem('todoList'))
    const item = dataLocal[index];
    const editInput = prompt('Nhập công việc muốn sửa :', item.content);
    if (!editInput) {
        return alert('Tên công việc không được để trống.'); 

    }
    if (editInput !== null) { 
        const updateData = dataLocal.map((item, i) => {
            if (i == index) {
                return { ...item, content: editInput };
            } else {
                return item;
            }
        });
        localStorage.setItem('todoList', JSON.stringify(updateData));
        renderTodo();
    }
}

function updateTodo(index) {
    const dataLocal = JSON.parse(localStorage.getItem('todoList'));
    const newData = dataLocal.map(function (item, i) {
        if (index == i) {
            return {
                content: item.content,
                status: !item.status
            };
        } else {
            return item;
        }
    });
    localStorage.setItem('todoList', JSON.stringify(newData));
    renderTodo();
}
function countCompleteTodo(){
    const dataLocal = JSON.parse(localStorage.getItem('todoList'));
     
}