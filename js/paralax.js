// window.addEventListener("scroll", (e) => {
//     let y = document.querySelector('.delivery').getBoundingClientRect().y

//     if (y < 621 && y > 100) {
//         document.querySelector('.delivery--img').style.transform = `translate(-50%,${(y/2) - 100}px)`
//     }
// })

window.addEventListener("scroll", (e) => {
    console.log(document.querySelector('.about').getBoundingClientRect().y -( document.querySelector('.delivery').offsetHeight / 2));
    let y = document.querySelector('.about').getBoundingClientRect().y -( document.querySelector('.delivery').offsetHeight / 2)

    if (y < 250 && y > -100) {
        document.querySelector('.about__back--1').style.transform = `translate(-50%,-${(y / 2)}px)`
        document.querySelector('.about__back--2').style.transform = `translate(-50%,${(y / 2) + 50}px)`
    }
})

window.addEventListener("DOMContentLoaded", (e) => {
    let y = document.querySelector('.about').getBoundingClientRect().y -( document.querySelector('.delivery').offsetHeight / 2)

    if (y > -100) { 
        document.querySelector('.about__back--1').style.transform = `translate(-50%,-${(y / 2)}px)`
        document.querySelector('.about__back--2').style.transform = `translate(-50%,${(y / 2)}px)`
    }
})


window.addEventListener("scroll", (e) => {
    let y = document.querySelector('.delivery').getBoundingClientRect().y -( document.querySelector('.delivery').offsetHeight / 2)

    if (y < 621 && y > -100) {
        document.querySelector('.delivery--img').style.transform = `translate(-50%,${(y/2)}px)`
    }
})

window.addEventListener("DOMContentLoaded", (e) => {
    let y = document.querySelector('.delivery').getBoundingClientRect().y -( document.querySelector('.delivery').offsetHeight / 2)
    if (y > -100) {
        document.querySelector('.delivery--img').style.transform = `translate(-50%,${(y/2)}px)`
    }
})