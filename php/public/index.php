<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link href="css/styles.css" rel="stylesheet" />
    <title>Lista de tareas</title>
</head>

<body>
    <div class="container">
        <h1 class="my-4">Lista de Tareas</h1>
        <div id="taskForm">
            <h2>Añadir tarea</h2>
            <?php
            if (isset($_GET['valid']) && $_GET['valid'] == 'false') {
            ?>
                <div id="errorMsg" class="mb-4">
                    <div class="alert alert-danger" role="alert">Debe de rellenar todos los campos</div>
                </div>

            <?php
            }
            ?>
            <form action="gestionTareas.php" method="post" class="mb-4">
                <input type="hidden" name="action" value="agregar">
                <div class="form-group mr-3">
                    <input type="text" name="title" class="form-control form-control-lg" placeholder="Título:" require>
                </div>

                <div class="form-group mr-3">
                    <textarea name="description" rows="3" class="form-control form-control-lg" placeholder="Descripción:" require></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Agregar Tarea</button>
            </form>
        </div>
        <div id="tasksList">
            <h2>Tareas</h2>
            <?php
            require_once  'gestionTareas.php';
            $tareas = getTasks();
            if (empty($tareas)) {
                echo "<p class='text-center'>No hay tareas por el momento.</p>";
            } else {
            ?>
                <table id="taskTable" class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Título</td>
                            <th scope="col">Descripción</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach ($tareas as $tarea) {
                            echo "<tr><td>" . $tarea['title'] . '</td><td>' . $tarea['description'] . "</td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            <?php
            }
            ?>
        </div>
    </div>
</body>

</html>