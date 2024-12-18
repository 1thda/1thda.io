// Function to scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to open a project modal
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    const projectTitle = document.getElementById('project-title');
    const projectDescription = document.getElementById('project-description');

    // Update modal content based on project ID
    switch (projectId) {
        case 'project-1':
            projectTitle.textContent = 'Portfolio Website';
            projectDescription.textContent = 'A responsive website to showcase my skills and projects.';
            break;
        case 'project-2':
            projectTitle.textContent = 'Chatbot Application';
            projectDescription.textContent = 'Built a chatbot using Python and Flask.';
            break;
        default:
            projectTitle.textContent = 'Project Not Found';
            projectDescription.textContent = 'Details about this project are unavailable.';
    }

    // Show the modal
    modal.style.display = 'block';

    // Add event listener to close the modal
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside the content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Add event listener to the contact form
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const playerName = formData.get('name');
    const playerEmail = formData.get('email');
    const playerMessage = formData.get('message');

    // Simple form validation (Optional)
    if (!playerName || !playerEmail || !playerMessage) {
        alert('Please fill in all the fields before submitting.');
        return;
    }

    // Display a success message
    alert(`Thank you for reaching out, ${playerName}! I'll get back to you soon.`);

    // Reset the form
    e.target.reset();
});

// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1); // Remove the '#' from href
        scrollToSection(sectionId);
    });
});

// Add fade-in animations on page load
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }, 200 * index); // Stagger animations
    });
});

// Initialize fade-in animation for sections
document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
