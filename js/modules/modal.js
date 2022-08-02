function modal() {
    //MODAL
    const modal = document.querySelector('.modal'),
        modalOpenBtn = document.querySelectorAll('[data-modal]')
    ;

    function showModalByScroll() {
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // window.addEventListener('scroll', showModalByScroll);

    function openModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

        clearInterval(setModalTimer);
    }

    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    modalOpenBtn.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    const setModalTimer = setTimeout(openModal, 1000000);

    

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape' && modal.classList.contains('show')){
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if(e.target.matches('.modal') || e.target.getAttribute('data-close') == ''){
            closeModal();
        }
    });
}

module.exports = modal;