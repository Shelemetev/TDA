let inputs = document.querySelectorAll('.contacts__form-input');
let checkbox = document.querySelector('.contacts__form-checkbox')

const values = {}

inputs.forEach(input => {
    input.addEventListener('input', () => {
        inputs.forEach(input => {
            const {name ,value} = input
            values[name] = value
        })
        let checkboxValue = document.querySelector('.contacts__form-checkbox').checked;
        let checkboxName = document.querySelector('.contacts__form-checkbox').getAttribute('name')
        values[checkboxName] = checkboxValue
        let inputNames = Object.keys(values)

        let result = inputNames.map(item => {
            return values[item] != ''
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
            document.querySelector('.contacts__form-btn').removeAttribute('disabled')
        } else {
            document.querySelector('.contacts__form-btn').setAttribute('disabled', "")
        }
    })
})

checkbox.addEventListener('input', () => {
    inputs.forEach(input => {
        const {name ,value} = input
        values[name] = value
    })
    let checkboxValue = document.querySelector('.contacts__form-checkbox').checked;
    let checkboxName = document.querySelector('.contacts__form-checkbox').getAttribute('name')
    values[checkboxName] = checkboxValue
    let inputNames = Object.keys(values)

    let result = inputNames.map(item => {
        return values[item] != ''
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
        document.querySelector('.contacts__form-btn').removeAttribute('disabled')
    } else {
        document.querySelector('.contacts__form-btn').setAttribute('disabled', "")
    }
})

// document.querySelector('')

