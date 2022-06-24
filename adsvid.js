   var myFP = fluidPlayer(
        'video-id',	{
	"layoutControls": {
		"controlBar": {
			"autoHideTimeout": 3,
			"animated": true,
			"autoHide": true
		},
		"htmlOnPauseBlock": {
			"html": null,
			"height": "50",
			"width": "100"
		},
		"autoPlay": true,
		"mute": true,
		"allowTheatre": true,
		"playPauseAnimation": false,
		"playbackRateEnabled": false,
		"allowDownload": false,
		"playButtonShowing": false,
		"fillToContainer": false,
		"posterImage": ""
	},
	"vastOptions": {
		"adList": [
			{
				"roll": "preRoll",
				"vastTag": "https://www.videosprofitnetwork.com/watch.xml?key=ef9a8a7d54a1434b787d57701821cc6c",
				"adText": ""
			},
			{
				"roll": "midRoll",
				"vastTag": "https://www.videosprofitnetwork.com/watch.xml?key=ef9a8a7d54a1434b787d57701821cc6c",
				"adText": ""
			},
			{
				"roll": "postRoll",
				"vastTag": "https://www.videosprofitnetwork.com/watch.xml?key=ef9a8a7d54a1434b787d57701821cc6c",
				"adText": ""
			}
		],
		"adCTAText": false,
		"adCTATextPosition": ""
	}
});
function hilangkan() {document.getElementById("sticky-advid").style = "top: -325px";} setTimeout("document.getElementById('sticky-advid').style = 'top: 5%'",4500)
