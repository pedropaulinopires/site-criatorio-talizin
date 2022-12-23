const toTop= document.querySelector(".scrollTop");
const body = document.getElementsByTagName('body')[0];

window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 250) {
        toTop.classList.add("active");
        body.classList.add("scroll");
    } else {
        toTop.classList.remove("active");
        body.classList.remove("scroll");
    }
})