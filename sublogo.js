$(document).ready(function(){


      document.getElementById("object").style.transform = "translate(750%,0) rotate(381deg)";


      Date.prototype.getWeek = function() {
          var determinedate = new Date();
          determinedate.setFullYear(this.getFullYear(), this.getMonth(), this.getDate());
          var D = determinedate.getDay();
          if(D == 0) D = 7;
          determinedate.setDate(determinedate.getDate() + (4 - D));
          var YN = determinedate.getFullYear();
          var ZBDoCY = Math.floor((determinedate.getTime() - new Date(YN, 0, 1, -6)) / 86400000);
          var WN = 1 + Math.floor(ZBDoCY / 7);
          return WN;
      }

      var mydate = new Date();
      var weeknumer = mydate.getWeek();


      if (weeknumer==1){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==2){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==3){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==4){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==5){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==6){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==7){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==8){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==9){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==10){
        document.getElementById("object").src = "images/sublogo black.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==11) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==12) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==13) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==14) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==15) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==16) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==17) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==18) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==19) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==20) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==21) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==22) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==23) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==24) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==25) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==26) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==27) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==28) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==29) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==30) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==31) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==32) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==33) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==34) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==35) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==36) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==37) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==38) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==39) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==40) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==41) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==42) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==43) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==44) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==45) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==46) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==47) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==48) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==49) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==50) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==51) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }
      if (weeknumer==52) {
        document.getElementById("object").src = "images/sublogo cg.png";
        document.getElementById("event").innerHTML = "Lekker Anders met<br> CodeGorilla <br> Vandaag pizza bakken!  ";
      }

});
