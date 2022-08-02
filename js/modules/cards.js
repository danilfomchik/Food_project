function cards() {
    // //daily menu class 1st variant
    // class DailyMenu{
    //     constructor(img, title, description, price, parentSelector, ...classes){
    //         this.img = img;
    //         this.title = title;
    //         this.description = description;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);

    //         this.transfer = 28;
    //         this.changeToUAH();
    //     }

    //     changeToUAH() {
    //         this.price = this.price * this.transfer;
    //     }

    //     renderDailyMenu() {
    //         const element = document.createElement('div');

    //         if(this.classes.length == 0){
    //             this.element = 'menu__item';
    //             element.classList.add(this.element);
    //         } else{
    //             this.classes.forEach(className => element.classList.add(className));
    //         }

    //         element.innerHTML = `
    //             <img src=${this.img} alt=${this.title}>
    //             <h3 class="menu__item-subtitle">Меню “${this.title}”</h3>
    //             <div class="menu__item-descr">${this.description}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //             </div>
    //         `;
    //         this.parent.append(element);
    //     }
    // }

    // //daily menu items
    // new DailyMenu(
    //     'img/tabs/vegy.jpg', 
    //     'Фитнес', 
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
    //     15, 
    //     '.menu__field .container'
    // ).renderDailyMenu();

    // new DailyMenu(
    //     'img/tabs/elite.jpg', 
    //     'Премиум', 
    //     'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
    //     33, 
    //     '.menu__field .container',
    //     'menu__item'
    // ).renderDailyMenu();

    // new DailyMenu(
    //     'img/tabs/post.jpg', 
    //     'Постное', 
    //     'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
    //     26, 
    //     '.menu__field .container',
    //     'menu__item'
    // ).renderDailyMenu();


    //daily menu class 2nd variant
    class DailyMenu {
        constructor(img, title, description, price, container){
            this.img = img;
            this.title = title;
            this.description = description;
            this.price = price;
            this.parentContainer = document.querySelector(container)

            this.transfer = 28;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        renderDailyMenu(){
            this.parentContainer.innerHTML += `
                <div class="menu__item">
                    <img src=${this.img} alt=${this.title}>
                    <h3 class="menu__item-subtitle">Меню “${this.title}”</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
        }
    }




    const getResource = async (url) => {
        const result = await fetch(url);
        
        if(!result.ok){
            throw new Error(`Could not fetch ${url}, status: ${result.status}`);
        }

        return await result.json();
    };


    // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({img, title, descr, price}) => {
    //         new DailyMenu(img, title, descr, price, '.menu__field .container').renderDailyMenu();
    //     });
    // })
    // .catch(() => {
    //     console.error('error');
    // })

    // axios.get('http://localhost:3000/menu')
    // .then(response => {
    //     response.data.forEach(({img, title, descr, price}) => {
    //         new DailyMenu(img, title, descr, price, '.menu__field .container').renderDailyMenu();
    //     });
    // })
}

module.exports = cards;