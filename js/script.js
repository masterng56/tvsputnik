window.addEventListener('load', function() {
    // меню бургер
    let menuBtn = document.querySelector('.burger');
    let menuList = document.querySelector('.menu_list');
    menuBtn.addEventListener('click', function() {

        if (menuBtn.classList.contains('burger_btn_close')) {
            menuBtn.classList.remove('burger_btn_close');
            menuList.classList.remove('menu_show');
        } else {
            menuBtn.classList.toggle('burger_btn_close');
            menuList.classList.toggle('menu_show');
        }
    });
    //Скролл
    let menu = document.querySelector('.menu');
    // let btnUp = document.querySelector('.btnUp');
    let links = document.querySelectorAll('a');
    let scrollTimeout;


    // window.addEventListener('scroll', function() {
    //     clearTimeout(scrollTimeout); //Функция clearTimeout() отменяет ранее установленный вызов функции
    //     scrollTimeout = setTimeout(onScroll, 200);
    // });

    // нажатие на кнопку скролит вверх
    // btnUp.addEventListener('click', function(e) {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // });

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
    // управляет видимостью кнопки вверх, подсвечивает активный пункт меню
    // function onScroll() {
    //     let pos = window.pageYOffset;

    //     if (pos > window.innerHeight) {
    //         //window.innerHeight это высота окна
    //         btnUp.classList.add('btnUp-visible');
    //     } else {
    //         btnUp.classList.remove('btnUp-visible');
    //     }

    //     for (let i = links.length - 1; i >= 0; i--) {
    //         let link = links[i];
    //         let target = document.querySelector(link.hash);
    //         // .hash часть URL, которая идет после символа решетки '#', включая символ '#'
    //         if ((pos + window.innerHeight / 2) > target.offsetTop) {
    //             // что делать если последний елемент маленький, нужно ли подсвечивать его в меню данный код pos + window.innerHeight / 2 отрабатывает на половине высоты окна браузера. Если убрать /2 то подсвечиваться елемент будет сразу при появлении внизу окна.
    //             menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
    //             link.classList.add('menu__link-active');
    //             break; // первый найденный заголовок будет активным, выход из цикла
    //         }
    //     }
    // }


});