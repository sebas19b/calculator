//seleccionamos del documento los botones y el display
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

//recorremos todos los botones
buttons.forEach((btn) => {
    //se crea un evento de escucha de tipo click para todos los botones
    btn.addEventListener("click", () =>{
        
        if (btn.id === "=") {
            //si se selecciona el boton igual nos hace la operacion
            display.value = eval(display.value)
        } else if(btn.id === "ac") {
            //se borra el display
            display.value = ""
        } else if (btn.id === "de") {
            //se borra el ultimo numero del display
            display.value = display.value.slice(0, -1)
        }else{
            //se escribe el numero en el display
            display.value += btn.id
        }
    })
});

