// sidebar-navigation.js

document.addEventListener('DOMContentLoaded', function () {
    const mainContainer = document.querySelector('.main-container');
    const navButtons = document.querySelectorAll('.sidebar-navigation-btn a');

    // Use global content variables from separate files
    const content = {
        journey: window.journeyContent,
        puzzle: window.puzzleContent,
        'daily-challenges': window.dailyChallengesContent,
        profile: window.profileContent
    };

    function setActive(button) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    function updateContent(section) {
        mainContainer.innerHTML = content[section] || '';
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const id = btn.id.replace('-btn', '');
            setActive(btn);
            updateContent(id);
        });
    });

    // Load Journey by default
    updateContent('journey');
});
