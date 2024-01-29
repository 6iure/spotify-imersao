// Referências aos elementos HTML
const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

// Função para fazer solicitação a api quando se pesquisa algo na aplicação
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

// Função para mostrar o nome e imagem dos artistas quando são buscados
function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

// Quando escrever algo na barra de pesquisa e nao for vazio, vai buscar pelos artistas na api 
document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); 
        if (searchTerm === '') {
            resultPlaylist.classList.add('hidden');
            resultArtist.classList.remove('hidden');
            return;
        }

        requestApi(searchTerm);
}) 