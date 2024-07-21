$(document).ready(function () {
    checkTasksList();
    $('#addButton').click(() => { addTask() })
});

function checkTasksList() {
    if ($('#taskTable tbody').html().trim() === '') {
        $('.container').append('<p id="noContentMsg">No hay tareas pendientes</p>');
        $('#taskTable').hide();

    }
}

function addTask() {
    const newTask = $("#title").val().trim();

    if (newTask.length) {
        $("#errorMsg").empty();
        $('#noContentMsg').remove();
        $('#taskTable').show();
        const row = $('<tr></tr>');
        const task = $(`<td class="task p-2 mb-2">${newTask}</td>`);

        const removeButton = $('<td><button class="btn btn-danger btn-sm">Eliminar</button></td>');
        removeButton.click(function () {
            $(this).parent().remove();
            checkTasksList();
        });
        row.append(task).append(removeButton);
        $('#taskTable tbody').append(row);
        $("#title").val('');
    } else {
        const message = "Debe rellenar el campo";
        $("#errorMsg").html('<div class="alert alert-danger text-center" role="alert">' + message + '</div>');
    }

}