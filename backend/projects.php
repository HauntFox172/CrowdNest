<?php
header('Content-Type: application/json');
$file = '../data/projects.json';

// GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo file_get_contents($file);
}

// SET
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $projects = json_decode(file_get_contents($file), true);
    
    $newProject = [
        'id' => uniqid(),
        'title' => htmlspecialchars($data['title']),
        'description' => htmlspecialchars($data['description']),
        'likes' => 0
    ];
    
    $projects[] = $newProject;
    file_put_contents($file, json_encode($projects));
    echo json_encode($newProject);
}