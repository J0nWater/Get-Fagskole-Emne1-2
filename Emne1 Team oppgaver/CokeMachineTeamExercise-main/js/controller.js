function buyCoke() {
    cokesInStore--;
    isCokeInDelivery = true;
    updateView();
}

function insertCoin(value) {
    coinsInserted[0]++;
    updateView();
}

function returnCoins() {
    coinsReturned = [...coinsInserted];
    coinsInserted = [0, 0, 0, 0];
    updateView();
}

function takeCoins() {
    coinsReturned = [0, 0, 0, 0];
    updateView();
}
