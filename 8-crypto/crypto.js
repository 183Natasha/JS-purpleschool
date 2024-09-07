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



function crypto(password){
    let pass = password.split("");  
    let length = pass.length;
    pass.unshift(pass[length]);
    pass.pop(pass.unshift(pass[length]));
    return (pass.join(''));
}

function check(password, password2){
    let pass2 = password2.split("");
    let element = pass2.shift();
    pass2.push(element);
    pass2 = pass2.join('');
    if (password == pass2){
        console.log("true");
    } else{
        console.log("false");
    }
}

let password = "Natasha"; 
let password2 = crypto(password);

check(password, password2);