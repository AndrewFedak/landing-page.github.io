window.addEventListener('DOMContentLoaded', function () {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) { // a = технический параметр
        for(i = a; i < tabContent.length; i++){   //A у нас приймаэ знайчення 1, саме тому при загрузці у нас
            tabContent[i].classList.remove('show');// зникнуть усі TABCONTENT окрім 1, бо у массиві [1] = 2 елемент.
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); //вказуємо технічний параметр щоб можна було задати його при виклику функції
    
    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});


