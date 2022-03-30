const box = document.querySelectorAll('.box');
document.querySelector('nav').addEventListener("click", (e) => {
    if (e.target.tagName !== 'LI') return false;
    let filter = e.target.dataset.menu;

    box.forEach(el => {
        el.classList.remove('hidden');
        if (!el.classList.contains(filter) && filter !== 'all') {
            el.classList.add('hidden');
        }
    });
});