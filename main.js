const matchList = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"]
]

const result = [1, 0, 1]

const generateWinner = () => {
    let matchWinner = [];
    let winner, freqMu = 0, freqCity = 0, freqMunchen = 0;

    for (let i = 0; i < matchList.length; i++) {
        matchWinner.push(matchList[i][result[i]]);
    }

    for (let i = 0; i < matchWinner.length; i++) {
        if (matchWinner[i] === "mu") {
            freqMu++;
        } else if (matchWinner[i] === "city") {
            freqCity++;
        } else if (matchWinner[i] === "munchen") {
            freqMunchen++;
        }
    }

    if (freqMu > freqCity && freqMu > freqMunchen) {
        winner = "Mu";
    } else if (freqCity > freqMu && freqCity > freqMunchen) {
        winner = "City";
    } else if (freqMunchen > freqMu && freqMunchen > freqCity) {
        winner = "Munchen";
    }

    return winner;
}

const winner = generateWinner();
console.log(winner);