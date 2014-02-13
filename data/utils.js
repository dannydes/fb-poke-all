/**
 * Generates a click on elements.
 * @param elements Elements to be "clicked".
 */

function clickAll(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].click();
    }
}

/**
 * Creates a poke button in memory.
 * @return Poke button label.
 */

function createPokeAllButton() {
    let paButton = document.createElement('input');
    paButton.type = 'button';
    paButton.value = 'Poke All!';
    let label = document.createElement('label');
    label.classList.add('uiButton');
    label.appendChild(paButton);
    return label;
}