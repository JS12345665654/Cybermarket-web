const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
  boton.addEventListener("mouseover", () => {
    boton.classList.add("activo");
  });

  boton.addEventListener("mouseout", () => {
    boton.classList.remove("activo");
  });

  boton.addEventListener("click", () => {
    // Aquí se puede agregar la lógica para redirigir a la página del producto
    // o mostrar más información sobre el producto
  });
      //carrito de destacados
      const carrusel = document.querySelector('.carrusel');
      const anterior = document.querySelector('.anterior');
      const siguiente = document.querySelector('.siguiente');

      let indiceActual = 0;
      anterior.addEventListener('click', () => {
      indiceActual--;
      if (indiceActual < 0) {
        indiceActual = carrusel.children.length - 1;
      }
        mostrarItem(indiceActual);
      });

      siguiente.addEventListener('click', () => {
        indiceActual++;
        if (indiceActual >= carrusel.children.length) {
          indiceActual = 0;
        }
          mostrarItem(indiceActual);
        });

      function mostrarItem(indice) {
        carrusel.children[indice].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          });
        }

      mostrarItem(indiceActual);
});