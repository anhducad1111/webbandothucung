// ----------------------slider--------------------------
const slide = document.querySelectorAll(".slider-content-item")
const prev = document.querySelector(".fa-chevron-left")
const next = document.querySelector(".fa-chevron-right")
let index = 0;

next.addEventListener("click",function(){
    slide[index].classList.remove('active')
    index = (index+1) % slide.length
    slide[index].classList.add('active')
})
prev.addEventListener("click",function(){
    slide[index].classList.remove('active')
    index = (index-1 + slide.length) % slide.length
    slide[index].classList.add('active')
})
// // ---------------------------------navscroll------------------------
// window.addEventListener('scroll', function(){
//     let header = document.querySelector("header");
//     let windowPosition = window.scrollY > 0;
//     header.classList.toggle("scrolling-active", windowPosition);
// })
// // -------------humberber------------
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".header-content-nav");
// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("ham-active");
//     navMenu.classList.toggle("ham-active");
// });
// document.querySelector('.header-content-nav-link').forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("ham-active");
//     navMenu.classList.remove("ham-active");
// }));
