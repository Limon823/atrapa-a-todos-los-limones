fetch("json.json") 
  .then(r => r.json()) 
  .then(datos => { 
      let perdido = datos; 
      document.getElementById("nombre").textContent = perdido[0].nombre; 
      document.getElementById("edad").textContent = perdido[0].edad;
      document.getElementById("color").textContent = perdido[0].color;
  });