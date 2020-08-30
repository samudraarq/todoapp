// // todos
// let todos = [
//   { name: "eat burger", id: 1 },
//   { name: "play games", id: 2 },
//   { name: "go to sleep", id: 3 },
// ];
// const todolist = document.querySelector(".todo-list");

// // render todo
// const renderTodo = () => {
//   let html = "";
//   todos.forEach((todo) => {
//     const li = `
//         <li id="${todo.id}">
//             ${todo.name}
//             <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="delete-btn" id=${todo.id}><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
//         </li>
//         `;
//     html += li;
//   });
//   todolist.innerHTML = html;
// };
// renderTodo();

// // add todos
// const addtodo = document.querySelector(".add-todo");

// addtodo.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const input = document.querySelector(".input-text");
//   const todo = { name: input.value, id: Math.random() };
//   todos.unshift(todo);
//   input.value = "";
//   renderTodo();
// });

// // delete todos
// todolist.addEventListener("click", (e) => {
//   if (e.target && e.target.nodeName == "svg") {
//     const id = e.target.id;
//     const newTodos = todos.filter((todo) => {
//       return todo.id != id;
//     });
//     console.log(id);
//     console.log(newTodos);
//     todos = newTodos;
//     renderTodo();
//   }
// });

// ========================================

const todolist = document.querySelector(".todos");
const submit = document.querySelector(".submit");
const input = document.querySelector(".input-text");

let todos = ["eat burger", "play final fantasy"];

class list {
  constructor(name) {
    this.createList(name);
  }
  createList(name) {
    const list = document.createElement("li");

    const input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    input.value = name;
    input.classList.add("todos__list");

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "EDIT";
    edit.addEventListener("click", () => this.edit(input, edit));

    const remove = document.createElement("span");
    remove.classList.add("remove");
    remove.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>`;
    remove.addEventListener("click", () => this.remove(list, name));

    todolist.prepend(list);

    list.appendChild(input);
    list.appendChild(edit);
    list.appendChild(remove);
  }

  edit(input, edit) {
    if (input.disabled == true) {
      input.disabled = !input.disabled;
      edit.innerHTML = "DONE";
    } else {
      input.disabled = !input.disabled;
      edit.innerHTML = "EDIT";
    }
  }

  remove(list) {
    list.parentNode.removeChild(list);
  }
}

todos.forEach((todo) => {
  new list(todo);
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value != "") {
    new list(input.value);
    input.value = "";
  }
});
