
	var isPlayerOneTurn = true; // player one is RED
	var red = '<img src="./images/redT.gif" height="75" width="75" alt="No image found" />';
	var blue = '<img src="./images/blueT.gif" height="75" width="75" alt="No image found" />';
	var empty = '<img src="./images/emptyT.gif" height="75" width="75" alt="No image found" />';
	var numRows = 6; // 0-7
	var numCols = 8; // 0-5
	
	// 0-7 columns to store the status {empty, red, blue} of each slot
	var colZero = new Array();
	var colOne = new Array();
	var colTwo = new Array();
	var colThree = new Array();
	var colFour = new Array();
	var colFive = new Array();
	var colSix = new Array();
	var colSeven = new Array();
		
	// initialize column arrays
	for(row = 0; row < numCols; row++) {
		colZero[row] = "empty";
		colOne[row] = "empty";
		colTwo[row] = "empty";
		colThree[row] = "empty";
		colFour[row] = "empty";
		colFive[row] = "empty";
		colSix[row] = "empty";
		colSeven[row] = "empty";
	}
	
	function main(colNum) {
		if(!colIsFull(colNum)) {
			index = -1;
			switch(colNum) {
				case 0:
					index = addColZero();
					break;
				case 1:
					index = addColOne();
					break;
				case 2:
					index = addColTwo();
					break;
				case 3:
					index = addColThree();
					break;
				case 4:
					index = addColFour();
					break;
				case 5:
					index = addColFive();
					break;
				case 6:
					index = addColSix();
					break;
				case 7:
					index = addColSeven();
					break;
				default:
					alert("Switch statement broken for main: " + colNum + " index: " + index);
					break;
			}
			if(checkVictory(colNum, index)) {
				if(isPlayerOneTurn) alert("Player one has won the game!");
				else alert("Player two has won the game!");
				this.resetGame();
			}
			else {
				isPlayerOneTurn = !isPlayerOneTurn;
				if(isPlayerOneTurn) {
					turnText = "<font color='red'>First player's turn</font>";
					document.getElementById("columns").style.cursor = "url(./images/redCT.gif), auto";
				}
				else {
					turnText = "<font color='blue'>Second player's turn</font>";
					document.getElementById("columns").style.cursor = "url(./images/blueCT.gif), auto";
				}
				document.getElementById('currentTurn').innerHTML = turnText;
			}
		}
		else alert("That column is full!");
	}
	
	function colIsFull(colNum) {
		if(colNum == 0 && colZeroIsFull()) return true;
		if(colNum == 1 && colOneIsFull()) return true;
		if(colNum == 2 && colTwoIsFull()) return true;
		if(colNum == 3 && colThreeIsFull()) return true;
		if(colNum == 4 && colFourIsFull()) return true;
		if(colNum == 5 && colFiveIsFull()) return true;
		if(colNum == 6 && colSixIsFull()) return true;
		if(colNum == 7 && colSevenIsFull()) return true;
		return false;
	}
	
	function colZeroIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colZero[row] == "empty") return false;
		}
		return true;
	}
	
	function colOneIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colOne[row] == "empty") return false;
		}
		return true;
	}
	
	function colTwoIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colTwo[row] == "empty") return false;
		}
		return true;
	}
	
	function colThreeIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colThree[row] == "empty") return false;
		}
		return true;
	}
	
	function colFourIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colFour[row] == "empty") return false;
		}
		return true;
	}
	
	function colFiveIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colFive[row] == "empty") return false;
		}
		return true;
	}
	
	function colSixIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colSix[row] == "empty") return false;
		}
		return true;
	}
	
	function colSevenIsFull() {
		for(row = 0; row < numRows; row++) {
			if(colSeven[row] == "empty") return false;
		}
		return true;
	}
	
	function addColZero() {
		for(index = 5; index >= 0; index--) {
			if(colZero[index] == "empty") {
				positionDivId = "x0y" + index;
				if(isPlayerOneTurn) {
					colZero[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colZero[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function addColOne() {
		for(index = 5; index >= 0; index--) {
			if(colOne[index] == "empty") {
				positionDivId = "x1y" + index;
				if(isPlayerOneTurn) {
					colOne[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colOne[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function addColTwo() {
		for(index = 5; index >= 0; index--) {
			if(colTwo[index] == "empty") {
				positionDivId = "x2y" + index;
				if(isPlayerOneTurn) {
					colTwo[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colTwo[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function addColThree() {
		for(index = 5; index >= 0; index--) {
			if(colThree[index] == "empty") {
				positionDivId = "x3y" + index;
				if(isPlayerOneTurn) {
					colThree[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colThree[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function addColFour() {
		for(index = 5; index >= 0; index--) {
			if(colFour[index] == "empty") {
				positionDivId = "x4y" + index;
				if(isPlayerOneTurn) {
					colFour[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colFour[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function addColFive() {
		for(index = 5; index >= 0; index--) {
			if(colFive[index] == "empty") {
				positionDivId = "x5y" + index;
				if(isPlayerOneTurn) {
					colFive[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colFive[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function addColSix() {
		for(index = 5; index >= 0; index--) {
			if(colSix[index] == "empty") {
				positionDivId = "x6y" + index;
				if(isPlayerOneTurn) {
					colSix[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colSix[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function addColSeven() {
		for(index = 5; index >= 0; index--) {
			if(colSeven[index] == "empty") {
				positionDivId = "x7y" + index;
				//alert("posdivid " + positionDivId);
				if(isPlayerOneTurn) {
					colSeven[index] = "red"
					document.getElementById(positionDivId).innerHTML = red;
				}
				else {
					colSeven[index] = "blue";
					document.getElementById(positionDivId).innerHTML = blue;
				}
				return index;
			}
		}
	}
	
	function resetGame() {
		this.resetBackendBoard();
		this.resetFrontendBoard();
		isPlayerOneTurn = true;
	}
	
	function resetBackendBoard() {
		for(row = 0; row < numRows; row++) { // 6 rows for 8 columns
			colZero[row] = "empty";
			colOne[row] = "empty";
			colTwo[row] = "empty";
			colThree[row] = "empty";
			colFour[row] = "empty";
			colFive[row] = "empty";
			colSix[row] = "empty";
			colSeven[row] = "empty";
		}
	}
	
	function resetFrontendBoard() {
		for(currentCol = 0; currentCol < numCols; currentCol++) {
			for(currentRow = 0; currentRow < numRows; currentRow++) {
				currentDivId = "x" + currentCol + "y" + currentRow;
				document.getElementById(currentDivId).innerHTML = empty;
				document.getElementById("columns").style.cursor = "url(./images/redST.gif), auto";
				document.getElementById('currentTurn').innerHTML = "<font color='red'>First player's turn</font>";
			}				
		}
	}
	
	/*
	 * Returns correct column array that currently needs to be accessed
	 */
	function getColArr(colNum) {
		switch(colNum) {
			case 0:
				return colZero;
				break;
			case 1:
				return colOne;
				break;
			case 2:
				return colTwo;
				break;
			case 3:
				return colThree;
				break;
			case 4:
				return colFour;
				break;
			case 5:
				return colFive;
				break;
			case 6:
				return colSix;
				break;
			case 7:
				return colSeven;
				break;
			default:
				alert("Switch statement error in checkVertical for column: " + colNum + " index: " + index);
				break;
		}
	}
	
	/*
	 * Returns current color that the victory checker should be searching for
	 */
	function getCurrentColor() {
		if(isPlayerOneTurn) color = "red";
		else color = "blue";
		return color;
	}
	

	/*
	 * Checks vertical component for victory (defined by 4 in a row) of current color
	 */
	function checkVertical(colNum, index) {
		color = getCurrentColor();
		tempColArr = []; 
		tempColArr = getColArr(colNum);
		//alert("asdf1: " + tempColArr);
		
		if(	(tempColArr[0] == color && tempColArr[1] == color && tempColArr[2] == color && tempColArr[3] == color)	||
			(tempColArr[1] == color && tempColArr[2] == color && tempColArr[3] == color && tempColArr[4] == color)	||
			(tempColArr[2] == color && tempColArr[3] == color && tempColArr[4] == color && tempColArr[5] == color)	) {
				//alert("returned true for checkVertical");
				return true;
		}
		//alert("returned false for checkVertical");
		return false;	
	}
	
	/*
	 * Checks all five possible victory combinations for a horizontal win
	 */
	function checkHorizontal(index) {
		color = getCurrentColor();
		
		if(	(colZero[index] == color && colOne[index] == color && colTwo[index] == color && colThree[index] == color)	||
			(colOne[index] == color && colTwo[index] == color && colThree[index] == color && colFour[index] == color)	||
			(colTwo[index] == color && colThree[index] == color && colFour[index] == color && colFive[index] == color)	||
			(colThree[index] == color && colFour[index] == color && colFive[index] == color && colSix[index] == color)	||
			(colFour[index] == color && colFive[index] == color && colSix[index] == color && colSeven[index] == color)	) {
				return true;
		}
		return false;
	}
	
	function checkDiagonal(colNum, index) {
		// check to see if selected slot has neighbors in northwest location 1 slot away (NW1), southwest location by 2 slots away (SW2), etc
		bool_hasNW1 = hasNW1(colNum, index);
		bool_hasNW2 = hasNW2(colNum, index);
		bool_hasNW3 = hasNW3(colNum, index);
		bool_hasSW1 = hasSW1(colNum, index);
		bool_hasSW2 = hasSW2(colNum, index);
		bool_hasSW3 = hasSW3(colNum, index);
		bool_hasNE1 = hasNE1(colNum, index);
		bool_hasNE2 = hasNE2(colNum, index);
		bool_hasNE3 = hasNE3(colNum, index);
		bool_hasSE1 = hasSE1(colNum, index);
		bool_hasSE2 = hasSE2(colNum, index);
		bool_hasSE3 = hasSE3(colNum, index);
		
		// default values to false
		bool_checkNW1 = false;
		bool_checkNW2 = false;
		bool_checkNW3 = false;
		bool_checkSW1 = false;
		bool_checkSW2 = false;
		bool_checkSW3 = false;
		bool_checkNE1 = false;
		bool_checkNE2 = false;
		bool_checkNE3 = false;
		bool_checkSE1 = false;
		bool_checkSE2 = false;
		bool_checkSE3 = false;
		
		color = getCurrentColor();
		
		// if not out of bounds (i.e. if neighbor exists), checks coordinate to see if it maches current player color
		if(bool_hasNW1) bool_checkNW1 = checkNW1(colNum, index, color);
		if(bool_hasNW2) bool_checkNW2 = checkNW2(colNum, index, color);
		if(bool_hasNW3) bool_checkNW3 = checkNW3(colNum, index, color);
		if(bool_hasSW1) bool_checkSW1 = checkSW1(colNum, index, color);
		if(bool_hasSW2) bool_checkSW2 = checkSW2(colNum, index, color);
		if(bool_hasSW3) bool_checkSW3 = checkSW3(colNum, index, color);
		if(bool_hasNE1) bool_checkNE1 = checkNE1(colNum, index, color);
		if(bool_hasNE2) bool_checkNE2 = checkNE2(colNum, index, color);
		if(bool_hasNE3) bool_checkNE3 = checkNE3(colNum, index, color);
		if(bool_hasSE1) bool_checkSE1 = checkSE1(colNum, index, color);
		if(bool_hasSE2) bool_checkSE2 = checkSE2(colNum, index, color);
		if(bool_hasSE3) bool_checkSE3 = checkSE3(colNum, index, color);
		
		// checking all combinations for a diagonal win
		if(	(bool_checkNW1 && bool_checkNW2 && bool_checkNW3)	||
			(bool_checkNW1 && bool_checkNW2 && bool_checkSE1)	||
			(bool_checkNW1 && bool_checkSE1 && bool_checkSE2)	||
			(bool_checkSE1 && bool_checkSE2 && bool_checkSE3)	||
			(bool_checkNE1 && bool_checkNE2 && bool_checkNE3)	||
			(bool_checkNE1 && bool_checkNE2 && bool_checkSW1)	||
			(bool_checkNE1 && bool_checkSW1	&& bool_checkSW2)	||
			(bool_checkSW1 && bool_checkSW2 && bool_checkSW3)	) {
				return true;
		}
		return false;
	}
	
	function checkVictory(colNum, index) {
		if(checkVertical(colNum, index) || checkHorizontal(index) || checkDiagonal(colNum, index)) return true;
		else {
			//alert("returned false for checkVictory");
			return false;
		}
	}
		
	// Checks diagonal coordinates at NW1 NW2 NW3
	
	function checkNW1(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum - 1);
		if(tempCol[index - 1] == color) return true;
		return false;
	}
	
	function checkNW2(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum - 2);
		if(tempCol[index - 2] == color) return true;
		return false;
	}

	function checkNW3(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum - 3);
		if(tempCol[index - 3] == color) return true;
		return false;
	}
	
	// Checks diagonal coordinates at NE1 NE2 NE3
	
	function checkNE1(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum + 1);
		if(tempCol[index-1] == color) return true;
		return false;
	}
	
	function checkNE2(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum + 2);
		if(tempCol[index - 2] == color) return true;
		return false;
	}
	
	function checkNE3(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum + 3);
		if(tempCol[index - 3] == color) return true;
		return false;
	}
	
	// Checks diagonal coordinates at SW1 SW2 SW3
	
	function checkSW1(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum - 1);
		if(tempCol[index + 1] == color) return true;
		return false;
	}
	
	function checkSW2(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum - 2);
		if(tempCol[index + 2] == color) return true;
		return false;
	}
	
	function checkSW3(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum - 3);
		if(tempCol[index + 3] == color) return true;
		return false;
	}
	
	// Checks diagonal coordinates at SE1 SE2 SE3
	
	function checkSE1(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum + 1);
		if(tempCol[index + 1] == color) return true;
		return false;
	}
	
	function checkSE2(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum + 2);
		if(tempCol[index + 2] == color) return true;
		return false;
	}
	
	function checkSE3(colNum, index, color) {
		tempCol = [];
		tempCol = getColArr(colNum + 3);
		if(tempCol[index + 3] == color) return true;
		return false;
	}
	
	// TOP LEFT
	
	function hasNW1(colNum, index) {
		if(colNum > 0 && index > 0) return true;
		return false;
	}
	
	function hasNW2(colNum, index) {
		if(colNum > 1 && index > 1) return true;
		return false;
	}
	
	function hasNW3(colNum, index) {
		if(colNum > 2 && index > 2) return true;
		return false;
	}
	
	// TOP RIGHT
	
	function hasNE1(colNum, index) {
		if(colNum < 7 && index > 0) return true;
		return false;
	}
	
	function hasNE2(colNum, index) {
		if(colNum < 6 && index > 1) return true;
		return false;
	}
	
	function hasNE3(colNum, index) {
		if(colNum < 5 && index > 2) return true;
		return false;
	}
	
	// BOTTOM LEFT
	
	function hasSW1(colNum, index) {
		if(colNum > 0 && index < 5) return true;
		return false;
	}
	
	function hasSW2(colNum, index) {
		if(colNum > 1 && index < 4) return true;
		return false;
	}
	
	function hasSW3(colNum, index) {
		if(colNum > 2 && index < 3) return true;
		return false;
	}
	
	// BOTTOM RIGHT
	
	function hasSE1(colNum, index) {
		if(colNum < 7 && index < 5) return true;
		return false;
	}
	
	function hasSE2(colNum, index) {
		if(colNum < 6 && index < 4) return true;
		return false;
	}
	
	function hasSE3(colNum, index) {
		if(colNum < 5 && index < 3) return true;
		return false;
	}

	