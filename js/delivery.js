dataDelivery = {
    "allRegion": ["Хабаровск","Благовещенск"],
    "allCars" : ["СЕДАН","КРОССОВЕР"],
    "data" : {
        "Хабаровск" : {
            "СЕДАН": "20000",
            "КРОССОВЕ": "25000",
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

document.querySelectorAll('.dropdown-item--region').forEach(item => {
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

document.querySelectorAll('.dropdown-item--cars').forEach(item => {
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
    if (valuesDelivery.car != undefined && valuesDelivery.region != undefined) {
        // console.log();
        document.querySelector('.delivery--count').innerHTML = dataDelivery.data[region][car]
    }
}