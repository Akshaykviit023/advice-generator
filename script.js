document.getElementById('dice-btn').addEventListener('click', fetchAdvice);

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceId = data.slip.id;
            const adviceText = data.slip.advice;

            document.getElementById('advice-id').textContent = adviceId;
            document.getElementById('advice-text').textContent = `"${adviceText}"`;
        })
        .catch(error => console.error('Error fetching advice:', error));
}