import { tlLista } from "../index";
import { Todo } from "../classes";

const ulTodoList = document.querySelector(".todo-list");
const txtTodo = document.querySelector(".new-todo");
const btnBorrarCompletados = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");


export const fnCrearTodoHTML = (todo) => {

    const htmlTodo = `
     <li class="${todo.bCompletado ? "completed" : ""} " data-id="${todo.nId}">
        <div class="view">
            <input class="toggle" type="checkbox" ${todo.bCompletado ? "checked" : ""}>
            <label>${todo.sTarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    let htmlDiv = document.createElement('div');

    htmlDiv.innerHTML = htmlTodo;

    ulTodoList.append(htmlDiv.firstElementChild)

    return htmlTodo;

}

export const fnPintarTodo =(Todo)=>{

    
    fnCrearTodoHTML(Todo);

    txtTodo.value = '';

    // console.log({tlLista});


}

const fnCrearTodo =(psTodo)=>{

    let todoAux = new Todo(psTodo);

    tlLista.fnNuevoTodo(todoAux);

    fnPintarTodo(todoAux);

    // console.log({tlLista});


}

const fnMostrarTodos = ()=>
{
    for(let i=0;i< ulTodoList.children.length;i++)
    {
        let liAux = ulTodoList.children.item(i);

        liAux.classList.contains("hidden")?
            liAux.classList.toggle("hidden"):{};

    }
}

const fnMostrarCompletados = () =>
{

    // let lisPendientes = ulTodoList.children
   
    for(let i=0;i< ulTodoList.children.length;i++)
    {
        // console.log(ulTodoList.children.item(i))

        let liAux = ulTodoList.children.item(i);

        liAux.classList.contains("completed")?
            liAux.classList.remove("hidden")
        :liAux.classList.toggle("hidden") ;
        //setAttributeNode(document.createAttribute('hidden'))
        

    }


}

const fnOcultarPendientes = () =>
{

    // let lisPendientes = ulTodoList.children
   
    for(let i=0;i< ulTodoList.children.length;i++)
    {
        // console.log(ulTodoList.children.item(i))

        let liAux = ulTodoList.children.item(i);

        liAux.classList.contains("completed")?
            liAux.classList.toggle("hidden")
        :{} ;
        //setAttributeNode(document.createAttribute('hidden'))
        

    }


}


const fnRemoverSeleccionados =()=>
{

    document.querySelectorAll('.filtro').forEach(element => {
        
         element.classList.remove('selected');

        
    });

}

txtTodo.addEventListener('keyup', (ev) => {
    // console.log({ev})

    if (ev.keyCode === 13 && txtTodo.value !== '') {

        let sTodo = txtTodo.value;

        fnCrearTodo(sTodo,txtTodo)
    }



});


ulTodoList.addEventListener('click', (ev) => {
    // console.log(ev.target);

    const sNombreElemento = ev.target.localName;

    const todoElemento = ev.target.parentElement.parentElement;

    const nId = todoElemento.getAttribute("data-id");

    if (sNombreElemento.includes('input')) {


        tlLista.fnMarcarComp(nId);

        //UFF esto es muy importante, con esta puedo poner y quitar una clase de un elemento
        todoElemento.classList.toggle("completed");



    }
    else if (sNombreElemento.includes('button')) {

        tlLista.fnEliminarTodo(nId);

        todoElemento.parentElement.removeChild(todoElemento);

        

    }

    console.log({tlLista});

});

btnBorrarCompletados.addEventListener('click', (ev) => 
{
   let arrCompletados = tlLista.fnEliminarTodoComp();

   arrCompletados.forEach(element => {

        let htmlAuxTodo = document.querySelector(`[data-id='${element.nId}']`); 

        htmlAuxTodo.remove();       
       
   });

});


ulFiltros.addEventListener('click',(ev)=>
{
    let anclafiltro = ev.target; 

    let txtFiltro = anclafiltro.text;

    fnRemoverSeleccionados();

    anclafiltro.classList.toggle('selected');

    if(!txtFiltro){return ;}

    switch(txtFiltro.toUpperCase())
    {
        case "PENDIENTES":

            fnOcultarPendientes();

            

            break;
        case "TODOS":

            fnMostrarTodos();

                break;

        case "COMPLETADOS":

            fnMostrarCompletados();
        
                        break;

    }

});
