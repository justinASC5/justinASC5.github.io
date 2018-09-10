//nav_bar
window.onscroll = function(){
    navStick();
};

var nav_bar = document.getElementById("nav_bar");
var sticky = nav_bar.offsetTop;

function navStick() {
    if(window.pageYOffset >= sticky){
        nav_bar.classList.add("sticky");
        document.getElementById("nav_bar").style.padding = "8px 0px";
    }
    else{
        nav_bar.classList.remove("sticky");
        document.getElementById("nav_bar").style.padding = "25px 0px";
    }
}


   



