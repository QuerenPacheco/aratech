<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['action']) && $_POST['action'] === 'agregar') {
        $areInputsValid = inputsAreValid($_POST);
        if($areInputsValid){
            $newTask = [
                'id' => uniqid(),
                'title' => $_POST['title'],
                'description' => $_POST['description']
            ];
            $tasks = getTasks();
            array_push($tasks, $newTask);
            file_put_contents('./js/datos.json', json_encode($tasks, JSON_PRETTY_PRINT));
        }else{
            header('Location: index.php?valid=false');
            exit;
        }

    }
    
    header('Location: index.php');
    exit;
}

function getTasks() {
    $file = './js/datos.json';
    $content = file_get_contents($file);
    $tasks = json_decode($content, true);
    return $tasks;
}

function inputsAreValid($inputsArray){
    foreach ($inputsArray as $input) {
       if(!isset($input) || trim($input) === ""){
            return false;
       }
    }
    return true;
}