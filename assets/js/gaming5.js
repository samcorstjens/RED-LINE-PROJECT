$(document).ready(function () {
	var checkArray = [];
	var idCheck = [];
	var count = 0;
	var end = 0;
	var fields = document.querySelectorAll(".back");
	var images = ["assets/img/memory/img1.png", "assets/img/memory/imgnew.png", "assets/img/memory/img3.jpg", "assets/img/memory/img4.png", "assets/img/memory/img5.png", "assets/img/memory/img6.png", "assets/img/memory/img7.png", "assets/img/memory/img8.png", "assets/img/memory/img9.jpg", "assets/img/memory/img1.png", "assets/img/memory/imgnew.png", "assets/img/memory/img3.jpg", "assets/img/memory/img4.png", "assets/img/memory/img5.png", "assets/img/memory/img6.png", "assets/img/memory/img7.png", "assets/img/memory/img8.png", "assets/img/memory/img9.jpg"];

	function clicked() {
		if ($(this).find(".inner-wrap").hasClass("flipped")) {
			return;
		}
		$(this).find(".inner-wrap").toggleClass("flipped");
		checkArray.push($(this).find("img").attr("src"));
		idCheck.push($(this).attr("id"));
		check();
	}
	$(".field").on("click", clicked);

	function restart() {
		$(".back").find("img").remove();
		$(".field .inner-wrap").removeClass("flipped");
		checkArray = [];
		idCheck = [];
		count = 0;
		end = 0;
		startGame();
	}

	function checkEnd() {
		if (end === 18) {
			alert("Game is over! Your score is " + count + " points! (The less the better)");
			restart();
		}
	}

	function shuffleArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	function startGame() {
		var arr = shuffleArray(images);
		for (var i = 0; i < fields.length; i++) {
			var img = document.createElement("img");
			img.src = arr[i];
			fields[i].appendChild(img);
		}
	}

	function check() {
		if (checkArray.length === 2) {
			$(".field").off("click", clicked);
			setTimeout(function () {
				if (checkArray[0] !== checkArray[1]) {
					$("#" + idCheck[0]).find(".inner-wrap").removeClass("flipped");
					$("#" + idCheck[1]).find(".inner-wrap").removeClass("flipped");
					count++;
					checkArray = [];
					idCheck = [];
					$(".field").on("click", clicked);
				} else {
					count++;
					end += 2;
					checkArray = [];
					idCheck = [];
					checkEnd();
					$(".field").on("click", clicked);
				}
				document.querySelector(".count").innerHTML = count;
			}, 800);
		}
	}
	startGame();
});
