function buyBeer() {
    let beerPrice = 25; 
    if ( valueFromCoinCounts(coinsInserted) >= beerPrice) {
        beersInStore--;
         isBeerInDelivery = true;
     } else { isBeerInDelivery = false;}

     if (beersInStore < 0){
        isBeerInDelivery = false;
    }
     
    for (i = 0; i < coinsInserted.length; i++ ){
      wallet[i] - coinsInserted[i];

    }
    
     let totalInserted = valueFromCoinCounts(coinsInserted);
     let change =  totalInserted - beerPrice;
     returnChange(change);

     coinsInserted = [0, 0, 0, 0];
    updateView();
    
}

function returnChange(change){

    coinsReturned = [0,0,0,0];
    for(let i = 3; i >= 0; i--) { 
        let coinValue= coinValueFromIndex(i);
        while (change >= coinValue && wallet[i] > 0){
            change = change - coinValue;
            coinsReturned[i]++;
            
            
        }
        console.log('coinsReturned', coinsReturned[i])
    }
}

function takeBeer(){
    if(isBeerInDelivery) 
        isBeerInDelivery--;
       
        
    
    updateView();
   

}

function insertCoin(value) {
    for(let i = 0; i < coinsInserted.length; i++){
        if (coinValueFromIndex([i]) == value && wallet[i] > 0) {
            wallet[i]--;
            coinsInserted[i]++
        }
    }
    updateView();
}

// Angre
function returnCoins() {

        coinsReturned = [...coinsInserted];
        coinsInserted = [0, 0, 0, 0];
    updateView();
}

// Ta myntene
// Må tilbake til wallet
function takeCoins() {
   

    for(let i = 0;  i < coinsReturned.length; i++) {
        wallet[i] += coinsReturned[i];
    }
   
    coinsReturned = [0, 0, 0, 0];
    updateView();
}

