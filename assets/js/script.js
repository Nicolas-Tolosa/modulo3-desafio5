const inputTarea = document.querySelector("#input-tarea");
const botonAgregarTarea = document.querySelector("#boton-agregar-tarea");
const totalTareas = document.querySelector("#total-tareas");
const totalTareasRealizadas = document.querySelector("#total-tareas-realizadas");
const tablaTareas = document.querySelector("#tabla-body");

let listaTareas = [
    { id: Date.now(), tarea: "lorem ipsum dolor", completada: false },
    { id: Date.now() + 1, tarea: "lorem ipsum dolor", completada: false },
    { id: Date.now() + 2, tarea: "lorem ipsum dolor", completada: false }
];

function renderTareas() {
    let html = "";
    for (let tarea of listaTareas) {
        html +=
        `<tr>
            <td><p>${tarea.id}</p></td>
            <td><p>${tarea.tarea}</p></td>
            <td><input onclick="completarTarea(${tarea.id})" type="checkbox" ${tarea.completada ? 'checked' : ''}></td>
            <td><button onclick="borrarTarea(${tarea.id})">Eliminar Tarea</button></td>
        </tr>`;
    }
    tablaTareas.innerHTML = html;
    totalTareas.innerHTML = `${listaTareas.length}`;
    totalTareasRealizadas.innerHTML = `${listaTareas.filter(tarea => tarea.completada).length}`;
}

botonAgregarTarea.addEventListener("click", () => {
    if (inputTarea.value === "") {
        alert("Por favor escribe una tarea")
    } else {
        let nuevaTarea = { id: Date.now(), tarea: inputTarea.value, completada: false };
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
    if (index !== -1) {
        listaTareas[index].completada = !listaTareas[index].completada;
        renderTareas();
    }
}

renderTareas();
