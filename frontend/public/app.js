async function loadProjects() {
    const response = await axios.get(`/backend/projects.php`);
    const projects = response.data;

    const container = document.getElementById(`projects`);
    container.innerHTML = projects.map(project =>
        <div class="project">
            <img></img>
            <div class="prj-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <button class="like-btn">
                    ♥
                </button>
            </div>
        </div>
    ).join('');
}

