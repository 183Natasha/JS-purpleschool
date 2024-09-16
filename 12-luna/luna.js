const NumberCard = "4561-1213-4367-2612";

function luna(num) {
    num = num.replaceAll('-', '').split('');
    let isOk = true;
    if (!isNaN(Number(num))) {
        isOk = false;
        console.log('Номер карты не состоит только из цифр. Проверьте веденные данные.')
    }
    for (let i in num) {
        if (num[i] % 2 == 1) {
            num[i] = num[i] * 2 >= 10 ? num[i] * 2 - 9 : num[i] * 2;
        }
    }

    let sum = 0;
    for (let j = 0; j < num.length; j++) {
        sum += Number(num[j]);
    }

    if (sum % 10 == 0) {
        return ('true')
    } else return ('false')
}

console.log(luna(NumberCard))