document.addEventListener('DOMContentLoaded', function () {
    const pokemonList = document.getElementById('pokemon-list');

    // Fetch data from PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(response => response.json())
        .then(data => {
            const pokemons = data.results;
            pokemons.forEach(pokemon => {
                fetchPokemonDetails(pokemon.url);
            });
        })
        .catch(error => console.error('Error fetching Pokemon list:', error));

    // Fetch individual Pokemon details
    function fetchPokemonDetails(url) {
        fetch(url)
            .then(response => response.json())
            .then(pokemonData => {
                displayPokemon(pokemonData);
            })
            .catch(error => console.error('Error fetching Pokemon details:', error));
    }

    // Display Pokemon information
    function displayPokemon(pokemon) {
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = pokemon.name;

        const imageElement = document.createElement('img');
        imageElement.classList.add('pokemon-image');
        imageElement.src = pokemon.sprites.front_default;
        imageElement.alt = `${pokemon.name} image`;

        pokemonCard.appendChild(nameElement);
        pokemonCard.appendChild(imageElement);

        pokemonList.appendChild(pokemonCard);
    }
});
