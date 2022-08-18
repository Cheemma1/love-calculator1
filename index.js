
document.getElementById("loveBtn").onclick = function(){
let name = document.getElementById("name").value;
 
let partner = document.getElementById("partner").value;

let loveScore = Math.random() *100;

loveScore =Math.floor( loveScore) + 1;

 if (loveScore >= 70){
 document.getElementById("loveSpace").innerHTML =( name + " " + "and" + " " + partner + " " + "your love score is" + " " + loveScore +"%" + " " +  "you guys are match made in heaven!");
 document.getElementById("loveSpace").style.color ="green";
 }
 if (loveScore <= 50){
  document.getElementById("loveSpace").innerHTML = (name + " " + "and " + " " + partner + " " + "your love score is" + " " + loveScore + "%" + "you love score is below average!");
   document.getElementById("loveSpace").style.color ="red";

 }
 if (loveScore <= 30){
 document.getElementById("loveSpace").innerHTML =( name + " " + "and" + " " + partner + " " + "your love score is" + " "+  loveScore +"%"+ 'Sorry your love score is low!') ;
  document.getElementById("loveSpace").style.color ="blue";

 } 

else {
  return false;
}
}