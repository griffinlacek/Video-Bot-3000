//Assigns bottalk span element to var botText
var botText = document.getElementById("bottalk");

//Assigns category links to variables
var musicLink = document.getElementById("musicLink");
var comedyLink = document.getElementById("comedyLink");
var animationLink = document.getElementById("animationLink");
var travelLink = document.getElementById("travelLink");
var sportsLink = document.getElementById("sportsLink");

//Start of iFrame in video section
var startIframe = '<iframe src="https://player.vimeo.com/video/';
//Default video reference
var vidRef = 124400795;
//End of iFrame in video section
var endIframe = '?color=00adef&title=0&byline=0&portrait=0" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

//Sets up functions to be called onClick from category links
musicLink.onclick = musicUpdate;
comedyLink.onclick = comedyUpdate;
animationLink.onclick = animationUpdate;
travelLink.onclick = travelUpdate;
sportsLink.onclick = sportsUpdate;

//Sets global readyAlert and clears it.
readyAlert = setTimeout(change, 5000);
clearTimeout(readyAlert);

//Default last video value. Compared to an array index number.
var lastVideo = 0;

//Clears readyAlert and sets it for 5 seconds.
function readyAgain() {
	clearTimeout(readyAlert);	
    readyAlert = setTimeout(change, 5000);
}

/* Generates a random number 0-19 to be used as array index for 
 * choosing a new category video. Compared to last generated index,
 * if the same regenerate random number.
*/
function ranNumGen() {
	
	var ranNumber = Math.floor(Math.random() * 20);

	while (lastVideo == ranNumber) {
		ranNumber = Math.floor(Math.random() * 20);
	}
	
	lastVideo = ranNumber;
	return ranNumber;
}

//Updates video element with new iFrame video
function videoUpdate(vidRef) {
	
	var video = document.getElementById("video");

	video.innerHTML = startIframe + vidRef + endIframe;
	
}

/* Called onClick of musicLink. Updates botText, calls function
 * readyAgain() to set readyAlert, grabs a random video reference
 * from reference array and calls videoUpdate() to update video element.
*/
function musicUpdate() {
	
	var musicText = "Checking NSA database for music you like...";
	botText.innerHTML = musicText;
	readyAgain();
	
	var musicRefs = [122699512, 123018448, 97088156, 116634367, 5755930, 33426012, 118972727, 79872231, 4578366, 
		2909492, 4894256, 8578344, 21604065, 10085362, 46933975, 8718627, 15337353, 36525519, 29085815, 20148191];
	var ranVideo = musicRefs[ranNumGen()];
	
	videoUpdate(ranVideo);
}

function comedyUpdate() {
	
	var comedyText = "So we've got a comedian on our hands huh?";
	botText.innerHTML = comedyText;
	readyAgain();
	
	var comedyRefs = [124185555, 12829784, 124744852, 65102146, 23608259, 42976861, 108138933, 1034172, 902773, 
		66753575, 27003856, 89527215, 58933055, 79306807, 16094710, 74158902, 43233558, 53751284, 121162967, 23925061];
	var ranVideo = comedyRefs[ranNumGen()];
	
	videoUpdate(ranVideo);
}

function animationUpdate() {
	
	var animationText = "Animation? My dad was a graphics card!";
	botText.innerHTML = animationText;
	readyAgain();

	var animationRefs = [107395294, 94502406, 125235739, 124780139, 79695097, 65107797, 125167921, 27127177, 67487897, 
		14592941, 121986760, 81324132, 119107623, 119054553, 26877221, 86083265, 63528500, 33822223, 39659731, 50522981];
	var ranVideo = animationRefs[ranNumGen()];
	
	videoUpdate(ranVideo);
}

function travelUpdate() {
	
	var travelText = "Nothing like traveling from the comfort of your underwear!";
	botText.innerHTML = travelText;
	readyAgain();
	
	var travelRefs = [124204779, 124719070, 124887760, 124032668, 102051605, 15034110, 98123388, 32958521, 
		31158028, 97455734, 35396305, 108018156, 16339841, 57130400, 105286558, 112681885, 23079092, 38073758, 57465392, 65209712];
	var ranVideo = travelRefs[ranNumGen()];
	
	videoUpdate(ranVideo);	
}

function sportsUpdate() {
	
	var sportsText = "I took 2nd in my high school's pong tournament!";
	botText.innerHTML = sportsText;
	readyAgain();
	
	var sportsRefs = [118643506, 42976861, 121101874, 113935441, 117268065, 87169386, 29017795, 86054588, 124191188, 
		74954532, 63225329, 43233380, 112653472, 35652044, 105550166, 60576409, 86856549, 108230034, 34783883, 118380572];
	var ranVideo = sportsRefs[ranNumGen()];
	
	videoUpdate(ranVideo);
}


function change() {
	var origText = "Ready again when you are! Pick a category to watch a random video!";
	botText.innerHTML = origText;
}

