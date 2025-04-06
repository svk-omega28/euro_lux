const TOKEN = '8000833628:AAFUOegqGL8ntL1-_FzTpSI_GU9Ik5DQhdI';
const CHAT_ID = '-4668969888';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const succes = document.querySelector('.succes');

document.getElementById('invite_bot').addEventListener('submit', function(e) {

    e.preventDefault();

    let message = 'Новая заявка килента!\n' + 'Имя: ' + this.name.value + '\n' +
        'Номер телефона: ' + this.phone.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
        .then((res) => {

            succes.classList.remove('disp');
        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('Скрипт выполнен');
        })

})
