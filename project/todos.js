import { displayTodos } from "./displayTodos.js";
import { protectPage } from "./auth.js";


protectPage();


async function fetchTodos() {
const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
const data = await res.json();
displayTodos(data);
}


fetchTodos();