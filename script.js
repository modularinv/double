function handleOnInput(t, maxlen) {
    if (t.value.length > maxlen) {
        t.value = t.value.substr(0, maxlen)
    }
}

window.onload = () => {
    const button = document.querySelector('button')
    const input = document.querySelector('input')
    const label = document.querySelector('label')
    const buttonClickHandler = () => {
        label.innerText = 2 * input.value
        setTimeout(() => {
            label.innerText = "Double!"
        }, 2000)
    }
    button.onclick = buttonClickHandler
}