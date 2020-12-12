const form = document.forms[0];

form.addEventListener('submit', (event) => {
event.preventDefault();
const values = [...new FormData(form).values()];
console.log(values);

if (!checkIfNotNull(values[0])) return showMessage('error', 'Введите ваше имя');
if (!checkPhone(values[1])) return showMessage('error', 'Неверно введен номер телефона');
if (!checkEmail(values[2])) return showMessage('error', 'Неверно введена почта');
if (!checkCount(values[3])) return showMessage('error', 'Неверно введено количество приборов');
if (!checkIfNotNull(values[4])) return showMessage('error', 'Введите ваш адрес');
if (!checkPayment(values[5])) return showMessage('error', 'Выберите способ оплаты');

showMessage('success', 'Заказ оформлен');
})

function checkIfNotNull(str) {
return str !== '';
}

function checkPhone(phone) {
var reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
return phone != "" && reg.test(phone);
}
function checkEmail(email) {
    var reg = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    return email != "" && reg.test(email);
}
function checkCount(count) {
    if (count>=0){
    return count != ""
    };
}
function checkPayment(payment) {
  
}
function showMessage(type, text) {
Swal.fire({
position: 'center',
text: text,
icon: type,
showConfirmButton: false,
timer: 1500
})
}