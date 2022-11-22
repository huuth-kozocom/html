/*
アコーディオンを覆う要素に[js-accordion]を付与
アコーディオンボタンに[js-accordion-trigger]を付与
アコーディオンボタンの次の要素が開閉する
*/

const slideDown = (el) => {
    el.style.height = 'auto';
    let h = el.offsetHeight;
    el.style.height = h + 'px';
    el.animate([
      { height: 0 },
      { height: h + 'px' }
    ], {
      duration: 300,
     });
  };

  const slideUp = (el) => {
    el.style.height = 0;
  };

  let activeIndex = null;

  const accordions = document.querySelectorAll('.js-accordion-box');
  accordions.forEach((accordion) => {

    const activeClass = '--active';
    const accordionBtns = accordion.querySelectorAll('.js-accordion-trigger');
    accordionBtns.forEach((accordionBtn, index) => {
      accordionBtn.addEventListener('click', (e) => {
        activeIndex = index;
        e.target.parentNode.classList.toggle(activeClass);
        const content = accordionBtn.nextElementSibling;
        if(e.target.parentNode.classList.contains(activeClass)){
          slideDown(content);
        }else{
          slideUp(content);
        }
        accordionBtns.forEach((accordionBtn, index) => {
          if (activeIndex !== index) {
            accordionBtn.parentNode.classList.remove(activeClass);
            const openedContent = accordionBtn.nextElementSibling;
            slideUp(openedContent);
          }
        });
        let container = accordion.closest('.scroll-control');
        if(accordionBtn.parentNode.classList.contains(activeClass) == false && container !== null ){
          container.classList.remove(activeClass)

        }else if (container !== null){
          container.classList.add(activeClass)
        }
      });
    });
});