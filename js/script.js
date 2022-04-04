window.addEventListener('load', function() {
    // меню бургер
    let menuBtn = document.querySelector('.burger');
    let menuList = document.querySelector('.menu_list');
    menuBtn.addEventListener('click', function() {

        if (menuBtn.classList.contains('burger_btn_close')) {
            menuBtn.classList.remove('burger_btn_close');
            // menuList.classList.remove('menu_show');
            menuShowAnim(menuList);
        } else {
            menuBtn.classList.toggle('burger_btn_close');
            // menuList.classList.toggle('menu_show');
            menuShowAnim(menuList);
        }

        function menuShowAnim() {

            if (menuList.classList.contains('menu_show')) {
                let animate = menuList.animate([
                    { height: menuList.clientHeight + 'px' },
                    { height: 0 }
                ], { duration: 300 });

                animate.addEventListener('finish', function() {
                    menuList.classList.remove('menu_show');
                });
            } else {
                menuList.classList.add('menu_show');

                menuList.animate([
                    { height: 0 },
                    { height: menuList.clientHeight + 'px' }
                ], { duration: 300 });
            }
        }
    });
    //Скролл для меню и кнопки вверх
    let menu = document.querySelector('.menu');
    let btnUp = document.querySelector('.btnUp');

    let scrollTimeout;

    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout); //Функция clearTimeout() отменяет ранее установленный вызов функции
        scrollTimeout = setTimeout(onScroll, 200);
    });

    // нажатие на кнопку скролит вверх
    btnUp.addEventListener('click', function(e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    menu.addEventListener('click', function(e) {
        let link = e.target;

        if (link.classList.contains('menu_link')) {
            e.preventDefault();
            scrollToTarget(link.hash);
        }
    });

    //  Управляет скролом
    if (location.hash !== '') {
        scrollToTarget(location.hash);
    }

    function scrollToTarget(id) {
        let target = document.querySelector(id);

        if (target !== null) {
            let pos = target.offsetTop - 70;
            //в перемеменную pos записываем координаты отступа с верху минус 70, потом метод scrollTo перемещает страницу на соответствующие координаты используя плавность smooth
            window.scrollTo({
                top: pos,
                behavior: 'smooth'
            });
        }
    }

    //управляет видимостью кнопки вверх, подсвечивает активный пункт меню
    function onScroll() {
        let pos = window.pageYOffset;

        if (pos > window.innerHeight / 2) {
            //window.innerHeight это высота окна
            btnUp.classList.add('btnUp-visible');
        } else {
            btnUp.classList.remove('btnUp-visible');
        }

    }
    // фиксированное меню при скроле
    let navbar = document.getElementById('header_top').classList
    let active_class = "top_fixed"

    //Слушаем событие прокрутки

    window.addEventListener('scroll', e => {
        if (pageYOffset > 50) navbar.add(active_class)
        else navbar.remove(active_class)
    })

    //PopUp
    let callbackBtn = document.querySelector('.callback_btn');
    let popupFon = document.querySelector('.popup_fon');
    let = popupClose = document.querySelector('.popup_close');

    callbackBtn.addEventListener('click', function() {
        console.log(1)
        popupFon.classList.add('popup_active');
        popupFon.addEventListener('click', function() {
            popupFon.classList.remove('popup_active');
        });
        popupClose.addEventListener('ckick', function() {
            popupFon.classList.remove('popup_active');
        })
    });
});