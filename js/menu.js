

const slideMenu = ({openBtn, menu, classActiveMenu, closeTrigger}) => {

  const burgerBtn = document.querySelector(openBtn);
  const navigation = document.querySelector(menu);
  const navigationClose = document.querySelectorAll(closeTrigger);

  const closeMenu = event => {

    if (event._nav || 
      (event.target.closest(menu) && 
      !event.target.closest(closeTrigger))) return;

    if (event.type === 'keydown' && event.code !== 'Escape') return;


    navigation.classList.remove(classActiveMenu);
    document.removeEventListener('click', closeMenu);
    document.removeEventListener('keydown', closeMenu);
  };
  
  
  burgerBtn.addEventListener('click', event => {
    navigation.classList.add(classActiveMenu);
    event._nav = true;

    document.addEventListener('click', closeMenu);
    document.addEventListener('keydown', closeMenu);
    
  });

  navigationClose.forEach((item) => {
    item.addEventListener('click', closeMenu);
    });
  
};

export default slideMenu;