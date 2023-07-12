function handleOnInput(t, maxlen) {
    if (t.value.length > maxlen) {
        t.value = t.value.substr(0, maxlen)
    }
}

const button = document.querySelector('button')

const buttonClickHandler = () => {
    alert('Button clicked!');
};

button.onclick = buttonClickHandler;