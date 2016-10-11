// JavaScript File

// These variables contain the html's elements and important arrays that I will use later on in my functions //
var firstText = document.getElementById("introtext");
var nextButton = document.getElementById("nextbutton");
var backButton = document.getElementById("backbutton");
var image = document.getElementById("image");
var heading = document.getElementById("heading");
var info = document.getElementById("info");
var imageArray = [""];

var headingsArray = [""];

var infoArray = [""];

var currentImageIndex = -1;
var currentHeadingsIndex = -1;
var currentInfoIndex = -1;

nextButton.addEventListener("click" , next);

function next() {
  
    if (currentImageIndex < imageArray.length-1 && currentHeadingsIndex < headingsArray.length-1 && currentInfoIndex < infoArray.length-1) {
        
        currentImageIndex++;
        currentHeadingsIndex++;
        currentInfoIndex++;
        
    image.src = imageArray[currentImageIndex];
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    info.innerHTML = infoArray[currentInfoIndex];
    
    }
    
    firstText.innerHTML = "";
    
}

backButton.addEventListener("click" , previous);

function previous() {
    
    if (currentImageIndex >= 1 && currentHeadingsIndex >= 1 && currentInfoIndex >= 1) {
        
    currentImageIndex--;
    currentHeadingsIndex--;
    currentInfoIndex--;

    image.src = imageArray[currentImageIndex];
    heading.innerHTML = headingsArray[currentHeadingsIndex];
    info.innerHTML = infoArray[currentInfoIndex];
    
    }
    
}

