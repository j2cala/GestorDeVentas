function validarLogin(){
    
    let usuario, contrasena;
    usuario= document.getElementById("usuario").value;
    pass=document.getElementById("pass").value;

    if(usuario=="" || pass==""){
        alert("El campo esta vacio");
        return false;
    }
    else if(usuario.length > 40){
        alert("Usuario no existe");
        return false
    }
    else if(contrasena.length > 40){
        alert("Contraseña incorrecta");
        return false
    }
}

function validacionSignUp(){
    let nombres, apellidos, correo, pass, veriPass;
    nombres= document.getElementById("nameRg").value;
    apellidos=document.getElementById("lastNameRg").value;
    correo= document.getElementById("mailRg").value;
    password=document.getElementById("passRg").value;
    veriPass=document.getElementById("VerificaPass").value;

    let expresion= /\w+@+\w+\.+[a-z]/;

    if(nombres=="" || apellidos=="" || correo==""|| password==""){
        alert("Todos los campos son requeridos");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("Correo no es valido");
        return false;
    }
    else if(correo.length > 40){
        alert("Correo demasiado largo");
        return false;
    }    

    else if(nombres.length > 40){
        alert("Nombre demasiado largo");
        return false;
    }
    else if(apellidos.length > 40){
        alert("apellido demasiado largo");
        return false;
    }
    else if(password.length>40){
        alert("Contraseña muy larga");
        return false;
    }

    else if(password.length<8){
        alert("Contraseña corta minimo 8 caracteres");
        return false;
    }
    else if(password != veriPass ){
        alert("Contraseñas no coinciden");
        return false;
    }
}

function validacionPQRS(){
    let nombres, apellidos, correo, telefono, texto;
    nombres= document.getElementById("name").value;
    apellidos=document.getElementById("lastName").value;
    correo= document.getElementById("mail").value;
    telefono=document.getElementById("phone").value;
    texto= document.getElementById("texto").value;
    
    let expresion= /\w+@+\w+\.+[a-z]/;

    if(nombres=="" || apellidos=="" || correo==""|| telefono=="" || texto==""){
        alert("Todos los campos son requeridos");
        return false;
    }
    else if(isNaN(telefono)){
        alert("Telefono no valido");
        return false;
    }
    else if(telefono.length!=10){
        alert("Tu telefono debe ser de 10 digitos");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("Correo no es valido");
        return false;
    }
    else if(correo.length > 40){
        alert("Correo demasiado largo");
        return false;
    }    

    else if(nombres.length > 40){
        alert("Nombre demasiado largo");
        return false;
    }
    else if(apellidos.length > 40){
        alert("apellido demasiado largo");
        return false;

    }
    else if(texto.length > 200){
        alert("Se mas concreto");
        return false;

    }
}


function validarInmueble(){
    
    let departamento, municipio, tpInmueble, areaConstruida, areaPrivada, 
    NoPisos,NoBanos, NoHabitaciones, telefono, precio, texto;

    departamento=document.getElementById("departamento").value;
    municipio=document.getElementById("municipio").value;
    tpInmueble=document.getElementById("tipoInmueble").value;
    areaConstruida=document.getElementById("construido").value;
    areaPrivada=document.getElementById("privada").value;
    NoPisos=document.getElementById("pisos").value;
    NoBanos=document.getElementById("banios").value;
    NoHabitaciones=document.getElementById("habitaciones").value;
    telefono=document.getElementById("contacto").value;
    titulo=document.getElementById("titulo").value;
    precio=document.getElementById("precio").value;
    texto=document.getElementById("textoDes").value;

    if(departamento=="" || municipio=="" || tpInmueble=="-"|| areaConstruida==""
     || areaPrivada=="" || telefono=="" || precio=="" || texto=="" || titulo==""){
        alert("Todos los campos son requeridos");
        return false;
    }

    else if(isNaN(telefono)){
        alert("Telefono no valido");
        return false;
    }
    else if(telefono.length!=10){
        alert("Tu telefono debe ser de 10 digitos");
        return false;
    }
    else if(texto.length > 200){
        alert("Se mas concreto");
        return false;

    }
    









}
