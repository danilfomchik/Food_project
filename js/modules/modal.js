function openModal(modalSelector, setModalTimer){
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if(setModalTimer){
        clearInterval(setModalTimer);
    }
}

function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

function modal(triggerSelector, modalSelector, setModalTimer) {
    //MODAL
    const modal = document.querySelector(modalSelector),
        modalOpenBtn = document.querySelectorAll(triggerSelector)
    ;

    function showModalByScroll() {
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal(modalSelector, setModalTimer);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // window.addEventListener('scroll', showModalByScroll);

    modalOpenBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal(modalSelector, setModalTimer);
        });
    });


    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.classList.contains('show')){
            closeModal(modalSelector);
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target.matches('.modal') || e.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    });
}

export default modal;
export {closeModal, openModal};