document.addEventListener("DOMContentLoaded", function () {

  let isColumnLayout = false;
  let isOriginalTitle = true;
  let isOriginalColor = true;

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

  // Elementos del modal
  const imageModal = document.getElementById("image-modal");
  const imageUrlInput = document.getElementById("image-url");
  const localImageInput = document.getElementById("local-image");
  const cancelBtn = document.getElementById("cancel-btn");
  const insertBtn = document.getElementById("insert-btn");

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

  // Función para abrir el modal
  function openImageModal() {
    imageModal.style.display = "flex";
  }

  // Función para cerrar el modal
  function closeImageModal() {
    imageModal.style.display = "none";
    imageUrlInput.value = "";
    localImageInput.value = "";
  }

  // Función para ajustar el tamaño del contenedor según la imagen
  function adjustImageContainerSize(img) {
    // Esperar a que la imagen cargue completamente
    img.onload = function () {
      console.log("Imagen cargada:", img.width, "x", img.height);
    };
  }

  // Función para insertar imagen
  function insertImage() {
    let imageSrc = "";

    // Verificar si se proporcionó una URL
    if (imageUrlInput.value.trim() !== "") {
      imageSrc = imageUrlInput.value;
    }
    // Verificar si se seleccionó un archivo local
    else if (localImageInput.files && localImageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        footerImageContainer.innerHTML = "";
        const image = document.createElement("img");
        image.src = e.target.result;
        footerImageContainer.appendChild(image);
        adjustImageContainerSize(image);
        closeImageModal();
      };
      reader.readAsDataURL(localImageInput.files[0]);
      return;
    } else {
      alert(
        "Por favor, introduce una URL de imagen o selecciona un archivo local."
      );
      return;
    }

    // Crear elemento de imagen
    footerImageContainer.innerHTML = "";
    const image = document.createElement("img");
    image.src = imageSrc;
    image.onerror = function () {
      alert("Error al cargar la imagen. Por favor, verifica la URL.");
      footerImageContainer.innerHTML = "";
    };
    footerImageContainer.appendChild(image);
    adjustImageContainerSize(image);

    closeImageModal();
  }

  // Event listeners
  layoutBtn.addEventListener("click", toggleLayout);
  titleBtn.addEventListener("click", changeTitle);
  colorBtn.addEventListener("click", changeColors);
  imageBtn.addEventListener("click", openImageModal);
  cancelBtn.addEventListener("click", closeImageModal);
  insertBtn.addEventListener("click", insertImage);

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", function (event) {
    if (event.target === imageModal) {
      closeImageModal();
    }
  });
});
