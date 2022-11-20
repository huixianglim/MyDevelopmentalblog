function redcolor(){
    var variable = document.querySelector(".red");
    if (variable.style.color === "red"){
        variable.setAttribute("style","color:black")
        return 
    }
    else{
    variable.setAttribute("style","color:red");
    return}
}
