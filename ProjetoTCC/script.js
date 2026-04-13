let baseSrc = ""; // Caminho base do vídeo (sem resolução)

function playVideo(element) {
    const videoSrc = element.getAttribute("data-src");
    const videoTitle = element.getAttribute("data-title");
    const videoCanal = element.getAttribute("data-canal");
    const videoDescribe = element.getAttribute("data-describe");

    const player = document.getElementById("player");
    const source = document.getElementById("video-source");
    const resolutionSelect = document.getElementById("resolution");

    // 🔹 Extrai caminho base (ex: /Videos/video1/video1)
    const parts = videoSrc.split("/");
    const filename = parts.pop(); // video1.mp4
    const folder = parts.join("/"); // /Videos/video1
    const baseName = filename.split(".")[0]; // video1
    baseSrc = `${folder}/${baseName}`; // /Videos/video1/video1

    // 🔹 Pega a resolução escolhida (padrão 720p)
    const selectedResolution = resolutionSelect ? resolutionSelect.value : "720p";

    // 🔹 Define a nova origem do vídeo com base na resolução
    source.src = `${baseSrc}_${selectedResolution}.mp4`;
    player.load();
    player.play();

    // 🔹 Atualiza título e informações
    document.getElementById("video-title").textContent = videoTitle;
    const infoArea = document.getElementById("video-info");
    infoArea.innerHTML = `
        <p><strong>Canal:</strong> ${videoCanal}</p>
        <p><strong>Descrição:</strong> ${videoDescribe}</p>
    `;
}

// 🔹 Função chamada quando o usuário muda a resolução
function changeResolution() {
    if (!baseSrc) return; // Nenhum vídeo ainda selecionado

    const player = document.getElementById("player");
    const source = document.getElementById("video-source");
    const resolutionSelect = document.getElementById("resolution");

    const newResolution = resolutionSelect.value;
    const newSrc = `${baseSrc}_${newResolution}.mp4`;

    const currentTime = player.currentTime; // Guarda o tempo atual do vídeo

    source.src = newSrc;
    player.load();

    // Retoma o vídeo do mesmo ponto e continua tocando
    player.currentTime = currentTime;
    player.play();
}
