
var slides = document.getElementById("slides");
for (var i=1;i<=31;i++)
{
    var newDiv = document.createElement("img");
    newDiv.src = "images/rook_endgame/"+i+".png";
    newDiv.classList.add("slide")
    slides.appendChild(newDiv);
}
right_button = document.createElement("BUTTON")
right_button.id = "right"
right_image = document.createElement("img")
right_button.src = "images/slider_2.png"
right_button.appendChild(right_image)
slides.appendChild(right_button)

l = document.getElementById("left")
r = document.getElementById("right")
let currentSlide = 0;
l.addEventListener("click", function slideLeft() {
    if (currentSlide!=0)
    {
        currentSlide+=1;
        for (position of slides.getElementsByClassName("slide"))
        {
            position.style.transition="transform "+"0.5s "+"ease"
            position.style.transform=`translateX(${screen.width*currentSlide}px)`
        }
    }
})
r.addEventListener("click", function slideRight() {
    if (currentSlide!=30)
    {
        currentSlide-=1;
        for (position of slides.getElementsByClassName("slide"))
        {
            position.style.transition="transform "+"0.5s "+"ease"
            position.style.transform=`translateX(${screen.width*currentSlide}px)`
        }
    }
})
