$(document).ready(function () {
    checkTasksList();
    $('#addButton').click(() => { addTask() })
});

function checkTasksList() {
    if ($('#tasksList').html().trim() === '') {
        $('#tasksList').html('<p id="noContentMsg" class="p-2 mb-2">No hay tareas pendientes</p>');
    }
}

function addTask() {
    let newTask = $("#title").val();

    if (newTask.trim().length > 0) {
        if ($('#noContentMsg').length) {
            $('#noContentMsg').remove()
        }

        $('#noContentMsg').remove()
        let task = $(`<p class="task p-2 mb-2">${newTask}</p>`)

        let removeButton = $('<button class="btn btn-danger btn-sm">Eliminar tarea</button>');
        removeButton.click(function () {
            $(this).parent().remove();
            checkTasksList();
        });

        task.append(removeButton);
        $('#tasksList').append(task);
        $("#title").val('');
    } else {
        let message = "Debe rellenar el campo";
        $("#errorMsg").html('<div class="alert alert-danger" role="alert">' + message + '</div>')
    }

}