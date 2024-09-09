window.addEventListener('wheel', (e) => {
    console.log();
    if (e.deltaY < 0) {
        document.querySelector('.header').classList.add('header-visible')
    } else {
        document.querySelector('.header').classList.remove('header-visible')
    }
})