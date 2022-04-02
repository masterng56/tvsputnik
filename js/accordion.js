window.addEventListener('load', function() {
    document.querySelectorAll('.accordion_title').forEach((item) => item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion_item_active')) {
            parent.classList.remove('accordion_item_active');
        } else {
            document.querySelectorAll('.accordion_item').forEach((child) => child.classList.remove('accordion_item_active'))

            parent.classList.toggle('accordion_item_active');
        }
    }));

    //Аккордион
    let faq = document.querySelector('.accordion_list');

    faq.addEventListener('click', function(e) {
        if (e.target.classList.contains('accordion_title')) {
            toogleItem(e.target);

        }
    });

    function toogleItem(ask) {
        let answer = ask.nextElementSibling;
        //let answer = ask.parentNode.querySelector('.accordion_item');

        if (answer.classList.contains('open')) {
            let animate = answer.animate([
                { height: answer.clientHeight + 'px' },
                { height: 0 }
            ], { duration: 300 });

            animate.addEventListener('finish', function() {
                answer.classList.remove('open');
            });
        } else {
            answer.classList.add('open');

            answer.animate([
                { height: 0 },
                { height: answer.clientHeight + 'px' }
            ], { duration: 300 });
        }
    }


});