
const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})





let menu=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll=()=>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}


const sr=ScrollReveal({

    distance:"25px",
    duration:2500,
    reset:true
})

sr.reveal(".home-text",{delay:190,origin:"bottom"})

sr.reveal(".about,.services,.portfolio,.contact",{delay:200,origin:"bottom"})

sr.reveal(".service2,.box2,.service,portfolio-content",{delay:150,origin:"bottom"})









var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){

for(tablink of tablinks){
    tablink.classList.remove("active-links")
}

for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
}

event.currentTarget.classList.add("active-link")

document.getElementById(tabname).classList.add("active-tab")

}