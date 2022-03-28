document.querySelectorAll('.accordion_title').forEach((item) => item.addEventListener('click', () => {
    const parent = item.parentNode;


    if (parent.classList.contains('accordion_item_active')) {
        parent.classList.remove('accordion_item_active');
    } else {
        document.querySelectorAll('.accordion_item').forEach((child) => child.classList.remove('accordion_item_active'))

        parent.classList.toggle('accordion_item_active');
    }
}));