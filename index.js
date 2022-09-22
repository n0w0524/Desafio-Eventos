let boton = document.getElementById ("create")

function captureProfile() {
    
    let avatarSelect = document.querySelector('input[name=flexRadioAvatar]:checked').id;
    console.log(avatarSelect);
    let pokemonSelect = document.querySelector('input[name=flexRadioPokemon]:checked').id;
    console.log(pokemonSelect);
    boton.onclick = () => {alert ("You have selected a " + avatarSelect + " trainer and your starter Pokemon will be " + pokemonSelect)} 
}

captureProfile ()
