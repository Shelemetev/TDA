const dataChina = [
    {
        'img' : "https://s3-alpha-sig.figma.com/img/01bb/b7de/c8c21797769c9aa9c5fec8dc0ebad0da?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aYZk0A8~LPvuc-0XfL9f~THnXG8Y5ZhI7OR8Az9nLzSEAcqkmJjtNMU1hTc3utbHqJ3LaCfTZqDv7ATGhUOLDQE~D6fRUcxwv1Xnv~rMhvUg61QGkir-cTSrFlrqo-F91pNEgTsS93oOqSA5pk7kZe3y7bTFjn1x1PbmnkQyHZi5LVFeUEDnu6QbEUzETi3veK8iQkMNHHauIba7eJzW4JKUF7cMf~z~tbuJ~NtuKkHoDm6s5KVTFa0T1aPJfIq5oZypf3HDPN-GsAm9ggRqoq7QM7yj4suIGylugJqSw9wV-r6chMovMP7kAacmJ4yXpdbjOTP17y7NNTYLh8spKA__",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "115600",
        'rate' : "4,7"
    },
    {
        'img' : "https://s1.auto.drom.ru/photo/v2/tfAWk4y_JVwcncretZFtEXAGWpIuppEoQBj8OwHsm1cvu7HH-eZGB_jv0jWMVBgvgPWNzA2CyVON2Njo/gen272wb.jpg",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'rate' : "4,7",
        'count' : "2115600"
    },
    {
        'img' : "https://s1.auto.drom.ru/photo/v2/SGWve5XK96lCdE_qV0rg987JxrsWwnhJQUswBH--gjxFKdGG7PL8LszBuOuaimvtQN83n9hn2LlhvqMC/gen272wb.jpg",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "8115600",
        'rate' : "4,7"
    },
    {
        'img' : "https://s1.auto.drom.ru/photo/v2/I1LV1FBfArAM_NSEqmGmo-AIFHxh-qW2DnuIw0z97BJP5-l6QWZaEIg-754dHBb6SrfN6GNwRTfpqGoU/gen272wb.jpg",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "515600",
        'rate' : "4,7"
    },
    {
        'img' : "https://s1.auto.drom.ru/photo/v2/ZDks7fbxXOjQdAnfxznOu8E475RBge969Tui-T9K-O9S3BfcUVmWxQhRN7ySttPlru5w5BxHkMegtlio/gen272wb.jpg",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "6215600",
        'rate' : "4,7"
    },
    {
        'img' : "https://s1.auto.drom.ru/photo/v2/gsEuKhoWKwHQ_sVW2WsP0uc2cD_4HXhtXDjxjiX2OTkglwZI_cvHjcS1n4N1yssiFIdTQfv4yKllYaKY/gen272wb.jpg",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "469600",
        'rate' : "4,7"
    },
    {
        'img' : "https://s1.auto.drom.ru/photo/v2/Uo66JffAGCp4MQvChPAx28-vBqh9nax0wvwuEzFm4Q8dcd6taOyk6iPY2WkOQ2RDRps5Ic-dsUZlUyLH/gen272wb.jpg",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "3345600",
        'rate' : "4,7"
    },
    {
        'img' : "https://s1.auto.drom.ru/photo/v2/niKtiHOqO1pogl_x3gp_nczt5-Hf8pj56ND2WwEuo7wy1z3fXk3oOU96qDt1-tc5Z_5EZt_MaAYEmfCb/gen272wb.jpg",
        'title' : "Subaru LEVORG VN5",
        'suptext' : "2021 • Гибрит • 10 000 км",
        'count' : "815600",
        'rate' : "4,7"
    }
]

dataChina.map(item => {
    document.querySelector('.catalog__swiper-wrapper--china').innerHTML += `
        <div class="swiper-slide catalog__slide catalog__slide--china" data-count="${item.count}">
            <div class="catalog__slide-img--box">
                <img src="${item.img}" alt="" class="catalog__slide-img">
            </div>
            <h3 class="catalog__slide-title">${item.title}</h3>
            <p class="catalog__slide-suptext">${item.suptext}</p>
            <p class="catalog__slide-count">${item.count.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</p>
            <button class="catalog__slide-btn">Оставить заявку</button>
        </div>
    `
})

var swiper = new Swiper(".catalog__swiper--china", {
    spaceBetween: 16,
    slidesPerView: 4,
    allowTouchMove:false,
    navigation: {
        nextEl: ".catalog__slide-button-next--china",
        prevEl: ".catalog__slide-button-prev--china",
    },
});

// let items = {...}

document.querySelectorAll('.catalog__btn--china').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.catalog__btn--china').forEach(btnRemove => {
            btnRemove.classList.remove('catalog__btn--active')
        })
        btn.classList.add('catalog__btn--active')
        document.querySelectorAll('.catalog__slide--china').forEach(item => {
            item.classList.remove('catalog__slide--hidden')
            if(parseInt(btn.dataset.count) <= parseInt(item.dataset.count)) {
                item.classList.add('catalog__slide--hidden')
            }
            var swiper = new Swiper(".catalog__swiper--china", {
                spaceBetween: 16,
                slidesPerView: 4,
                allowTouchMove:false,
                navigation: {
                    nextEl: ".catalog__slide-button-next--china",
                    prevEl: ".catalog__slide-button-prev--china",
                },
            });
        })
    })
})

