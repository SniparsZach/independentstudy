// JavaScript File

// These variables contain the html's elements and important arrays that I will use later on in my functions //
var firstText = document.getElementById("introtext");
var nextButton = document.getElementById("nextbutton");
var backButton = document.getElementById("backbutton");
var image = document.getElementById("image");
var heading = document.getElementById("heading");
var info = document.getElementById("info");
var imageArray = ["pictures/logos/nvidialogo.png","pictures/nvidiatimeline/3dfx.png","pictures/nvidiatimeline/xboxo.png","pictures/logos/nvidialogo.png","pictures/nvidiatimeline/mediaq.jpeg","pictures/nvidiatimeline/playstation3.jpg","pictures/nvidiatimeline/ulielectronics.png","pictures/nvidiatimeline/antitrust.png","pictures/nvidiatimeline/forbesnvidia.jpg","pictures/nvidiatimeline/ageia.png","pictures/nvidiatimeline/nvidiagpulitigation.png","pictures/logos/intellogo.png","pictures/nvidiatimeline/tegra3.jpg","pictures/nvidiatimeline/icera.jpg","pictures/nvidiatimeline/pgi.png","pictures/nvidiatimeline/tegra4.jpg","pictures/nvidiatimeline/tegrak1.jpg","pictures/nvidiatimeline/geforcenow.jpg","pictures/nvidiatimeline/gtx1080.png"];

var headingsArray = ["1993 - NVIDIA Founded","2000 - Acquired 3DFX","2000 - Developed GPU for Microsoft's Xbox","2002 - Acquired Exluna","2003 - Acquired MediaQ","2004 - Acquired iReady, Playstation 3 GPU","2005 - Acquired ULI Electronics","2006 - Acquired Hybrid Graphics and antitrust violations","2007 - Company of the Year","2008 - Acquired Ageia Technologies","2009 - NVIDIA GPU Litigation","2011 - Cross-License with Intel","2011 - Tegra 3 Announcment","2011 - Acquired Icera","2013 - Acquired PGI","2013 - Tegra 4 and 4i Introduced","2014 - Tegra K1 Introduced","2015 - GeForce NOW Released","2016 - GTX 1080 and 1070 Released"];

var infoArray = ["NVIDIA Company founded in 1993 and received startup funding from Seqouia Capital.","NVIDIA acquired intellectual assets of 3DFX. 3DFX was a rival of NVIDIA from 1994 to 2000.","NVIDIA developed the GeForce3 NV2A for the first Xbox and was released in 2001.","NVIDIA acquired Exluna for an undisclosed amount.","NVIDIA acquired MediaQ for $70 million.","NVIDIA acquired iReady and also announced that it will be helping Sony with the creation of the Playstation 3 GPU.","NVIDIA acquired ULI Electronics and at the time, ULI Electronics was a third party electronics supplier to ATI. ATI was later acquired by AMD.", "NVIDIA acquires Hybrid Graphics. AMD and NVIDIA go to court about possible antitrust violations in the graphics cards industry.","Forbes named NVIDIA as Company of the Year in 2007.","NVIDIA acquired Ageia Technologies for an unknown price. Ageia Technologies developed PhysX engine hardware and SDK (Software Development Kit).","NVIDIA agreed to replace or reimburse computer users that had to have their computer repaired. Replacement laptops were also sent to people who were waiting for the repair. Dell, HP laptops and two MacBook Pro models were affected. This cost the company millions of dollars.","NVIDIA and Intel signed a six-year cross-licensing agreement. By doing this, all major legal disputes were dropped and Intel agreed to pay $1.5 billion licensing fees over a period of five annual installments.", "Tegra 3 announced by NVIDIA. The Tegra 3 is the first quad-core mobile processor.","NVIDIA acquired Icera, a chip making company in the UK, for $367 million.","NVIDIA acquired PGI from ATMicroelectronics.","The Tegra 4 had 72 GPU cores, quad-core ARM Cortex-A15 CPU core, and LTE capability. The Tegra 4i had 5 times as many GPU cores as Tegra 3, 1080HD support and had NVIDIA Computational Photography Architecture.","192 GPU cores, quad ARM Cortex-A15 MPCore R3 and either a 32-bit low power companion core or a 64-bit dual-core Project Denver.","GeForce NOW is a cloud-based game-streaming application that is compatible with NVIDIA SHIELD. NVIDIA SHIELD users are able to stream games at 1080p 60fps.","The GTX 1080 and 1070 are built on Pascal-Architecture and come with Ansel. Ansel is an in-game photography application."];

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

