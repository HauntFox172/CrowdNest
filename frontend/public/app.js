const addingProjectWindow = document.getElementById(`add-proj-wnd`);
const addingProjectButton = document.getElementById(`add-proj-btn`);
const closeAddingProjectButton = document.getElementById(`close-add-proj-btn`);

// Show
addingProjectButton.onclick = () => addingProjectWindow.style.display = `block`;

// Hide
closeAddingProjectButton.onclick = () => addingProjectWindow.style.display = `none`;

// Loading projects
async function loadProjects() {
    // Backend request
    const response = await axios.get(`/backend/projects.php`);
    const projects = response.data;

    // Fetch json array and put it in html
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

document.getElementById(`add-proj-form`).addEventListener(`submit`, async (e) => {
    // Prevent submitting
    e.preventDefault();

    // Create form and transform it to js obj
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Backend request
    await axios.post(`/backend/projects.php`, data);

    // Closing window
    e.target.reset();
    addingProjectWindow.style.display = `none`;
    loadProjects();
});

loadProjects();
