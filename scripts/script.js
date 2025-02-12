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
const readTextBtn = document.getElementById('read-text-btn');

readTextBtn.addEventListener('click', () => {
    const title = document.querySelector('h1').innerText;
    const subtitles = Array.from(document.querySelectorAll('h2')).map(subtitle => subtitle.innerText);
    const paragraphs = Array.from(document.querySelectorAll('p')).map(paragraph => paragraph.innerText);

    const textToRead = [title, ...subtitles, ...paragraphs].join('. ');

    const speech = new SpeechSynthesisUtterance(textToRead);
    window.speechSynthesis.speak(speech);
});