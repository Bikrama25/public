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
// Initialize sample data (run once)
async function initializeFirestore() {
  const userId = auth.currentUser.uid;
  
  // 1. Create user document
  await db.collection("users").doc(userId).set({
    email: auth.currentUser.email,
    subjects: {
      Physics: { progress: 0, lastRevised: null },
      Chemistry: { progress: 0, lastRevised: null },
      Maths: { progress: 0, lastRevised: null },
      Biology: { progress: 0, lastRevised: null }
    }
  });

  // 2. Add sample Physics topic
  await db.collection("topics").add({
    subject: "Physics",
    chapter: "Electromagnetism",
    title: "Faraday's Law",
    content: "NCERT theory content goes here...",
    problems: [],
    mindmapUrl: ""
  });
}

// Call this once during development
// initializeFirestore();  // Uncomment to run, then comment again
