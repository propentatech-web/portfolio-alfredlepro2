
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
document.getElementById("monFormulaire").addEventListener("submit", function(e) {
    e.preventDefault(); // empêche le rechargement

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    console.log("Nom :", nom);
    console.log("Email :", email);
    console.log("Message :", message);

    alert("Message envoyé !");
});
