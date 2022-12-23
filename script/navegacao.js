const nav =  document.getElementsByTagName("nav")[0];
const topNav = nav.offsetTop;

window.onscroll = function(){
    fixarNoTopa();
}

function fixarNoTopa(){
    if(window.pageYOffset >= topNav){
        nav.classList.add("fixarTopo");
    } else {
        nav.classList.remove("fixarTopo");

    }
}