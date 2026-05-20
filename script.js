const NumberPlayer1 = document.querySelector(".img1");
const NumberPlayer2 = document.querySelector(".img2");
let randomNumberPlayer1 = Math.floor(Math.random() * 6 + 1);
let randomNumberPlayer2 = Math.floor(Math.random() * 6 + 1);
let refreshMeTitle = document.querySelector("h1");

function clickImg1() {
	if (randomNumberPlayer1 === 1) {
		NumberPlayer1.src = "images/dice1.png";
	} else if (randomNumberPlayer1 === 2) {
		NumberPlayer1.src = "images/dice2.png";
	} else if (randomNumberPlayer1 === 3) {
		NumberPlayer1.src = "images/dice3.png";
	} else if (randomNumberPlayer1 === 4) {
		NumberPlayer1.src = "images/dice4.png";
	} else if (randomNumberPlayer1 === 5) {
		NumberPlayer1.src = "images/dice5.png";
	} else {
		NumberPlayer1.src = "images/dice6.png";
	}
}

function clickImg2() {
	if (randomNumberPlayer2 === 1) {
		NumberPlayer2.src = "images/dice1.png";
	} else if (randomNumberPlayer2 === 2) {
		NumberPlayer2.src = "images/dice2.png";
	} else if (randomNumberPlayer2 === 3) {
		NumberPlayer2.src = "images/dice3.png";
	} else if (randomNumberPlayer2 === 4) {
		NumberPlayer2.src = "images/dice4.png";
	} else if (randomNumberPlayer2 === 5) {
		NumberPlayer2.src = "images/dice5.png";
	} else {
		NumberPlayer2.src = "images/dice6.png";
	}
}

function refreshMe() {
	clickImg1();
	clickImg2();
	if (randomNumberPlayer1 > randomNumberPlayer2) {
		document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
	} else if (randomNumberPlayer1 < randomNumberPlayer2) {
		document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
	} else {
		document.querySelector("h1").innerHTML = "Draw!";
	}
}

window.onload = function() {
	const paginaRecarregada = sessionStorage.getItem("recarregada");

	if (paginaRecarregada === "true") {
		refreshMe();
	} else {
		sessionStorage.setItem("recarregada", "true");
	}
};

NumberPlayer1.addEventListener("click", clickImg1);
NumberPlayer2.addEventListener("click", clickImg2);
refreshMeTitle.addEventListener("click", refreshMe);
