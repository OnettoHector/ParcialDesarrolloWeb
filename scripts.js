function aplicarTemaGuardado() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function manejarClickDelTema() {
    const toggleButton = document.getElementById('nocheHeader');
    const moonIcon = document.getElementById('moon-icon');

    if (toggleButton && moonIcon) {
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');

            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
}

aplicarTemaGuardado();

document.addEventListener('DOMContentLoaded', () => {
    manejarClickDelTema();
});