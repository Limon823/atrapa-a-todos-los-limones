fetch("json.json") 
.then(r => r.json()) 
.then(datos => { let perdido = datos; document.getElementById("nombre").textContent = perdido[0].nombre; });