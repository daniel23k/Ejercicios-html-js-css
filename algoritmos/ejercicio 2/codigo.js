function area(){
    var PI = parseInt(document.getElementById("N_PI").value);
    var Radio = parseInt(document.getElementById("radio_2").value);
    var r = (PI *(Radio **2));
    document.getElementById("resultado").innerHTML = r;
}

