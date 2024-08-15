// Обзор задачи: Проверить, может ли пользователь сесть за руль, исходя из трех параметров:

// - hasLicence - Наличие водительских прав
// - age - Возраст 18 лет и старше
// - isDrunk - Трезвость пользователя

const hasLicence = true;
const age = 20;
const isDrunk = false;

const canDrive = (hasLicence && (age>=18) && !isDrunk)

console.log(`Может ли пользователь сесть за руль: ${canDrive ? "ДА" : "НЕт"}`)