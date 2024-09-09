
dataDelivery = {
    "allRegion": ["Хабаровск","Благовещенск"],
    "allCars" : ["СЕДАН","КРОССОВЕР"],
    "data" : {
        "Хабаровск" : {
            "СЕДАН": "20000",
            "КРОССОВЕР": "25000",
        },
        "Благовещенск" : {
            "СЕДАН": "25000",
            "КРОССОВЕР": "30000",
        },
        
    }
}

dataDelivery.allRegion.map(item => {
    document.querySelector('.delivery__form-select-menu--region').innerHTML += `
        <li><button type="button" data-name='region' data-value="${item}" class="dropdown-item dropdown-item--region">${item}</button></li>
    `
})

document.querySelectorAll('.delivery__form-select-menu > li >.dropdown-item--region').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.delivery__form-select--map > .delivery__btn-text').style.color = "#000000"
        document.querySelector('.delivery__form-select--map > .delivery__btn-text').innerHTML = item.dataset.value
        Click(item)
    })
})

dataDelivery.allCars.map(item => {
    document.querySelector('.delivery__form-select-menu--cars').innerHTML += `
        <li><button type="button" data-name='car' data-value="${item}" class="dropdown-item dropdown-item--cars">${item}</button></li>
    `
})

document.querySelectorAll('.delivery__form-select-menu > li > .dropdown-item--cars').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.delivery__form-select--auto > .delivery__btn-text').style.color = "#000000"
        document.querySelector('.delivery__form-select--auto > .delivery__btn-text').innerHTML = item.dataset.value
        Click(item)
    })
})

let valuesDelivery = {}

let Click = (elem) => {
    elem.dataset.name 
    elem.dataset.value
    valuesDelivery[elem.dataset.name] = elem.dataset.value
    console.log(valuesDelivery);
    let car = valuesDelivery.car
    let region = valuesDelivery.region
    if (valuesDelivery.car != undefined & valuesDelivery.region != undefined) {
        console.log('start');
        // document.querySelector('.delivery--count').innerHTML = dataDelivery.data[region][car]
        od.update(dataDelivery.data[region][car])
        
    }
}

od = new Odometer({
    el: document.querySelector('.delivery--count'),
    value: 0,
   
    // Остальные опции передаются в этом же объекте
    format: '( ddd)',
    // theme: 'digital'
});

let Scroll = (mainRegion, mainCar) => {
    if (mainRegion != null & mainCar != null) {

        const element = document.querySelector('.delivery');
        const s = 250; // Добавляется отступ для оптимизации прокрутки!
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - s;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    
        document.querySelector('.delivery__form-select--auto > .delivery__btn-text').innerHTML = mainCar
        document.querySelector('.delivery__form-select--map > .delivery__btn-text').innerHTML = mainRegion
        // document.querySelector('.delivery--count').innerHTML = dataDelivery.data[mainRegion][mainCar]
        od.update(dataDelivery.data[mainRegion][mainCar])
    }
}

let mainRegion = null
let mainCar = null

dataDelivery.allCars.map(item => {
    document.querySelector('.main__form-select--menu--auto').innerHTML += `
        <li><button type="button" data-name='car' data-value="${item}" class="dropdown-item dropdown-item--cars">${item}</button></li>
    `
})

dataDelivery.allRegion.map(item => {
    document.querySelector('.main__form-select--menu--region').innerHTML += `
        <li><button type="button" data-name='region' data-value="${item}" class="dropdown-item dropdown-item--region">${item}</button></li>
    `
})

document.querySelectorAll('.main__form-select--menu--auto > li > .dropdown-item--cars').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.main__form-select--auto > .main__form-select--button > .main__dropdown-text').innerHTML = item.dataset.value
        mainCar = item.dataset.value
    })
})

document.querySelectorAll('.main__form-select--menu--region > li > .dropdown-item--region').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.main__form-select--region > .main__form-select--button > .main__dropdown-text').innerHTML = item.dataset.value
        mainRegion = item.dataset.value
    })
})

document.querySelector('.main__form-button').addEventListener('click', () => {
    Scroll(mainRegion, mainCar)
})