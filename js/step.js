let button = document.querySelector('.test__button')
let sectionProgress = document.querySelectorAll('.stages__progress-section')

let progressElement = [...sectionProgress]

let step = 0

let Animation = (items,nextEl,descriotionEl) => {
    let elems = [...items]

    for (let index = 0; index < elems.length; index++) {
        setTimeout(() => {
            console.log();
            elems[index].classList.add('test')
        }, (index * 200))
    }

    console.log(descriotionEl);

    setTimeout(() => {
        nextEl.classList.add('stages__progress-section--active')
        descriotionEl.classList.remove('stages__description-section--disable')
    }, (elems.length * 200))
    
}

button.addEventListener('click', () => {
    
    let sectionCount = parseInt(progressElement[step].dataset.section)

    console.log(sectionCount);
    Animation(document.querySelectorAll(`.stages__progress-section--${sectionCount} > .stages__progress-dotes > .stages__progress-dote`),
    document.querySelector(`.stages__progress-section--${(sectionCount + 1)}`),
    document.querySelector(`.stages__description-section--${(sectionCount + 1)}`)
    )

    step++
})