document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${currentTheme}-theme`);

    themeToggleBtn.addEventListener('click', () => {
        let newTheme = 'light';
        if (document.body.classList.contains('light-theme')) {
            newTheme = 'dark';
        }
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${newTheme}-theme`);
        localStorage.setItem('theme', newTheme);
    });
});
