const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')

function requestApi(searchTerm) {
    const url = "http://localhost:3000/artists?name_like=$(searchTerm)"
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); 
        //Se não digitei nada, todos os cards vão aparecer
        if (searchTerm === '') {
            resultPlaylist.classList.add('hidden');
            resultArtist.classList.remove('hidden');
            return;
        }

        requestApi(searchTerm);
})