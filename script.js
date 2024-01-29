// Referencias aos elementos HTML

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

// Função para fazer solicitacao a api quando se pesquisa algo na aplicação

function requestApi(searchTerm) {

    const search = searchTerm; // Your search term

    fetch('http://localhost:3000/artists')
        .then((response) => response.json())
        .then(users => {
        
            // Filter users whose names contain the search term
            const matchedUsers = users.filter(user =>
              user.name.toLowerCase().includes(search.toLowerCase())
            );
        
            console.log(matchedUsers);
          })
        // .then((result) => displayResults(result))
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

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); 
        if (searchTerm === '') {
            resultPlaylist.classList.add('hidden');
            resultArtist.classList.remove('hidden');
            return;
        }

        requestApi(searchTerm);
}) 