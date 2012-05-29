<!--
$(document).ready(function(){

	var playItem = 0;
                       
	var myPlayList = [
		{name:"Horizon",mp3:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Horizon.mp3",ogg:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Horizon.ogg"},
              {name:"Das Dunkle Land",mp3:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Land.mp3",ogg:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Land.ogg"},
              {name:"Before I Could Breathe",mp3:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Before I Could Breathe.mp3",ogg:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Before I Could Breathe.ogg"},
		{name:"Who?",mp3:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Who.mp3",ogg:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Who.ogg"},
              {name:"Put your spell on me!",mp3:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Put your spell on me.mp3",ogg:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/Put your spell on me.ogg"},
              {name:"World from Here",mp3:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/World from Here.mp3",ogg:"http://vicanselmo.com/wp-content/themes/vicanselmo/audio/World from Here.ogg"}





	];

	// Local copy of jQuery selectors, for performance.
	var jpPlayTime = $("#jplayer_play_time");
	var jpTotalTime = $("#jplayer_total_time");

	$("#jquery_jplayer").jPlayer({
		ready: function() {
			displayPlayList();
			playListInit(false); // Parameter is a boolean for autoplay.
		},
		oggSupport: true
	})
	.jPlayer("onProgressChange", function(loadPercent, playedPercentRelative, playedPercentAbsolute, playedTime, totalTime) {
		jpPlayTime.text($.jPlayer.convertTime(playedTime));
		jpTotalTime.text($.jPlayer.convertTime(totalTime));
	})
	.jPlayer("onSoundComplete", function() {
		playListNext();
	});

	$("#jplayer_previous").click( function() {
		playListPrev();
		$(this).blur();
		return false;
	});

	$("#jplayer_next").click( function() {
		playListNext();
		$(this).blur();
		return false;
	});

	function displayPlayList() {
		$("#jplayer_playlist ul").empty();
		for (i=0; i < myPlayList.length; i++) {
			var listItem = (i == myPlayList.length-1) ? "<li class='jplayer_playlist_item_last'>" : "<li>";
			listItem += "<a href='#' id='jplayer_playlist_item_"+i+"' tabindex='1'>"+ myPlayList[i].name +"</a></li>";
			$("#jplayer_playlist ul").append(listItem);
			$("#jplayer_playlist_item_"+i).data( "index", i ).click( function() {
				var index = $(this).data("index");
				if (playItem != index) {
					playListChange( index );
				} else {
					$("#jquery_jplayer").jPlayer("play");
				}
				$(this).blur();
				return false;
			});
		}
	}

	function playListInit(autoplay) {
		if(autoplay) {
			playListChange( playItem );
		} else {
			playListConfig( playItem );
		}
	}

	function playListConfig( index ) {
		$("#jplayer_playlist_item_"+playItem).removeClass("jplayer_playlist_current").parent().removeClass("jplayer_playlist_current");
		$("#jplayer_playlist_item_"+index).addClass("jplayer_playlist_current").parent().addClass("jplayer_playlist_current");
		playItem = index;
		$("#jquery_jplayer").jPlayer("setFile", myPlayList[playItem].mp3, myPlayList[playItem].ogg);
	}

	function playListChange( index ) {
		playListConfig( index );
		$("#jquery_jplayer").jPlayer("play");
	}

	function playListNext() {
		var index = (playItem+1 < myPlayList.length) ? playItem+1 : 0;
		playListChange( index );
	}

	function playListPrev() {
		var index = (playItem-1 >= 0) ? playItem-1 : myPlayList.length-1;
		playListChange( index );
	}
	
	
});
-->