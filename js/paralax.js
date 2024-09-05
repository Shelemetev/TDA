window.addEventListener("scroll", (e) => {
    // console.log(document.querySelector('.delivery').getBoundingClientRect().y);
    let y = document.querySelector('.delivery').getBoundingClientRect().y

    if (y < 621 && y > 100) {
        document.querySelector('.delivery--img').style.transform = `translate(-50%,${y/2}px)`
    }
})

window.addEventListener("scroll", (e) => {
    //
    console.log(document.querySelector('.about').getBoundingClientRect().y);
    let y = document.querySelector('.about').getBoundingClientRect().y
    // document.querySelector('.about__back--1').style.transform = `translate(-50%,${y/2}px)`

    if (y < 721 && y > -100) {
        document.querySelector('.about__back--1').style.transform = `translate(-50%,-${(y / 2) + 50}px)`
        document.querySelector('.about__back--2').style.transform = `translate(-50%,${(y / 2) + 50}px)`
    }
})