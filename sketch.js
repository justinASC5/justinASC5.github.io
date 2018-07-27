// nav_bar
window.onscroll = function(){
    navStick();
};

var nav_bar = document.getElementById("nav_bar");
var sticky = nav_bar.offsetTop;

function navStick() {
    if(window.pageYOffset >= sticky){
        nav_bar.classList.add("sticky");
    }
    else{
        nav_bar.classList.remove("sticky");
    }
}


