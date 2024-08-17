let spinner = document.getElementById('spinner');
let timer = document.getElementById('timer');
let resetBtn = document.getElementById('resetBtn');
let submitBtn = document.getElementById("submitBtn");
let quoteInput = document.getElementById('quoteInput');
let quoteDisplay = document.getElementById('quoteDisplay');
let resultEl = document.getElementById('result');

let url = "https://apis.ccbp.in/random-quote";
let stopId;
let start = 0;
let inputQuote;

function startTimer() {
    stopId = setInterval(function() {
        start++;
        timer.textContent = start;
    }, 1000);
}

function stopTimer() {
    clearInterval(stopId);
    timer.textContent = 0;
    start = 0;
}

function displayResult(res) {
    spinner.classList.toggle("d-none");
    console.log(res.content);
    inputQuote = res.content;
    quoteDisplay.textContent = inputQuote;
    startTimer();
}

function getQuote() {
    stopTimer();
    quoteDisplay.textContent = "";
    spinner.classList.toggle("d-none");
    resultEl.textContent = "";
    fetch(url).then(res => res.json()).then(data => displayResult(data));
}

function checkResult() {
    let result = quoteInput.value;
    console.log(result);
    console.log(inputQuote);
    if (inputQuote === result) {
        stopTimer();
        resultEl.textContent = `You typed in ${timer.textContent} seconds`;
    } else {
        resultEl.textContent = `You typed incorrect Sentence`;
    }
}
getQuote();
resetBtn.addEventListener('click', getQuote);
submitBtn.addEventListener('click', checkResult);