const form = document.forms['form_order'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(...formData.values());

        if (!checkIfNotNull(formData.get('FIO'))) return showMessage('error', 'Введите ваше имя');
        if (!checkPhone(formData.get('phone'))) return showMessage('error', 'Неверно введен номер телефона');
        if (!checkEmail(formData.get('email'))) return showMessage('error', 'Неверно введена почта');
        if (!checkCount(formData.get('count'))) return showMessage('error', 'Неверно введено количество приборов');
        if (!checkIfNotNull(formData.get('address'))) return showMessage('error', 'Введите ваш адрес');
        if (!checkPayment(formData.get('payment'))) return showMessage('error', 'Выберите способ оплаты');

        showMessage('success', 'Заказ оформлен');
    });

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
        if (count >= 0) {
            return count != ""
        };
        return;
    }
    function checkPayment(payment) {
        var inp = document.getElementsByName('payment');

        for (var i = 0; i < inp.length; i++) {
            var radio = inp[i];
            if (radio.type == "radio" && radio.checked) {
                return payment;
            }
        }
        return;
    }
    function showMessage(type, text) {
        Swal.fire({
            position: 'center',
            text: text,
            icon: type,
            showConfirmButton: false,
            timer: 1500
        });
    }
