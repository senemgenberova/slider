var imgIndex = 0;
var total = 3;

function changeImg(n){
	var image = document.getElementById("image");
	imgIndex = imgIndex + n;
	// if{imgIndex > total}{
	// 	imgIndex = 0;
	// bunu yazanda islemir. Niye? :(
	// }

	if(imgIndex < 1){
		imgIndex = total;
	}
	image.src = "img/img" + imgIndex + ".jpg";
}