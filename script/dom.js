
// var source = "./resource/piano.mp3"
// var audio = document.createElement("audio");
// //
// audio.autoplay = true;
// //
// audio.load()
// audio.addEventListener("load", function() { 
//     audio.play(); 
// }, true);
// audio.src = source;


// Auto play piano.mp3
var audio = new Audio('./resource/piano.mp3');
audio.play();


var flip = document.getElementById("flipp");
console.log(flip);

var i = 0;
flip.onclick = rotate;

var container = document.getElementsByClassName("container");
console.log(container);

for (var i = 0; i < container.length; i++) {
    container[i].onmouseover = function() {
        document.getElementsByClassName("left")[0].style.zIndex = 10;
        console.log("test");
    };
    console.log(container[i]);
}


const typer = new TypeIt("#typer", {
    strings: '"Một năm khởi đầu từ mùa xuân. Một đời khởi đầu từ tuổi trẻ. Tuổi trẻ là mùa xuân của xã hội.<br>- Hồ Chí Minh"',
    speed: 50,
    loop: false,
    waitUntilVisible: true
  });

function rotate() {
    i++;
    var flip = document.getElementById("flipp");

    if (i%2 == 0) {
        $("#BacHo_1").hide("slow");
        $("#click").show();
        typer.freeze();
        
        $("#typer").innerHTML = "";
        flip.style.zIndex = 11;    
        flip.style.transform = "rotateY(-10deg)";

    } else {
        if (i > 1) {
            typer.unfreeze();
        } else {
            typer.go();
        }
        flip.style.zIndex = 9;    
        $("#BacHo_1").show("slow");
        flip.style.transform = "rotateY(-180deg)";
        $("#click").hide();

    }
}

var indexValue = 0;
function slideShow(){
    setTimeout(slideShow, 2500);
    var x;
    var image = $(".images")[0];
    const img = image.children;
    console.log(img);
    for(x = 0; x < img.length; x++){
        img[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
}
slideShow();


var sakura = new Sakura('body', {
    maxSize: 40,
    minSize: 20
});

