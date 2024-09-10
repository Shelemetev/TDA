let inputsModal = document.querySelectorAll('.modal__form-input');
let checkboxModal = document.querySelector('.modal__form-checkbox')

const valuesModal = {}

inputsModal.forEach(input => {
    input.addEventListener('input', () => {
        inputsModal.forEach(input => {
            const {name ,value} = input
            valuesModal[name] = value
        })
        let checkboxValue = document.querySelector('.modal__form-checkbox').checked;
        let checkboxName = document.querySelector('.modal__form-checkbox').getAttribute('name')
        valuesModal[checkboxName] = checkboxValue
        let inputNames = Object.keys(valuesModal)

        let result = inputNames.map(item => {
            if (item === 'phone') {
                return valuesModal[item].length >= 15
            } else {
                return valuesModal[item] != ''
            }  
        })

        let step = 0

        for (let index = 0; index < result.length; index++) {
            if (result[index] === true) {
                step++
            } 
        }

        let complite = false

        if (step === result.length) {
            complite = true
        }
        
        if (complite) {
            document.querySelector('.modal__form-btn').removeAttribute('disabled')
        } else {
            document.querySelector('.modal__form-btn').setAttribute('disabled', "")
        }
    })
})

checkboxModal.addEventListener('input', () => {
    inputsModal.forEach(input => {
        const {name ,value} = input
        valuesModal[name] = value
    })
    let checkboxValue = document.querySelector('.modal__form-checkbox').checked;
    let checkboxName = document.querySelector('.modal__form-checkbox').getAttribute('name')
    valuesModal[checkboxName] = checkboxValue
    let inputNames = Object.keys(valuesModal)

    

    let result = inputNames.map(item => {
        if (item === 'phone') {
            return valuesModal[item].length >= 15
        } else {
            return valuesModal[item] != ''
        }   
    })

    let step = 0

    for (let index = 0; index < result.length; index++) {
        if (result[index] === true) {
            step++
        } 
    }

    let complite = false

    if (step === result.length) {
        complite = true
    } else {
        complite = false
    }
    
    if (complite) {
        document.querySelector('.modal__form-btn').removeAttribute('disabled')
    } else {
        document.querySelector('.modal__form-btn').setAttribute('disabled', "")
    }
})

// document.querySelector('')

