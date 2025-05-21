<?php
header('Content-Type: application/json');
$file = '../data/projects.json';

$projectId = $_POST['id'];
$projects = json_decode(file_get_contents($file), true);

foreach ($projects as &$project) {
    if ($project['id'] === $projectId) {
        $project['likes']++;
        break;
    }
}

file_put_contents($file, json_encode($projects));
echo json_encode(['success' => true]);