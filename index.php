<!DOCTYPE html>
<html lang="en">
<head>

<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>

<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

<link rel="stylesheet" href="css/style.css" type="text/css">

	<meta charset="UTF-8">
	<title>Last.fm Year In Review</title>
</head>
<body>
	<h1>Last.fm Year in Review Generator</h1>
		<form class="pure-form">
		    <input class="pure-input-1" type="text" placeholder="your last.fm username" id="user-name">
		    <button type="submit" class="pure-button pure-input-1" id="find-user">Find my stats <i class="fa fa-headphones"></i></button>
		 </form>
	<div id="artists-grid" class="pure-g"></div>
</body>
<script src="js/findmusic.js"></script>
</html>