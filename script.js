const diceButton = document.getElementById('dice-btn');
const diceIcon = diceButton.querySelector('img');

diceButton.addEventListener('click', fetchAdvice);

function fetchAdvice() {
    diceIcon.classList.add('rotate');

    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceId = data.slip.id;
            const adviceText = data.slip.advice;

            document.getElementById('advice-id').textContent = adviceId;
            document.getElementById('advice-text').textContent = `"${adviceText}"`;

            diceIcon.classList.remove('rotate');
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            diceIcon.classList.remove('rotate');
        });
}