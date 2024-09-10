const dataJapan = [
    {
        'img' : "https://autocenter25.com/media/photos/efaf3278-22f2-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "115600",
        'rate' : "4,7"
    },
    {
        'img' : "https://autocenter25.com/media/photos/e34a7222-22f2-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'rate' : "4,7",
        'count' : "2115600"
    },
    {
        'img' : "https://autocenter25.com/media/photos/c421d714-22f2-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "8115600",
        'rate' : "4,7"
    },
    {
        'img' : "https://autocenter25.com/media/photos/b5f1c1cc-22f2-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "515600",
        'rate' : "4,7"
    },
    {
        'img' : "https://autocenter25.com/media/photos/86b94fc4-22f2-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "6215600",
        'rate' : "4,7"
    },
    {
        'img' : "https://autocenter25.com/media/photos/97853004-22f0-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "469600",
        'rate' : "4,7"
    },
    {
        'img' : "https://autocenter25.com/media/photos/967dad38-22f2-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "3345600",
        'rate' : "4,7"
    },
    {
        'img' : "https://autocenter25.com/media/photos/a66dc9a8-22f2-11ef-a698-31ca6a59cdec.webp",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "815600",
        'rate' : "4,7"
    }
]

dataJapan.map(item => {
    document.querySelector('.catalog__swiper-wrapper--japan').innerHTML += `
        <div class="swiper-slide catalog__slide catalog__slide--japan" data-count="${item.count}">
            <div class="catalog__slide-img--box">
                <img src="${item.img}" alt="" class="catalog__slide-img">
            </div>
            <div class="catalog__slide-content">
                <h3 class="catalog__slide-title">${item.title}</h3>
                <p class="catalog__slide-suptext">${item.suptext}</p>
                <p class="catalog__slide-count">${item.count.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</p>
                <button class="catalog__slide-btn">Оставить заявку</button>
            </div>
        </div>
    `
})

var swiper = new Swiper(".catalog__swiper--japan", {
    spaceBetween: 16,
    slidesPerView: 4,
    allowTouchMove:false,
    navigation: {
        nextEl: ".catalog__slide-button-next--japan",
        prevEl: ".catalog__slide-button-prev--japan",
    },
});

// let items = {...}

document.querySelectorAll('.catalog__btn--japan').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.catalog__btn--japan').forEach(btnRemove => {
            btnRemove.classList.remove('catalog__btn--active')
        })
        btn.classList.add('catalog__btn--active')
        document.querySelectorAll('.catalog__slide--japan').forEach(item => {
            item.classList.remove('catalog__slide--hidden')
            if(parseInt(btn.dataset.count) <= parseInt(item.dataset.count)) {
                item.classList.add('catalog__slide--hidden')
            }
            var swiper = new Swiper(".catalog__swiper--japan", {
                spaceBetween: 16,
                slidesPerView: 4,
                allowTouchMove:false,
                navigation: {
                    nextEl: ".catalog__slide-button-next--japan",
                    prevEl: ".catalog__slide-button-prev--japan",
                },
            });
        })
    })
})

