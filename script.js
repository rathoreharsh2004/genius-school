const header=document.getElementById("header");
const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");

window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>40));

menuToggle.addEventListener("click",()=>{
  const open=navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",open);
  menuToggle.textContent=open?"✕":"☰";
});

document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>{
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded","false");
  menuToggle.textContent="☰";
}));

document.getElementById("enquiryForm").addEventListener("submit",function(e){
  e.preventDefault();
  const message=document.getElementById("formMessage");
  const data=new FormData(this);
  const phone=data.get("phone");
  const digits=phone.replace(/\D/g,"");
  if(digits.length<10){
    message.textContent="Please enter a valid mobile number.";
    return;
  }
  // Frontend-ready: connect this submit handler to your backend / Google Sheets / email service.
  message.textContent="Thank you for your enquiry. Our school team will get in touch with you shortly.";
  this.reset();
});

const video=document.querySelector(".hero-video");
video.addEventListener("error",()=>document.querySelector(".hero").classList.add("video-error"));

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}
  });
});