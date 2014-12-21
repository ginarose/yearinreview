$(document).ready(function(){
	$('#find-user').click(function() {
		event.preventDefault();
		var user = $('#user-name').val();
		var userURL = "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user="+user+"&api_key=no&period=12month&format=json";

		var userArtists = [];
		var suggestedArtists = [];

  		$.ajax({
			url: userURL,
			dataType:  "jsonp",
			success:function(data){
				$('#page-title').text(user+"'s year in review on Last.fm");
				$('#artists-grid').empty();
				$('#artists-grid').append("<h2>Top 25 Artists</h2><br>");
				for (i=0; i<25; i++){
					//add artist names to array
					userArtists.push(data.topartists.artist[i].url.substr(25));
					$('#artists-grid').append("<div class='artist-tile'><div class='artist-tile-back' style='background: url("+data.topartists.artist[i].image[4]['#text']+");'></div>\
							<div class='artist-tile-info'><p class='artist-name'>"+data.topartists.artist[i].name+"</p>\
							<p class='playcount'>"+data.topartists.artist[i].playcount+" listens this year</p>\
						</div></div>");
				}

				for (i=0; i<3; i++){
					var artistHTMLSafe = userArtists[i];
					console.log(artistHTMLSafe);
						$.ajax({
						url: "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+userArtists[i]+"&api_key=no&format=json",
						dataType: "jsonp",
						success:function(data){
							console.log("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+artistHTMLSafe+"&api_key=no&format=json");
							}
						});
				}

			}
		});

	});
});