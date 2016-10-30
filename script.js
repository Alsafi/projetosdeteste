function alerta() {
    var x;
    var r=confirm("escolha um valor");
    if (r==true){
        x="você pressionou ok";
    }
    else {
        x="você pressionou cancelar";
    }
    document.getElementById("msg").innerHTML=x;   
}