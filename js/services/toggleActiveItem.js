//!!!универсальная функция переключения активного класса между элементами!!!
function toggleActiveItem(e, itemSelector, activeClass) {
    if(e.target && e.target.classList.contains(itemSelector)){
        const [...items] = e.target.parentElement.querySelectorAll(`.${itemSelector}`);

        items.forEach(item => {
            item.classList.remove(activeClass);
        });

        e.target.classList.add(activeClass);
    }
}
//!!!универсальная функция переключения активного класса между элементами!!!

module.exports = toggleActiveItem;