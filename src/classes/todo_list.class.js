import { Todo } from "./todo.class";

export class TodoList {
    // arrTodos;

    constructor() {
        // this.arrTodos = [];
        this.fnCargarLocalStorage();

    }

    fnNuevoTodo(pTodo) {
        this.arrTodos.push(pTodo);
        this.fnGuardarLocalStorage();
    }

    fnEliminarTodo(pnId) {

        // forma sencilla    
        // for(let i =0;i<this.arrTodos.length;i++)
        // {

        //     if(arrTodos[i].nId == pnId){
        //         arrTodos.splice(i,1);

        //         break;
        //     }
        // }

        //forma del curso. Me parece bien esta forma aunque esto es un gastadero de memoria
        this.arrTodos = this.arrTodos.filter(todo => todo.nId != pnId);
        //RECUERDA QUE EXISTE UNA DIFERENCIA ENTRE DEVOLVER UNA FUNCION FLECHA CON LLAVES {} Y SIN ELLAS

        this.fnGuardarLocalStorage();
    }

    fnEliminarTodoComp() {

        let arrAuxCompletados = this.arrTodos.filter(todo => todo.bCompletado);

        this.arrTodos = this.arrTodos.filter(todo => !todo.bCompletado);

        this.fnGuardarLocalStorage();

        return arrAuxCompletados;
    }

    fnMarcarComp(pnId) {


        for (let i = 0; i < this.arrTodos.length; i++) {

            if (this.arrTodos[i].nId == pnId) {
                this.arrTodos[i].bCompletado = true;

                break;
            }
        }
        this.fnGuardarLocalStorage();

    }

    fnObtenerTodo(pnId) {
        for (let i = 0; i < this.arrTodos.length; i++) {
            if (this.arrTodos[i].nId == pnId)
                return this.arrTodos[i]

        }

    }

    fnGuardarLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.arrTodos));

    }

    fnCargarLocalStorage() {
        if (localStorage.getItem('todos')) {
            this.arrTodos = [];

            //obtiene el arreglo como objeto JSON
            // let arrTodosAux = JSON.parse(localStorage.getItem('todos'));

            //esta parte es muy importante. Mapea de un objeto json a un objeto Todo
            // this.arrTodos = JSON.parse(localStorage.getItem('todos')).map(obj => Todo.fnTodoJSON(obj));
            this.arrTodos = JSON.parse(localStorage.getItem('todos')).map(Todo.fnTodoJSON);
            // console.log(this.arrTodos);

        }
        else {
            this.arrTodos = [];

        }

        // this.arrTodos = localStorage.getItem('todos')?
        //                 JSON.parse(localStorage.getItem('todos')):
        //                 this.arrTodos = [];

    }

}