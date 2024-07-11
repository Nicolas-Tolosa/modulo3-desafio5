const inputTarea = document.querySelector("#input-tarea");
const botonAgregarTarea = document.querySelector("#boton-agregar-tarea");
const totalTareas = document.querySelector("#total-tareas");
const totalTareasRealizadas = document.querySelector("#total-tareas-realizadas");
const tablaTareas = document.querySelector("#tabla-body");

let listaTareas = [
    { id: Date.now(), tarea: "lorem ipsum dolor" },
    { id: Date.now() + 1, tarea: "lorem ipsum dolor" },
    { id: Date.now() + 2, tarea: "lorem ipsum dolor" }];
let tareasCompletadas = [];

function renderTareas() {
    let html = "";
    for (let tarea of listaTareas) {
        html +=
        `<tr>
            <td><p>${tarea.id}</p></td>
            <td><p>${tarea.tarea}</p></td>
            <td><input onclick="completarTarea(${tarea.id})" type="checkbox"></td>
            <td><button onclick="borrarTarea(${tarea.id})">Eliminar Tarea</button></td>
        </tr>`;
    }
    tablaTareas.innerHTML = html;
    totalTareas.innerHTML = `${listaTareas.length}`;
    totalTareasRealizadas.innerHTML = `${tareasCompletadas.length}`;
}

botonAgregarTarea.addEventListener("click", () => {
    if (inputTarea.value === ""){
        alert("Por favor escribe una tarea")
    } else {
        let nuevaTarea = { id: Date.now(), tarea: inputTarea.value };
        listaTareas.push(nuevaTarea);
        inputTarea.value = "";
        console.log(listaTareas);
        renderTareas();
    }

});

function borrarTarea(idTarea) {
    const indexTarea = listaTareas.findIndex((Elemento) => Elemento.id === idTarea);
    listaTareas.splice(indexTarea, 1);
    renderTareas();
}

function completarTarea(idTarea) {
    const index = listaTareas.findIndex(tarea => tarea.id === idTarea);
    if (index !== -1) { // Comprueba que se haya encontrado una tarea
        const [tarea] = listaTareas.splice(index, 1); //Crea la variable tarea haciendo uso de la desestructuracion del array listaTareas
        tareasCompletadas.push(tarea);
        renderTareas();
    }
}

renderTareas();
