document.getElementById('pagelet_pokes')
    .firstChild
    .firstChild
    .children[1]
    .appendChild(createPokeAllButton())
    .addEventListener('click', function () {
        clickAll(document.getElementById('pagelet_pokes')
                .getElementsByClassName('_42ft'));
    });