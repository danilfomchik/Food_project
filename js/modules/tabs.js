function tabs() {
    //tabs 1 variant
    // const tabheader__items = document.querySelector('.tabheader__items');
    // const tabcontent = document.querySelectorAll('.tabcontent');

    // let deactivateActiveItem = () => {
    //     const activeBlock = document.querySelector('.tabcontent.active');
    //     const activeTitle = document.querySelector('.tabheader__item_active');

    //     if(activeBlock){
    //         activeBlock.classList.remove('active', 'fade');
    //     } 
    //     if (activeTitle){
    //         activeTitle.classList.remove('tabheader__item_active');
    //     }
    // };

    // tabheader__items.addEventListener('click', (event) => {
    //     if(event.target && event.target.matches('.tabheader__item')){
    
    //         tabcontent.forEach(item => {
    //             if(event.target.textContent == item.dataset.name){

    //                 deactivateActiveItem();

    //                 item.classList.add('active', 'fade');
    //                 event.target.classList.add('tabheader__item_active');
    //             }
    //         });
    //     }
    // });

    const deactivateActiveItem = require('../services/deactivateActiveItem');

    //tabs 2 variant
    const tabheader__items = document.querySelector('.tabheader__items');
    const tabcontent = document.querySelectorAll('.tabcontent');

    tabheader__items.addEventListener('click', (e) => {
        if(e.target && e.target.matches('div.tabheader__item')){
            const item = tabheader__items.querySelectorAll('.tabheader__item');

            deactivateActiveItem(item, 'tabheader__item_active');

            tabcontent.forEach(tab => {
                tab.classList.remove('active');
                tab.classList.add('fade');

                if(e.target.textContent === tab.getAttribute('data-name')){
                    e.target.classList.add('tabheader__item_active');
                    tab.classList.toggle('active');
                }
            });
        }
    });

    // function deactivateActiveItem(nodeList, className) {
    //     let arrFromNodeList = Array.from(nodeList);

    //     arrFromNodeList.forEach(item => {
    //         item.classList.remove(className)
    //     });
    // }
}

module.exports = tabs;