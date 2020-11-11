
// changes all Class="work_display_div" to not open. then takes the var from the HTML button and open it's div.

function displayworkdiv(div, active) {

    // Is div open?
    var x = document.getElementById(div);
    var y = document.getElementById(active);
    if (x.style.display === "block") {
        // If yes then cloes all divs of class.
        closeallworkdivs()
      } else {
        // else cloes all divs of class then open it.
        closeallworkdivs()
        x.style.display = "block";
        y.classList.add('activeworkbar');
      }
  }
//Closes all work_display_div and removes the .activeworkbar class.
function closeallworkdivs() {
    var allworkdivclass = document.querySelectorAll('.work_display_div'),
    i = 0,
    l = allworkdivclass.length;
    for (i; i < l; i++) {
        allworkdivclass[i].style.display = 'none';
    }
    var activeworkbar = document.querySelectorAll('.activeworkbar'),
    i = 0,
    l = activeworkbar.length;
    for (i; i < l; i++) {
        activeworkbar[i].classList.remove('activeworkbar');
    }
}

function opendraw() {
    var left = document.getElementById("fallingimg_draw_left"); 
    var right = document.getElementById("fallingimg_draw_right");  
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 200) {
            clearInterval(id);
            window.location.href='/pages/me.html'
        } else {
            pos++; 
            left.style.height = ((pos/10) + 85.7) + '%';
            left.style.top = (9.8 - (pos / 70)) + '%'; 

            right.style.height = (( pos / 10) + 85.7) + '%';
            right.style.top = (9.8 - (pos / 70)) + '%'; 
        }
    }
}
