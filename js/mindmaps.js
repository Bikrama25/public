function loadMindMap(topicId) {
    // Reference to storage
    const mapRef = storage.ref(`mindmaps/${topicId}.pdf`);
    
    // Get download URL
    mapRef.getDownloadURL().then(url => {
        document.getElementById('mindmap-viewer').innerHTML = `
            <embed src="${url}" type="application/pdf" width="100%" height="600px">
        `;
    });
}

function uploadMindMap(file, topicId) {
    const uploadTask = storage.ref(`mindmaps/${topicId}`).put(file);
    
    uploadTask.on('state_changed', 
        (snapshot) => {
            // Progress tracking
        }, 
        (error) => {
            console.error("Upload failed:", error);
        }, 
        () => {
            alert("Mind map uploaded successfully!");
            loadMindMap(topicId);
        }
    );
}
