const width = screen.availWidth;
let page = document.querySelector(".page");
const img_food = document.querySelector(".food_loved_img");
const text_food = document.querySelector(".food_loved_des");
const Menu_click = document.querySelector("#Menu");
const Logo_img = document.querySelector(".logo")

Menu_click.addEventListener("click", function(){
    window.open("https://www.w3schools.com","_self");
});
/*Logo_img.addEventListener("click", function(){
    window.open("http://127.0.0.1:5500/index.html","_self");
});*/
page = `width = ${width}`;
let i = 0;

const clock = setInterval(change_images, 5000);


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