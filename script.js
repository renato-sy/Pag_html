const link = "https://api.github.com/repos/renato-sy/Pag_html/contents/Fotos"

async function fotos_recientes() {
    const response = await fetch(link);
        if (!response.ok) throw new Error("No se pudo obtener la lista de fotos");

        const archivos = await response.json();

        const fotos = archivos.filter(file => file.name.endsWith(".jpg") || file.name.endsWith(".png"));

        // Asignación condicional para cada imagen
        document.getElementById("Foto_1").src = fotos[fotos.length - 1] ? fotos[fotos.length - 1].download_url : imagenBlancaUrl;
        document.getElementById("Foto_2").src = fotos[fotos.length - 2] ? fotos[fotos.length - 2].download_url : imagenBlancaUrl;
        document.getElementById("Foto_3").src = fotos[fotos.length - 3] ? fotos[fotos.length - 3].download_url : imagenBlancaUrl;
        document.getElementById("Foto_4").src = fotos[fotos.length - 4] ? fotos[fotos.length - 4].download_url : imagenBlancaUrl;
        document.getElementById("Foto_5").src = fotos[fotos.length - 5] ? fotos[fotos.length - 5].download_url : imagenBlancaUrl;
        document.getElementById("Foto_6").src = fotos[fotos.length - 6] ? fotos[fotos.length - 6].download_url : imagenBlancaUrl;
}

document.addEventListener("DOMContentLoaded", fotos_recientes);
