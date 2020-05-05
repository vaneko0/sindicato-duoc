function show(info_convenio) {
    vista = document.getElementById(info_convenio).style.display;
    if (vista == "none")
        vista = 'block'
    else
        vista = "none";
    document.getElementById(info_convenio).style.display = vista;
}