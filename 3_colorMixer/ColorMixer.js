const firstColor = document.getElementById("color1");
const secondColor = document.getElementById("color2");
const generate = document.getElementsByClassName("button")
var textBox = document.getElementById("txt")


let generateColor = (color1, color2) => {
var mixColor = "";

switch (color1) {
    case "red":
        switch (color2) {
            case "blue":
                mixColor = "purple";
                break;
            case "yellow":
                mixColor = "orange";
                break;
            default:
                mixColor = "Invalid color combination";
        }
        break;
    case "blue":
        switch (color2) {
            case "yellow":
                mixColor = "green";
                break;
            case "red":
                mixColor =  "purple";
            default:
                mixColor = "Invalid color combination";
        }
        break;
    case "yellow":
        switch(color2){
            case "red":
                mixColor = "orange";
                break;
            case "blue":
                mixColor = "green";
            default:
                mixColor = "Invalid color combination";
        }
        break;
        default:
            mixColor = "Invalid color combination";


}
return mixColor;

// textBox.value = mixColor;
};

generate[0].addEventListener("click", ()=> {
    let color1 = firstColor.value;
    let color2 = secondColor.value;
    let ansColor = generateColor(color1,color2)
    // console.log(ansColor,textBox);
    textBox.value = ansColor
})