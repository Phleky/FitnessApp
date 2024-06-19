function contar_calorias() {
  const pollo = document.getElementById("pollo").value;
  const ternera = document.getElementById("ternera").value;
  const arroz = document.getElementById("arroz").value;
  const huevos = document.getElementById("huevos").value;

  if (pollo > 0 && ternera >= 0 && arroz >= 0 && huevos >= 0) {
    var proteina;
    var carbohidratos;
    var proteina_pollo;
    var proteina_ternera;
    var proteina_huevos;
    var carbohidratos_arroz;
    var carbohidratos_huevo;

    proteina_pollo = (pollo / 100) * 27;
    proteina_ternera = (ternera / 100) * 24;
    proteina_huevos = (huevos / 100) * 13;

    carbohidratos_arroz = (arroz / 100) * 28;
    carbohidratos_huevo = (huevos / 100) * 1.1;

    //Calculo final
    proteina = proteina_pollo + proteina_ternera + proteina_huevos;
    carbohidratos = carbohidratos_arroz;

    const mensaje = `Proteina: ${proteina.toFixed(
      2
    )}, <br> Carbohidratos: ${carbohidratos.toFixed(2)}`;

    // Mostrar el mensaje en la página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = mensaje;

    const div = document.getElementById('resultado');
    div.style.display="block"
  } else {
    alert("Por favor, ingresa valores válidos.");
  }
}
