var current = document.getElementById('default');

  function highlite(el)
  {
     if (current != null)
     {
         current.className = "";
     }
     el.className = "highlite";
     current = el;
  }

 // function highlite1(){
 //   document.getElementById("contacthl").style.backgroundColor = "red";
 // }
