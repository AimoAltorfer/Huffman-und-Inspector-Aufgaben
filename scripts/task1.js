document.getElementById('checkBtn').addEventListener('click', () => {
    const guess = document.getElementById('userGuess').value.trim();
    const correctCodes = [
        "1100101001001111110",
        "1110101001001101100",
        "1000111101101011010",
        "1010111101101001000",
        "0101000010010110111",
        "0111000010010100101",
        "0001010110110010011",
        "0011010110110000001"];
    const result = document.getElementById('result');
    if(correctCodes.includes(guess)){
        result.innerHTML = 'Richtig! Du bist bereit für die nächste Aufgabe → <button id="nextBtn">Weiter</button>';
        document.getElementById('nextBtn').addEventListener('click', () => {
            window.location.href = 'task2.html';
        });
    } else {
        result.textContent = "Das ist leider nicht korrekt. Versuche es noch einmal.";
    }
});