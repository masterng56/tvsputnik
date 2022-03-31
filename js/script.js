window.addEventListener('load', function() {
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

});