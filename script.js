function toggleFolder(element) {
    const folder = element.nextElementSibling;
    folder.classList.toggle('open');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
}

function loadFile(url) {
    const iframe = document.getElementById('contentFrame');
    iframe.src = url;
}