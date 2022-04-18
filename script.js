
let value = document.querySelector("#agebox");
let age = document.querySelector("#age");
let div = document.querySelector("#magicbox");
let check = document.querySelector("#estguillaume");
let button = document.querySelector("#go");



button.addEventListener("click", (event)=>{
    event.preventDefault();
    div.classList.remove("hiden");
    div.classList.add("centerflex")
    if (check.checked)
    {
        age.innerHTML = parseInt(value.value) +1;
    }
    else
    {
        age.innerHTML = parseInt(value.value)
    }
})
