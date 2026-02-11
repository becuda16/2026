function toggleResume() {
    var content = document.getElementById('hiddenContent');
    var button = document.getElementById('toggleBtn');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        button.textContent = 'Esconder Currículo';
    } else {
        content.classList.add('hidden');
        button.textContent = 'Mostrar Currículo';
    }
}
