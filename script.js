const toggleMenuButton = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');

toggleMenuButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});
function handleResize() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');

    if (width <= 600) {
        container.style.width = '50%';
    } else if (width > 600 && width <= 700) {
        container.style.width = '75%';
    } else if (width > 700 && width <= 767) {
        container.style.width = '80%';
    } else if (width > 992 && width <= 1600) {
        container.style.width = '90%';
    } else {
        container.style.width = '100%';
    }
}
handleResize();
window.addEventListener('resize', handleResize);
