const card = '234s834503458353';    // false (NaN)
const card1 = '2342834503458353';    // true
const card2 = '4561-2612-1234-5464';    // false
const card3 = '4561-2612-1534-5464';    // true

function luna(num) {
    num = num.replaceAll('-', '').split('');
    let result;
    for (let i of num) {
        if (isNaN(i)) {
            console.log('Ошибка ввода')
            return false;
        }

        let card = num.map(Number);

        for (let k = 0; k < card.length; k = k + 2) {
            card[k] = card[k] * 2;
            if (card[k] > 9) {
                card[k] = card[k] - 9;
            }
        }
        result = card.reduce((sum, current) => sum + current, 0);
    }
    return (result % 10 === 0);
}

console.log(luna(card));
console.log(luna(card1));
console.log(luna(card2));
console.log(luna(card3));

