  let hamburger=document.querySelector("#hamburger");
  let navLinks=document.querySelector("#nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

let name=document.querySelector("#csf-inndiv-name");
let mail=document.querySelector("#csf-inndiv-mail");
let subject=document.querySelector("#csf-inndiv-subject");
let button=document.querySelector("#submit-button");
let message=document.querySelector("#csf-inndiv-message");

button.addEventListener("click",()=>{
if(!name.value.trim() || !mail.value.trim() || !subject.value.trim() ||!message.value.trim()){
  alert("Required Field is Empty, Kindly fill it.")
}
else{
    alert("Message Sent Successfully.")
}
});