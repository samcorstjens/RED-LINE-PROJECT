<?php
require_once 'assets/HGame/imggame.php';
$words = array();
$numberofletters = 0;
function printPage($image, $wordtoguess, $which, $guessed, $incorrect) {
  $script="";
  echo <<<ENDPAGE
  <!doctype html>
  <html  lang="nl">
  <head>
  <title>Website Sam</title>
      <meta charset="UTF-8">
      <meta name="bootstrap" content="bootstrap">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/index.js"></script>

  </head>
<body>
<nav class="navbar navbar-expand-md bg-secondary navbar-dark">
    <a class="navbar-brand" href="main.php">
        <img src="assets/img/sam.jpg" width="100px" height="80px">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"> <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item"> <a class="nav-link" href="main.php">Home</a>
            </li>
            <li class="nav-item"> <a class="nav-link" href="Leren.php">How to program</a>
            </li>
            <li class="nav-item"> <a class="nav-link" href="CV.html">CV</a>
            </li>
            <li class="nav-item"> <a class="nav-link" href="Contact.php">Contact</a>
            </li>
            <li class="nav-item"> <a class="nav-link" href="Games.php">Games</a>
            </li>
            <li class="nav-item"> <a class="nav-link" href="index.php">Log-out</a>
            </li>
        </ul>
    </div>
</nav>
<div class="container">
<div class="text-center">
  <h2>Hangman Game</h1>
  </div>
  <br>
<div class="offset-md-5 offset-4">
  <pre>$image</pre>
  </div>
  <br>
  <div class="text-center">
  <p><strong>Word to guess: $wordtoguess</strong></p>
  <p>Letters used in guesses so far: $guessed</p>
  <form method="post" action="$script">
	<input type="hidden" name="incorrect" value="$incorrect" />
	<input type="hidden" name="lettersguessed" value="$guessed" />
	<input type="hidden" name="word" value="$which" />
	<fieldset>
	  <legend>Your next guess</legend>
	  <input type="text" name="letter" required="required" autofocus />
	  <input type="submit" value="Guess" />
	</fieldset>
  </form>
  </div>
  </div>
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
</body>
ENDPAGE;
}
function loadWords() {
  global $words;
  global $numberofletters;
  $input = fopen("assets/HGame/words.txt", "r");
  while (true) {
	  $str = fgets($input);
	  if (!$str) break;
	  $words[] = rtrim($str);
	  $numberofletters++;
  }
  fclose($input);
}
function startGame() {
  global $words;
  global $numberofletters;
  global $hang;
  $which = rand(0, $numberofletters - 1);
  $word =  $words[$which];
  $len = strlen($word);
  $wordtoguess = str_repeat('_ ', $len);
  $script = $_SERVER["PHP_SELF"];
  printPage($hang[0], $wordtoguess, $which, "", 0);
}
function killPlayer($word) {
  echo <<<ENDPAGE
  <!doctype html>
  <html  lang="nl">
  <head>
  <title>Website Sam</title>
      <meta charset="UTF-8">
      <meta name="bootstrap" content="bootstrap">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/index.js"></script>
</head>
  <body>
  <div class="container text-center">
  <br>
	<h1>Sorry! You lost!</h1>
	<p>The word you were trying to find was <em>$word</em>.</p>
  <a href='gaming1.php'>Try again</a>
  <br>
  <a href='main.php'>Return to main-screen</a>
  </div>
  <?php  include('assets/inc/footer.php')?>
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  </body>
</html>
ENDPAGE;
}
function congratulateWinner($word) {
  echo <<<ENDPAGE
  <!doctype html>
  <html  lang="nl">
  <head>
  <title>Website Sam</title>
      <meta charset="UTF-8">
      <meta name="bootstrap" content="bootstrap">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/index.js"></script>
  </head>
  <body>
  <div class="container text-center">
  <br>
  <h1>Congratulations! You win!</h1>
  <p><em>$word</em> was the correct answer!</p>
  <a href='gaming1.php'>Try again</a>
  <br>
  <a href='main.php'>Return to main-screen</a>
  </div>
  <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
  </body>
  </html>
ENDPAGE;
}
function matchLetters($word, $guessedLetters) {
  $len = strlen($word);
  $wordtoguess = str_repeat("_ ", $len);
  for ($i = 0; $i < $len; $i++) {
	$ch = $word[$i];
	if (strstr($guessedLetters, $ch)) {
	  $pos = 2 * $i;
	  $wordtoguess[$pos] = $ch;
	}
  }
  return $wordtoguess;
}
function handleGuess() {
  global $words;
  global $hang;
  $which = $_POST["word"];
  $word  = $words[$which];
  $incorrect = $_POST["incorrect"];
  $lettersguessed = $_POST["lettersguessed"];
  $guess = $_POST["letter"];
  $letter = strtoupper($guess[0]);
  if(!strstr($word, $letter)) {
	$incorrect++;
}
  $lettersguessed = $lettersguessed . $letter;
  $wordtoguess = matchLetters($word, $lettersguessed);
  if (!strstr($wordtoguess, "_")) {
   	congratulateWinner($word);
  } else if ($incorrect >= 6) {
	killPlayer($word);
  } else {
	printPage($hang[$incorrect], $wordtoguess, $which, $lettersguessed, $incorrect);
  }
}
loadWords();
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "POST") {
  handleGuess();
} else {
  startGame();
}
?>
