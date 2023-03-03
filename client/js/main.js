// create a new style element to hold our piece classes
const style = document.createElement('style');
var selectedPiece = null;
document.head.appendChild(style);

// define the positions of the pieces in the image
const piecePositions = {
white: {
    king: '0px 0px',
    queen: '300px 0px',
    rook: '120px 0px',
    bishop: '240px 0px',
    knight: '180px 0px',
    pawn: '60px 0px'
},
black: {
    king: '0px 60px',
    queen: '300px 60px',
    rook: '120px 60px',
    bishop: '240px 60px',
    knight: '180px 60px',
    pawn: '60px 60px'
}
};

// generate classes for each piece
for (const color in piecePositions) {
    for (const piece in piecePositions[color]) {
        const className = `.${color}.${piece}`;
        const position = piecePositions[color][piece];
        style.innerHTML += `${className} {
        background-image: url('images/chess.png');
        background-size: 360px 120px;
        background-position: ${position};
        width: 60px;
        height: 60px;
        background-color: transparent;
        }\n`;
    }
}

// create the chessboard
const board = document.getElementById('board');
for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
        const square = document.createElement('div');
        square.className = ((row + col) % 2 === 0) ? 'square white' : 'square black';
        board.appendChild(square);
        if (row < 2 || row > 5) {
        const color = row < 2 ? 'black' : 'white';
        let piece;
        if (row === 1 || row === 6) {
            piece = 'pawn';
        } else if (col === 0 || col === 7) {
            piece = 'rook';
        } else if (col === 1 || col === 6) {
            piece = 'knight';
        } else if (col === 2 || col === 5) {
            piece = 'bishop';
        } else if (col === 3) {
            piece = 'queen';
        } else {
            piece = 'king';
        }
        const pieceDiv = document.createElement('div');
        pieceDiv.addEventListener('click', function() {
            if(pieceDiv.style.backgroundColor == 'yellow') {
                pieceDiv.style.backgroundColor = 'transparent';
                selectedPiece = null;
            }
            else if(selectedPiece != null) {
                selectedPiece.style.backgroundColor = "transparent";
                pieceDiv.style.backgroundColor = 'yellow';
                selectedPiece = this;
                
            }
            else {
                pieceDiv.style.backgroundColor = 'yellow';
                selectedPiece = this;
            }
        });
        pieceDiv.className = `${color} ${piece} piece`;
        square.appendChild(pieceDiv);
        }
    }
}
