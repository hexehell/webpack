
export class Todo{


    //armaremos una cosntructor para una tarea
     constructor (psTarea)
     {
         this.sTarea = psTarea 

         this.dFecha_creacion = new Date();

         this.nId = this.dFecha_creacion.getTime();

         this.bCompletado = false;
     }

     static fnTodoJSON({sTarea,dFecha_creacion,nId,bCompletado})
     {
         const todoAux = new  Todo(sTarea);      

        

        todoAux.dFecha_creacion = dFecha_creacion

        todoAux.nId = nId;

        todoAux.bCompletado = bCompletado;

        return todoAux;

     }
}