var animalPhotos = ["images/animal1.jpg","images/animal2.jpg","images/animal3.jpg",
	"images/animal4.jpg","images/animal5.jpg","images/animal6.jpg","images/animal7.jpg"];

var i = 0;

var maxImages = animalPhotos.length - 1;

function nextImg(){
	if (i < maxImages){
		i++;
	}
	else {
		i = 0;
	}
	changeImage(i);
}

function prevImg(){
	if (i >= 0){
		i--;
	}
	else {
		i = maxImages;
	}
	changeImage(i);
}

function changeImage(i){
	$('#image-to-vote-on').attr('src', animalPhotos[i]);
}

$(document).ready(function(){
	$("#next").on('click', nextImg);
	$("#back").on('click', prevImg);
});