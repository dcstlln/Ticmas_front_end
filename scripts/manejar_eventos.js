
// Eventos click 
d =  document.getElementById('infopag');
d.style.display = "none";
document.addEventListener('click', (e) =>
  {
    // Retrieve id from clicked element
    let elementclass = e.target.className;
    if (elementclass === 'cursos') {
        let elementtext = e.target.innerHTML;
        // If element has id
        if (elementtext !== '') {
            var s = elementtext;
            var año = s.slice(0, s.indexOf("."));
            var contenido = s.slice(s.indexOf(".")+1, s.length-1);
            const noSpecialChars = contenido.replace(/[^a-zA-Z0-9 ]/g, '');
            var data = new URLSearchParams();
            data.append("py", año);
            data.append("pc", contenido);
            if(e.target.className==='cursos'){
                    var url = "certificado_ficticio.html?" + data.toString();
                    location.href = url;
                }
        }
    }

    let elementid = e.target.id;
    if (elementid === 'infolarge' || elementid === 'infoshort' || elementid === 'm_info') {
        d =  document.getElementById('infopag')
        if (d.style.display === "none") { 
            d.style.display = "block"; 
        } else { 
            d.style.display = "none"; 
        }     
    }
}
);
