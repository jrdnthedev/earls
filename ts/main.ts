let isToggle = false;
const element = document.getElementById("hamburger_toggle");
const close_btn = document.getElementById("close_btn");
element?.addEventListener("click", toggle);
close_btn?.addEventListener("click", toggle);

function toggle() {
    isToggle = !isToggle;
    const body = document.getElementById('body');
    const nav = document.getElementById('main_nav');

    if(isToggle) {
        body?.classList.add('scroll-lock');
        nav?.classList.add('active');
    } else {
        body?.classList.remove('scroll-lock');
        nav?.classList.remove('active');
    }

}