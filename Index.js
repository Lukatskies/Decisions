//function for change theme//
function changeTheme (){
    const header = document.getElementById("header");
    const december = document.getElementById("december");
    const november = document.getElementById("november");
    const october = document.getElementById("october");
    const themeMessage = document.getElementById("themeMessage");

//construct if and else statments//
header.className = 
    ((december.checked && "december-theme")) ||
    ((november.checked && "november-theme")) ||
    ((october.checked && "october-theme"))   ||
    'nonselected-theme';

if (december.checked) {
    themeButton.textContent = "";
} 
else if (november.checked) {
    themeButton.textContent = "";
} 
else if (october.checked) {
    themeButton.textContent = "";
    } 
else {
    themeButton.textContent = "";
    }
//optional message i put//
var msg = "You changed the color!";
    themeMessage.textContent = msg;
}