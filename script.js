function positions(firstPlace, secondPlace, lastPlace) {
    let podium = [firstPlace, secondPlace, lastPlace];
    let danielPosition = podium.indexOf('Daniel');
    
    if(danielPosition > 0) {
        let positionRival = podium[danielPosition-1];
        podium[danielPosition-1] = 'Daniel';
        podium[danielPosition] = positionRival;
    }
    
    return podium;
}

function templatePodium(competitor, position) {
    console.log(`${position+1}ª - Colocado "${competitor}"`);
}

let podiumCase1 = positions('Daniel', 'Manoel', 'Rafael');
let podiumCase2 = positions('Rafael', 'Daniel', 'Manoel');
let podiumCase3 = positions('Manoel', 'Rafael', 'Daniel');

console.log('Caso 1 - Daniel em 1º')
podiumCase1.forEach(templatePodium);
console.log('Caso 2 - Daniel em 2º')
podiumCase2.forEach(templatePodium);
console.log('Caso 3 - Daniel em 3º')
podiumCase3.forEach(templatePodium);