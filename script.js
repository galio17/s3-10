function positions(firstPlace, secondPlace, lastPlace) {
    function templatePodium(element, index) {
        console.log(`${index+1}ª - Colocado "${element}"`);
    }
    
    let podium = [firstPlace, secondPlace, lastPlace];
    let danielPosition = podium.indexOf('Daniel');

    if(danielPosition > 0) {
        let positionRival = podium[danielPosition-1];
        podium[danielPosition-1] = 'Daniel';
        podium[danielPosition] = positionRival;
    }

    return podium.forEach(templatePodium);
}

console.log('Caso Daniel terminando em 1º');
positions('Daniel', 'Manoel', 'Rafael');

console.log('Caso Daniel terminando em 2º');
positions('Rafael', 'Daniel', 'Manoel');

console.log('Caso Daniel terminando em 3º');
positions('Manoel', 'Rafael', 'Daniel');
