const jawabanTrue = document.querySelector('.button-true');
const jawabanfalse = document.querySelector('.button-false');
const video = document.querySelector(".video");

var i= 1;

function jadian() {
  alert("FIX KITA JADIAN YUHUUUU ♥♥♥♥♥♥");
  video.style.display = "block";

  // setTimeout(function(){
  //   video.style.display = "none";},7000);
};

jawabanfalse.addEventListener("click", function(){

  jawabanfalse.style.transform = `translate(`+`${Math.random() + Math.random() * Math.random() *500}px,`+` ${Math.random() * 500}px)`;
console.log(i);
  if (i===5) {
    alert("KOK KESEL SIHH!!!");
  } else if (i===8) {
    alert("SERIUS NIH GAMAO?");
  } else if(i===12){
    alert("AWAS NTAR NYESEL!!!");
  } else if(i===15){
    alert("AKU SUKA BANGET LOH SAMA KAMU ☹️")
  }

  i++;




});
