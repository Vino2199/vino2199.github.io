const width = screen.availWidth;
let page = document.querySelector(".page");
const img_food = document.querySelector(".food_loved_img");
const text_food = document.querySelector(".food_loved_des");
const Menu_click = document.querySelector("#Menu");
const Foto_click = document.querySelector("#Foto");
const Storia_click = document.querySelector("#Storia");
const Contatti_click = document.querySelector("#Contatti");
const Logo_img = document.querySelector(".logo")
let i = 0;
const clock = Start_Foto();
Menu_click.addEventListener("click", function(){
    window.open("Menu.html","_self");
});
Foto_click.addEventListener("click", function(){
    window.open("Foto.html","_self");
});
Storia_click.addEventListener("click", function(){
    window.open("Storia.html","_self");
});
Contatti_click.addEventListener("click", function(){
    window.open("Contatti.html","_self");
});
Logo_img.addEventListener("click", function(){
    window.open("index.html","_self");
});

function Start_Foto(){
    const temp = food[0];
    img_food.innerHTML  = `<img src="images/${temp.image}.jpeg" alt="food img">`;
    text_food.innerHTML = `<h1>${temp.text}<\h1>`;
    i++;
    return setInterval(change_images, 5000);
}

function change_images(){
    if(i >= 10){
        i = 0;
        const temp = food[i];
        img_food.innerHTML = `<img src="images/${temp.image}.jpeg" alt="food_img">`;
        text_food.innerHTML = `<h1${temp.text}<\h1>`;
    }else{
        const temp = food[i];
        img_food.innerHTML  = `<img src="images/${temp.image}.jpeg" alt="food img">`;
        text_food.innerHTML = `<h1>${temp.text}<\h1>`;
    }
    i++;
}