let cards = ['a','2','3','4','5','6','7','8','9','10','J','Q','K'];

shuffle(cards);

//console.log(cards[7]);

cards.forEach(card => console.log(cards));
function shuffle(cards){
    let ci = cards.length;

    while(ci!=0)
    {
        let ri= Math.floor(Math.random() * ci);
        ci--;

        let t = cards[ci];
        cards[ci] = cards[ri];
        cards[ri] = t;

    }
    return cards;
}