

// importar clases
import { Todo,TodoList } from './classes';

//importar metodos
import {fnCrearTodoHTML} from './js/00_componentes'
import {fnPintarTodo} from './js/00_componentes'


//import de css
import css from './css/01_componentes.css'; 


export const tlLista = new TodoList();


tlLista.arrTodos.forEach(Todo => {
    fnPintarTodo(Todo)
});


//este ejemplo te quiero decir que filter te duelve otra instancia del arreglo original, sin embargo
//no clona los elementos, solo filtra los elementos bajo las condiciones del metodo flecha (predicado)
// y el resultado es una arreglo con los objetos del primer arreglo los cuales
//quedan referenciados en el segundo

let arr1 = [{id:1} ,{id:2}, {id:3}];

let arr2  = arr1.filter(x => x.id%2 == 0);

arr2[0].id++;

console.log({arr1});
console.log({arr2});







