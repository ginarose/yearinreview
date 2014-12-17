$(document).ready(function(){
	$('#find-user').click(function() {
		event.preventDefault();
		var user = $('#user-name').val();
		var userURL = "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user="+user+"&api_key=BLAH&format=json";
		var userArtists = [];

  		$.ajax({
			url: userURL,
			dataType:  "jsonp",
			success:function(data){
				for (i=0; i<50; i++){
					//add artist names to array
					userArtists.push(data.topartists.artist[i].name);
					$('#artists-grid').append("<div class='artist-tile' style='background: url("+data.topartists.artist[i].image[4]['#text']+");'><h2 class='artist-name'>"+data.topartists.artist[i].name+"</h2><h3>"+data.topartists.artist[i].playcount+" listens this year</h3></div>");
				}
			}
		});

	});
});