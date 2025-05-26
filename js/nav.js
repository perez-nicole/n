/* For hamburger menu */
document.addEventListener('DOMContentLoaded', () => {
    const menu      = document.getElementById('site-menu');
    const openBtn   = document.getElementById('menu-toggle');
    const closeBtn  = menu.querySelector('.menu-close');
    const pageBody  = document.body;

    function openMenu(){
        menu.classList.add('open');
        pageBody.style.overflow = 'hidden';      // prevent page behind from scrolling
        closeBtn.focus();
    }

    function closeMenu(){
        menu.classList.remove('open');
        pageBody.style.overflow = '';
        openBtn.focus();
    }

    openBtn.addEventListener('click',  openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // close with Esc
    window.addEventListener('keydown', e=>{
        if(e.key === 'Escape' && menu.classList.contains('open')) closeMenu();
    });
    });