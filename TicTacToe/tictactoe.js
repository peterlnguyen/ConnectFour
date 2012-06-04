		
			var colZero1 = new Array();
			var colOne1 = new Array();
			var colTwo1 = new Array();
			resetBackend1();
			
			oicon = '<img src="./images/o.gif" height="75" width="75" alt="No image found" />';
			xicon = '<img src="./images/x.png" height="75" width="75" alt="No image found" />';
			eicon = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
			
			var xTurn = true;
			var currentTurn = 'x';
			var currentShape = '<img src="./images/x.png" height="75" width="75" alt="No image found" />';
			
			function move(num) {
				if(isValidMove(num)) {
					if(xTurn) currentTurn = 'x';
					else currentTurn = 'o';
					
					switch(num) {
						case 1:
							colZero1[0] = currentTurn;
							document.getElementById('tx0y0').innerHTML = currentShape; 
							break;
						case 2:
							colZero1[1] = currentTurn;
							document.getElementById('tx0y1').innerHTML = currentShape; 
							break;
						case 3:
							colZero1[2] = currentTurn;
							document.getElementById('tx0y2').innerHTML = currentShape; 
							break;
						case 4:
							colOne1[0] = currentTurn;
							document.getElementById('tx1y0').innerHTML = currentShape; 
							break;
						case 5:
							colOne1[1] = currentTurn;
							document.getElementById('tx1y1').innerHTML = currentShape; 
							break;
						case 6:
							colOne1[2] = currentTurn;
							document.getElementById('tx1y2').innerHTML = currentShape; 
							break;
						case 7:
							colTwo1[0] = currentTurn;
							document.getElementById('tx2y0').innerHTML = currentShape; 
							break;
						case 8:
							colTwo1[1] = currentTurn;
							document.getElementById('tx2y1').innerHTML = currentShape; 
							break;
						case 9:
							colTwo1[2] = currentTurn;
							document.getElementById('tx2y2').innerHTML = currentShape; 
							break;
						default:
							break;
					}
					if(!checkVictory1()) {
						if(checkDraw()) {
							alert("Draw game!");
							resetBackend1();
							resetFrontend1();
						}
						else switchTurns();
					}
					else {
						if(xTurn) alert("X has won the game!");
						else alert("O has won the game!");
						resetBackend1();
						resetFrontend1();
					}
				}
				else {
					alert("That position is taken!");
				}
			}
			
			function checkDraw() {
				if(	colOne1[0] != 'e' && colTwo1[0] != 'e' && colZero1[0] != 'e' &&
					colOne1[1] != 'e' && colTwo1[1] != 'e' && colZero1[1] != 'e' &&
					colOne1[2] != 'e' && colTwo1[2] != 'e' && colZero1[2] != 'e' ) {
					return true;
				}
				return false;
			}
			
			function switchTurns() {
				if(xTurn) {
					currentShape = '<img src="./images/o.gif" height="75" width="75" alt="No image found" />';
				}
				else {
					currentShape = '<img src="./images/x.png" height="75" width="75" alt="No image found" />';
				}
				xTurn = !xTurn;				
			}
			
			function isValidMove(num) {
				if(num == 1) {
					if(colZero1[0] == 'e') return true;
				}
				else if(num == 2) {
					if(colZero1[1] == 'e') return true;
				}
				else if(num == 3) {
					if(colZero1[2] == 'e') return true;				
				}
				else if(num == 4) {
					if(colOne1[0] == 'e') return true;
				}
				else if(num == 5) {
					if(colOne1[1] == 'e') return true;
				}
				else if(num == 6) {
					if(colOne1[2] == 'e') return true;
				}
				else if(num == 7) {
					if(colTwo1[0] == 'e') return true;
				}
				else if(num == 8) {
					if(colTwo1[1] == 'e') return true;
				}
				else if(num == 9) {
					if(colTwo1[2] == 'e') return true;
				}
				return false;
			}
			
			function resetBackend1() {
				for(i = 0; i < 4; i++) {
					colZero1[i] = "e";
					colOne1[i] = "e";
					colTwo1[i] = "e";
				}
				xTurn = true;
				currentTurn = 'x';
				currentShape = '<img src="./images/x.png" height="75" width="75" alt="No image found" />';
			
			}
			
			function resetFrontend1() {
				document.getElementById('tx0y0').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx0y1').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx0y2').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx1y0').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx1y1').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx1y2').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx2y0').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx2y1').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
				document.getElementById('tx2y2').innerHTML = '<img src="./images/boxT.gif" height="75" width="75" alt="No image found" />';
			}
			
			function checkVictory1() {
				one = colZero1[0];
				two = colZero1[1];
				three = colZero1[2];
				four = colOne1[0];
				five = colOne1[1];
				six = colOne1[2];
				seven = colTwo1[0];
				eight = colTwo1[1];
				nine = colTwo1[2];
				
				if(		(one == currentTurn && two == currentTurn && three == currentTurn) 
						|| (four == currentTurn && five == currentTurn && six == currentTurn) 
						|| (seven == currentTurn && eight == currentTurn && nine == currentTurn) 
						|| (one == currentTurn && four == currentTurn && seven == currentTurn)
						|| (two == currentTurn && five == currentTurn && eight == currentTurn)
						|| (three == currentTurn && six == currentTurn && nine == currentTurn)
						|| (one == currentTurn && five == currentTurn && nine == currentTurn)
						|| (three == currentTurn && five == currentTurn && seven == currentTurn) ) {
					return true;
				}
				return false;
			}
	