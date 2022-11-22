// ======== MicroModal========
MicroModal.init({
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
});


// ======== HAMBURGER MENU ========
const hamburgerTrigger = document.getElementById('hamburger-trigger');
const hamburgerBody = document.getElementById('hamburger-body');
const html = document.getElementsByTagName('html')[0];
hamburgerTrigger.addEventListener('click', () => {
    hamburgerTrigger.classList.toggle('--active');
    hamburgerBody.classList.toggle('--active');
    html.classList.toggle('no-scroll');
});

// ======== LAZY LOAD ========
lazyload();


// ======== BUY XENO ========
const checkGet = document.querySelectorAll('.buy-xeno__form__select__box input');
const btnBox = document.getElementsByClassName('buy-xeno__form__btn__box')[0];
checkGet.forEach((check) => {
    check.addEventListener('click', () => {
        if (check.checked) {
            checkGet.forEach((allChecks) => {
                allChecks.checked = false;
            });
            check.checked = true;
            btnBox.classList.add('--active');
            if(check.name == 'hikaru'){
                btnBox.classList.add('--hikaru');
            }else{
                btnBox.classList.remove('--hikaru');
            }
        }else{
            btnBox.classList.remove('--active');
        }
    });
});

// ======== LOTTERY ========
const tabList = document.querySelectorAll('.lottery__tab__item');
const tabContent = document.querySelectorAll('.lottery__table');

document.addEventListener('DOMContentLoaded', function(){
  for(let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', tabSwitch);
  }
  function tabSwitch(){
    document.querySelectorAll('.--tab-active')[0].classList.remove('--tab-active');
    this.classList.add('--tab-active');
    document.querySelectorAll('.--tab-show')[0].classList.remove('--tab-show');
    const aryTabs = Array.prototype.slice.call(tabList);
    const index = aryTabs.indexOf(this);
    tabContent[index].classList.add('--tab-show');
  };
});

// ======== SMOOTH SCROLL ========
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 600,
    header: '#header'
});