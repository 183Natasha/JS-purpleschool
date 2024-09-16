// 2022 - проверка на русскую запись
// 2023 - преверка на американскую запись

let arr = ['10-02-2022', '00-02-2022', '10-00-2022'
    , 'тест'
    , '11/12/2023', '00/13/2023', '41/12/2023', '12/00/2023'];
let results = [];

function searchDay(arr) {
    arr.forEach((el) => {
        if (el.includes('/', 0)) {
            let USDdate = el.split('/');
            if ((1 <= USDdate[0] && USDdate[0] <= 12) && (1 <= USDdate[1] && USDdate[1] <= 31)) {
                [USDdate[0], USDdate[1]] = [USDdate[1], USDdate[0]];
                results.push(USDdate.join('-'));
            }

        }
        if (el.includes('-', 0)) {
            let RUSdate = el.split('-');
            if ((1 <= RUSdate[0] && RUSdate[0] <= 31) && (1 <= RUSdate[1] && RUSdate[1] <= 12)) {
                results.push(RUSdate.join('-'));
            }
        }
    })
    return (results);
}

console.log(searchDay(arr))