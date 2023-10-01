let imgs = [];
let imgpos;
function popimages(popimg){
let popdiv = document.createElement("div");
popdiv.classList.add("popimg");
document.body.insertBefore(popdiv, document.body.firstChild);
let imgpop = '<div class="lightbox"><img src = "3.jpg" alt = "3.png" ><img src="close.png" id="popclose" onclick="popclose()"></img><img id="arrowleft" onclick="slideleft()" src="left.png"></img><img id="arrowright" onclick="slideright()" src="right.png"></img></div></div>';
let targets = document.querySelectorAll("."+popimg);
for(i = 0; i < targets.length; i++){
 imgs.push(targets[i].src)
targets[i].addEventListener("click",(event) => {
 let popimg = document.querySelector(".popimg");
 popimg.innerHTML = imgpop;
 let lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "flex";
  document.querySelector(".lightbox img").src = event.target.src;
   imgpos = imgs.indexOf(event.target.src)
});
}
}

//Images move functions
function slideleft(){
  if(imgs[imgpos - 1]){
  imgpos = imgpos - 1;
  document.querySelector(".lightbox #arrowright").style.display = "block";
} else if(!imgs[imgpos - 1]){
  document.querySelector(".lightbox #arrowleft").style.display = "none";
}

  let lightbox = document.querySelector(".lightbox");
  document.querySelector(".lightbox img").src = imgs[imgpos];
  
}
function slideright(){
if(imgs[imgpos + 1]){
  imgpos = imgpos + 1;
  document.querySelector(".lightbox #arrowleft").style.display = "block";
} else if(!imgs[imgpos + 1]){
  document.querySelector(".lightbox #arrowright").style.display = "none";
}

  let lightbox = document.querySelector(".lightbox");
  document.querySelector(".lightbox img").src = imgs[imgpos];
}
function popclose(){
  let lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "none";
}
