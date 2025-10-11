// Sidebar collapse/expand logic

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar-container');
    const main = document.querySelector('.main-container');
    let collapsed = false;

    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'sidebar-toggle-btn';
    toggleBtn.title = 'Collapse/Expand Sidebar';

    // Use a div for the arrow head
    const arrowDiv = document.createElement('div');
    arrowDiv.className = 'arrow-head';
    toggleBtn.appendChild(arrowDiv);
    sidebar.insertBefore(toggleBtn, sidebar.firstChild);

    toggleBtn.addEventListener('click', function () {
        collapsed = !collapsed;
        if (collapsed) {
            sidebar.classList.add('collapsed');
            main.classList.add('sidebar-collapsed');
        } else {
            sidebar.classList.remove('collapsed');
            main.classList.remove('sidebar-collapsed');
        }
    });
});
