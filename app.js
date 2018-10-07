let sqr = document.querySelectorAll('.Square')
let winBox = document.querySelector('.Win')
var numClick = 1
gameWon = false


sqr.forEach(function (sqr) {
    sqr.addEventListener("click", clicked)

});

function clicked(e) {
    if (e.target.innerHTML == '' && gameWon == false) {
        if (numClick % 2 != 0) {
            e.target.textContent = 'X';
            numClick += 1;
        } else if (numClick % 2 == 0) {
            e.target.textContent = 'O';
            numClick += 1;
        }
    } else if (gameWon == true) {
        sqr[0].textContent = '';
        sqr[1].textContent = '';
        sqr[2].textContent = '';
        sqr[3].textContent = '';
        sqr[4].textContent = '';
        sqr[5].textContent = '';
        sqr[6].textContent = '';
        sqr[7].textContent = '';
        sqr[8].textContent = '';
        winBox.textContent = '';
        gameWon = false;
        numClick = 1;
    }
    if (numClick > 5 && gameWon == false) {
        arrayRowTop = [sqr[0].textContent, sqr[1].textContent, sqr[2].textContent];
        arrayRowMiddle = [sqr[3].textContent, sqr[4].textContent, sqr[5].textContent];
        arrayRowBottom = [sqr[6].textContent, sqr[7].textContent, sqr[8].textContent];
        arrayColumnLeft = [sqr[0].textContent, sqr[3].textContent, sqr[6].textContent];
        arrayColumnMiddle = [sqr[1].textContent, sqr[4].textContent, sqr[7].textContent];
        arrayColumnRight = [sqr[2].textContent, sqr[5].textContent, sqr[8].textContent];
        arrayLeftDiagonal = [sqr[0].textContent, sqr[4].textContent, sqr[8].textContent];
        arrayRightDiagonal = [sqr[6].textContent, sqr[4].textContent, sqr[2].textContent];
        if(arrayRowTop[0] == ["X"] && arrayRowTop[1] == ["X"] && arrayRowTop[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        } else if(arrayRowTop[0] == ["O"] && arrayRowTop[1] == ["O"] && arrayRowTop[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        } else if(arrayRowMiddle[0] == ["X"] && arrayRowMiddle[1] == ["X"] && arrayRowMiddle[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        }  else if(arrayRowMiddle[0] == ["O"] && arrayRowMiddle[1] == ["O"] && arrayRowMiddle[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        }  else if(arrayRowBottom[0] == ["X"] && arrayRowBottom[1] == ["X"] && arrayRowBottom[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        } else if(arrayRowBottom[0] == ["O"] && arrayRowBottom[1] == ["O"] && arrayRowBottom[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        } else if(arrayColumnLeft[0] == ["X"] && arrayColumnLeft[1] == ["X"] && arrayColumnLeft[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        } else if(arrayColumnLeft[0] == ["O"] && arrayColumnLeft[1] == ["O"] && arrayColumnLeft[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        } else if(arrayColumnMiddle[0] == ["X"] && arrayColumnMiddle[1] == ["X"] && arrayColumnMiddle[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        } else if(arrayColumnMiddle[0] == ["O"] && arrayColumnMiddle[1] == ["O"] && arrayColumnMiddle[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        } else if(arrayColumnRight[0] == ["X"] && arrayColumnRight[1] == ["X"] && arrayColumnRight[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        } else if(arrayColumnRight[0] == ["O"] && arrayColumnRight[1] == ["O"] && arrayColumnRight[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        } else if(arrayLeftDiagonal[0] == ["X"] && arrayLeftDiagonal[1] == ["X"] && arrayLeftDiagonal[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        } else if(arrayLeftDiagonal[0] == ["O"] && arrayLeftDiagonal[1] == ["O"] && arrayLeftDiagonal[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        }  else if(arrayRightDiagonal[0] == ["X"] && arrayRightDiagonal[1] == ["X"] && arrayRightDiagonal[2] == ["X"]) {
            winBox.textContent = "X wins!";
            gameWon = true;
        }  else if(arrayRightDiagonal[0] == ["O"] && arrayRightDiagonal[1] == ["O"] && arrayRightDiagonal[2] == ["O"]) {
            winBox.textContent = "O wins!";
            gameWon = true;
        } else if(numClick == 10 && gameWon == false) {
            gameWon = true
            winBox.textContent = "Draw"
        }
        
    }

}

