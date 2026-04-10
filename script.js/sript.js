
document.getElementById('bouttondenavigation').onclick=function()
{
   var liste=
   document.getElementById('listeliens');
   liste.style.display=(liste.style.display=='none')?'block':'none'; 
};
const texte="passion et determination"
let index=0;
function ecrire(){
   if(index < texte.length){
      document.getElementById("texte").innerHTML+=texte.charAt(index);
      index++;
      setTimeout(ecrire,100);
   }
}
window.onload=ecrire;
