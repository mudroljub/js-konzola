document.body.addEventListener('keydown', e => {
    const inputs = document.querySelectorAll('.unos')
    const input = inputs[inputs.length - 1]

    if (e.keyCode === 13) {
        input.setAttribute('readonly', '')

        const result = document.createElement('div')
        try {
            result.innerHTML = eval(input.value)
        } catch (e) {
            result.innerHTML = e
            result.classList.add('error')
        }
        input.parentNode.parentNode.insertBefore(result, input.parentNode.nextSibling)

        const newInput = document.createElement('div')
        newInput.innerHTML = `<span class="blink">> </span><input class="unos">`
        result.parentNode.insertBefore(newInput, result.nextSibling)
        newInput.querySelector('.unos').focus()
    }
})