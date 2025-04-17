// Render subjects
function renderSubjects(subjects) {
    const container = document.getElementById('subjectView');
    container.innerHTML = subjects.map(subject => `
        <div class="card mb-3">
            <div class="card-header">${subject}</div>
            <div class="card-body">
                <button onclick="loadChapters('${subject}')" 
                        class="btn btn-primary">
                    View Chapters
                </button>
            </div>
        </div>
    `).join('');
}

// Load chapters for a subject
function loadChapters(subject) {
    // This would come from your database
    const chapters = {
        "Physics": ["Mechanics", "Electromagnetism", "Optics"],
        "Chemistry": ["Atomic Structure", "Chemical Bonding", "Thermodynamics"],
        // Add more subjects/chapters
    };
    
    const container = document.getElementById('subjectView');
    container.innerHTML = `
        <h3>${subject}</h3>
        <ul class="list-group">
            ${chapters[subject].map(chapter => `
                <li class="list-group-item">
                    ${chapter}
                    <button onclick="loadTopic('${subject}', '${chapter}')" 
                            class="btn btn-sm btn-success float-end">
                        Study
                    </button>
                </li>
            `).join('')}
        </ul>
    `;
}
