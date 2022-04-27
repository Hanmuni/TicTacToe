let fields = [];
let currentSymbol = 'cross';
let gameOver = false;

function fillGame(id) {
    if (!fields[id] && !gameOver) {

        if (currentSymbol == 'cross') {
            currentSymbol = 'circle';
            document.getElementById('player-circle').classList.remove('inactive');
            document.getElementById('player-cross').classList.add('inactive');
        } else {
            currentSymbol = 'cross';
            document.getElementById('player-cross').classList.remove('inactive');
            document.getElementById('player-circle').classList.add('inactive');
        }
        fields[id] = currentSymbol;
        console.log(fields);
        draw();
        declareWinner();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function declareWinner() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[1];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(43deg) scaleX(1)';
        
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(138deg) scaleX(1)';
    }
    if (winner) {
        console.log('You win', winner);
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
            document.getElementById('restart-btn').classList.add('restart-btn');
        },1500);
    }
}

function restart() {
    fullReset = document.getElementById('restart-btn');
        location.reload();
}