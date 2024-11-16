const githubApiUrl = "https://api.github.com/repos/renato-sy/Pag_html/contents/Assest/Fotos";
const imagenBlancaUrl = "Assest/Img.svg"; // Ruta de la imagen en blanco

async function cargarUltimaFoto() {
    try {
        console.log("Obteniendo lista de fotos...");
        const response = await fetch(githubApiUrl);
        if (!response.ok) throw new Error("No se pudo obtener la lista de fotos");

        const archivos = await response.json();
        console.log("Lista de archivos:", archivos);

        const fotos = archivos.filter(file => file.name.endsWith(".jpg") || file.name.endsWith(".png"));
        console.log("Archivos filtrados (fotos):", fotos);

        // Asignación condicional para cada imagen
        document.getElementById("Foto_1").src = fotos[fotos.length - 1] ? fotos[fotos.length - 1].download_url : imagenBlancaUrl;
        document.getElementById("Foto_2").src = fotos[fotos.length - 2] ? fotos[fotos.length - 2].download_url : imagenBlancaUrl;
        document.getElementById("Foto_3").src = fotos[fotos.length - 3] ? fotos[fotos.length - 3].download_url : imagenBlancaUrl;
        document.getElementById("Foto_4").src = fotos[fotos.length - 4] ? fotos[fotos.length - 4].download_url : imagenBlancaUrl;
        document.getElementById("Foto_5").src = fotos[fotos.length - 5] ? fotos[fotos.length - 5].download_url : imagenBlancaUrl;
        document.getElementById("Foto_6").src = fotos[fotos.length - 6] ? fotos[fotos.length - 6].download_url : imagenBlancaUrl;

    } catch (error) {
        console.error("Error al cargar las fotos:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarUltimaFoto);
