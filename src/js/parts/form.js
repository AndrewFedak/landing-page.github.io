function form() {

    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // для не json тексту
        let formData = new FormData(form);
        // всі імена свойств обєкта formData це name в інпутах

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });

        let jsonFormat = JSON.stringify(obj);
        function getPhoneInfo(format) {

            return new Promise(function (resolve, reject) {



                //request.send(formData); //для не json тексту
                request.send(format);

                request.addEventListener("readystatechange", function () {
                    if (request.readyState < 4) {
                        resolve();//statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status === 200) {
                        resolve()//statusMessage.innerHTML = message.success;
                    } else {
                        reject()//statusMessage.innerHTML = message.failure;
                    }
                });
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            });
        }
        getPhoneInfo(jsonFormat).then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)

    });




    let footerForm = document.querySelector('#form'),
        footerFormInputs = footerForm.querySelectorAll('input'),
        request = new XMLHttpRequest();

    footerForm.addEventListener("submit", function (event) {

        let formInfo = new FormData(footerForm), objectInfo = {};

        formInfo.forEach(function (value, key) {
            objectInfo[key] = value;
        });

        let json = JSON.stringify(objectInfo);
        event.preventDefault();

        function getData(data) {
            return new Promise(function (resolve, reject) {
                request.open("POST", 'server.php');
                request.setRequestHeader("Content-type", "application/json; charset=utf-8");
                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status === 200 && request.status < 300) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };
                request.send(data);
                for(let i = 0 ; i < footerFormInputs.length;i++){
                    footerFormInputs[i].value = "";
                }
            });
        }
        getData(json).then(() => alert("Your message is still sending"))
            .then(() => alert("Your message is sent"))
            .catch(() => alert("Your message isn't sent"))
    });
}

module.exports = form;