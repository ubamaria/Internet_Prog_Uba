const form = document.forms[0];

form.addEventListener('submit',(event) => {
    event.preventDefault();
    const values = [...new FormData(form).values()];
    console.log(values);

    if (!checkIfNotNull(values[0])) return showMessage('error', 'Введите ваше имя');
    if (!checkPhone(values[1])) return showMessage('error', 'Неверно введен номер телефона');
    showMessage('success', 'Заказ оформлен');
})
function checkIfNotNull(str) {
        return str !== '';
    }
function checkPhone(phone) {
        var reg = /^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return phone != "" && reg.test(phone);
    }
function showMessage(type, text) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Заказ оформлен',
            showConfirmButton: false,
            timer: 1500
          })
        }