document.addEventListener("DOMContentLoaded", function () {
  
  let isColumnLayout = false;
  let isOriginalTitle = true;
  let isOriginalColor = true;
  let imageAdded = false;

  // Elementos del DOM
  const layoutBtn = document.getElementById("layout-btn");
  const titleBtn = document.getElementById("title-btn");
  const colorBtn = document.getElementById("color-btn");
  const imageBtn = document.getElementById("image-btn");
  const citiesContainer = document.getElementById("cities-container");
  const mainTitle = document.getElementById("main-title");
  const cityTitles = document.querySelectorAll(".city h2");
  const cityParagraphs = document.querySelectorAll(".city p");
  const footerImageContainer = document.getElementById(
    "footer-image-container"
  );

  // Función para cambiar el diseño de fila a columna
  function toggleLayout() {
    if (isColumnLayout) {
      citiesContainer.className = "cities-row";
      layoutBtn.textContent = "Cambiar a diseño columna";
    } else {
      citiesContainer.className = "cities-column";
      layoutBtn.textContent = "Cambiar a diseño fila";
    }
    isColumnLayout = !isColumnLayout;
  }

  // Función para cambiar el título
  function changeTitle() {
    if (isOriginalTitle) {
      mainTitle.textContent = "HTML & CSS: Curso práctico avanzado";
      titleBtn.textContent = "Restaurar título original";
    } else {
      mainTitle.textContent = "University Demo";
      titleBtn.textContent = "Cambiar título";
    }
    isOriginalTitle = !isOriginalTitle;
  }

  // Función para cambiar colores
  function changeColors() {
    if (isOriginalColor) {
      // Colores alternativos
      cityTitles.forEach((title) => {
        title.style.color = "#e74c3c";
      });
      cityParagraphs.forEach((paragraph) => {
        paragraph.style.color = "#16a085";
      });
      colorBtn.textContent = "Restaurar colores originales";
    } else {
      // Colores originales
      cityTitles.forEach((title) => {
        title.style.color = "";
      });
      cityParagraphs.forEach((paragraph) => {
        paragraph.style.color = "";
      });
      colorBtn.textContent = "Cambiar colores";
    }
    isOriginalColor = !isOriginalColor;
  }

  // Función para agregar imagen al footer
  function addImageToFooter() {
    if (!imageAdded) {
      const image = document.createElement("img");
      image.src =
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Logo_UCA_2015.jpg";
      image.alt = "Imagen de ejemplo";
      image.style.maxWidth = "300px";

      footerImageContainer.appendChild(image);
      imageBtn.textContent = "Eliminar imagen del footer";
      imageAdded = true;
    } else {
      footerImageContainer.innerHTML = "";
      imageBtn.textContent = "Agregar imagen al footer";
      imageAdded = false;
    }
  }

  // Event listeners
  layoutBtn.addEventListener("click", toggleLayout);
  titleBtn.addEventListener("click", changeTitle);
  colorBtn.addEventListener("click", changeColors);
  imageBtn.addEventListener("click", addImageToFooter);
});
