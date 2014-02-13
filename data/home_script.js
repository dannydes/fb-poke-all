document.getElementById('poke_reminders_dialog')
    .getElementsByClassName('lfloat')[0]
    .appendChild(createPokeAllButton())
    .addEventListener('click', function () {
        clickAll(document.getElementsByClassName('fbRemindersPokeBack'));
    });