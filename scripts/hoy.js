    sp='-'
    hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1; //enero es 0.
    var yyyy = hoy.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    var hoy = dd+sp+mm+sp+yyyy;
    document.getElementById('hoy_actual').innerText = 'Documento actualizado en: ' + hoy
   
