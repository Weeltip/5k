function initMenu() {
    const buttonOpen = document.querySelector('.button-open');
    const buttonClose = document.querySelector('.button-close');
    const menuList = document.querySelector('nav ul');
  
    // Проверяем, что элементы существуют
    if (buttonOpen && buttonClose && menuList) {
      // Открытие меню
      buttonOpen.addEventListener('click', function () {
        menuList.classList.add('menu-active');
      });
  
      // Закрытие меню
      buttonClose.addEventListener('click', function () {
        menuList.classList.remove('menu-active');
      });
    }
  }
  
  // Вызов функции инициализации
  initMenu();