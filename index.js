const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const weightGuide = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)) {
        const p = document.createElement('p')
        p.appendChild(document.createTextNode(`Please enter a valid height ${height}`))
        results.appendChild(p)
        // results.innerHTML = `Please enter a valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        const p = document.createElement('p')
        p.appendChild(document.createTextNode(`Enter a valid weight ${weight}`))
        results.appendChild(p)
        // results.innerHTML = `Enter a valid weight ${weight}`

    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        const r = document.createElement('p')
        r.appendChild(document.createTextNode(`${bmi}`))
        results.appendChild(r)
        // results.innerHTML = `${bmi}`

        const p = document.createElement('p')
        if(bmi < 18.6) {
            p.appendChild(document.createTextNode(`The person is under weight`))
        } else if(bmi > 24.9) {
            p.appendChild(document.createTextNode(`The person is over weight`))
        } else {
            p.appendChild(document.createTextNode(`The person is normal ${bmi}`))
        }
        weightGuide.appendChild(p)
        
    }

})