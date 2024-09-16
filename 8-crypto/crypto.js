// Создать простую функцию шифрования пароля.
// Ключевые пункты:
// Задача:
// Необходимо написать две функции: одна для шифрования пароля и другая для его проверки.
// Шифратор пароля:
// Функция принимает строку (пароль) для шифрования.
// По заданному алгоритму происходит перестановка символов в строке.
// Алгоритм примера: меняем местами символы (середину с первым, второй с последним и т.д.).
// Важно: шифрование должно быть обратимым.
// Проверка пароля:
// Функция сравнивает зашифрованное слово с исходным паролем.
// Если после дешифровки полученный результат совпадает с исходным паролем, функция возвращает true.
// В противном случае — false.



function crypto(originalPassword){
    return originalPassword.split('').reverse().join('');
}


function check(originalPassword, encryptPassword) {
    if(!originalPassword || !encryptPassword) {
        console.log (false);
    }
    console.log (originalPassword === crypto(encryptPassword) )
 }

let originalPassword = "роза упала на лапу азора"; 
let encryptPassword = crypto(originalPassword);
console.log(encryptPassword);

check(originalPassword, encryptPassword);