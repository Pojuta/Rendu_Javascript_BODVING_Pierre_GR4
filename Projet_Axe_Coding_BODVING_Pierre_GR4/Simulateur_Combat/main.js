const name = "Hayato"
var amountGold = 4500
const product = "Potion"
let productStock = 15
const productPrice = 225

function buyingItem(amountGold, productPrice, productStock){
    let nbrItemsBought = 0;
    while(amountGold >= productPrice && productStock > 0){
        amountGold = amountGold - productPrice
        nbrItemsBought++;
        productStock--;
    }
    return "Vous n'avez plus assez de G pour acheter plus de potions. Vous avez acheté " + nbrItemsBought +" potions. Il vous reste " + amountGold +"G."

}
    

console.log(buyingItem(amountGold, productPrice, productStock));
