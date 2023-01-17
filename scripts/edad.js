var nacido = new Date(document.getElementById('fecha_nacimiento').innerText)
var hoy = new Date()
var anos = Math.trunc( (hoy-nacido)/(1000*60*60*24*365) )
document.getElementById('edad_actual').innerText = document.getElementById('edad_actual').innerText + anos + ' años'