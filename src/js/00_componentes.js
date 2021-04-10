



//esto es de las cosas que queria saber como se hacia
//export permite ver la funcion fnh1... tipo las dll en C++ o package en java
//en cada archivo se trata como un modulo, y al compilar con webpack lo mete todo dentro de 
//1 solo archivo
export const  fnh1 = (sMensaje)=>
{
    const h1 = document.createElement('h1');

    h1.innerText = `Mensaje: ${sMensaje}`;

    document.body.append(h1);
}

fnh1('hola modulos');