 const element = document.querySelector(".wrapper");
 const loginLink = document.querySelector(".login-link");
 const registerLink = document.querySelector(".register-link");
 const btnPopup = document.querySelector(".btnLogin-popup");

 const iconClose = document.querySelector(".icon-close");

 registerLink.addEventListener("click", ()=>{
    element.classList.add("active");
 });

 loginLink.addEventListener("click", ()=>{
    element.classList.remove("active");
 });

 btnPopup.addEventListener("click", ()=>{
    element.classList.add("active-popup");
 });

 iconClose.addEventListener("click", ()=>{
    element.classList.remove("active-popup");
 });

