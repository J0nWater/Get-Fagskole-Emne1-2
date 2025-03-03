let firstCard = '';
let secondCard = '';
let firstCardId = '';
let secondCardId = '';
let points = '';

updateView();
function updateView() {
    document.getElementById('scorePoints').innerHTML = /*HTML*/`
    <div>${points}</div>
    `;
    createHiddenCardHtml('img1a', 'Bilder/1.png')
    createHiddenCardHtml('img3a', 'Bilder/3.jpg')
    createHiddenCardHtml('img2a', 'Bilder/2.png')
    createHiddenCardHtml('img3b', 'Bilder/3.jpg')
    createHiddenCardHtml('img2b', 'Bilder/2.png')
    createHiddenCardHtml('img1b', 'Bilder/1.png')
    ;
}

function createHiddenCardHtml(imgId, picture) {
    document.getElementById('app').innerHTML += /*HTML*/`

        <div id="${imgId}" class="hiddenImgStyle">
            <img onclick="showCard('${imgId}', '${picture}')" class="cardHidden" src="${picture}">
        </div>
    `;
}

function showCard(imgId, picture){
    if(firstCard !== '' && secondCard !== ''){
        closeCards()
    }
    if(firstCard === '') {
        firstCard = picture;
        firstCardId = imgId;

    }
    else if(secondCard === '' && imgId !== firstCard) {
        secondCard = picture;
        secondCardId = imgId;

        if(firstCard === secondCard){
        reset()
        gamePoints()
        }
    }
    document.getElementById(imgId).innerHTML = /*HTML*/`
    <img onclick="showCard('${imgId}', '${picture}')" class="cardShow" src="${picture}">
    `;
}

function closeCards(){
    if(firstCard !== '' && secondCardId !== ''){
        document.getElementById(firstCardId).innerHTML = /*HTML*/`
        <img onclick="showCard('${firstCardId}', '${firstCard}')" class="cardHidden" src="${firstCard}">
        `;
        document.getElementById(secondCardId).innerHTML = /*HTML*/`
        <img onclick="showCard('${secondCardId}', '${secondCard}')" class="cardHidden" src="${secondCard}">
        `;
    }
    reset()
}

function reset(){
    firstCard = '';
    secondCard = '';
    firstCardId = '';
    secondCardId = '';
}

function gamePoints(){
    points++;
    if( points === 3){
        document.getElementById('scorePoints').innerHTML = /*HTML*/`
        <img src="Bilder/kasatschok-kasatschock.gif" alt="">
        `;

    }
}


