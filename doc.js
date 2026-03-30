let dineroAcumulado = 0;

document.querySelectorAll(".btn").forEach(boton => {
  boton.addEventListener("click", () => {
    // 1. Preguntar si es respuesta definitiva
    const confirmar = confirm("¿Es tu respuesta definitiva?");
    
    if (!confirmar) {
      return; // si el usuario cancela, no pasa nada
    }

    // 2. Evaluar respuesta
    const correcta = boton.dataset.correcta === "true";
    const modal = document.getElementById("modal");
    const resultado = document.getElementById("resultado");
    const dinero = document.getElementById("dinero");
    const accion = document.getElementById("accion");

    if (correcta) {
      dineroAcumulado += 0; // ejemplo: suma de dinero
      resultado.textContent = "¡Correcto!";
      dinero.textContent = "Dinero acumulado: $" + dineroAcumulado;
      accion.textContent = "Siguiente pregunta";
      accion.onclick = () => {
        modal.style.display = "none";
         window.location.href = "pregunta2.html"
        alert("Cargando siguiente pregunta...");
        // aquí puedes cargar la siguiente pregunta dinámicamente
      };
    } else {
      resultado.textContent = "Incorrecto 😢";
      dinero.textContent = "Dinero acumulado: $" + dineroAcumulado;
      accion.textContent = "Reiniciar juego";
      accion.onclick = () => {
        window.location.href = "index.html"; // vuelve a la primera página
      };
    }

    // 3. Mostrar modal
    modal.style.display = "flex";
  });
});
