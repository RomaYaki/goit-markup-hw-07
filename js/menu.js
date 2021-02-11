(() => {
    // const menuBtnRef = document.querySelector("[data-menu-button]");
// не работает  потомучто нетможет  найти  в  штмл [data-menu-button]


    // выбираем элемент со страницы
    // записываем его в  переменную menuBtnRef
    const menuBtnRef = document.querySelector(".menu-button");

    const mobileMenuRef = document.querySelector("[data-menu]");
    // не работает  потомучто нетможет  найти  в  штмл [data-menu-button]

    // menuBtnRef когда у элемента  сработает  событие  click вызвать  функцию которую мы  указали 2м аргуументом
    menuBtnRef.addEventListener("click", () => {

            // const expanded =
            //     menuBtnRef.getAttribute("aria-expanded ") === "true" || false;

            // menuBtnRef.classList.toggle("is-open");
            // menuBtnRef.setAttribute("aria-expanded", !expanded);

        // обращаемся к елементу и добавляем  если есть  и  убираем если  нет клас is-open 
            mobileMenuRef.classList.toggle("is-open");
        });
})();

// (() => {
//     const menuBtnRef = document.querySelector("[data-menu-button]");

//     const mobileMenuRef = document.querySelector("[data-menu]");

//     menuBtnRef.addEventListener("click", () => {
//         const expanded =
//             menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    
//         menuBtnRef.classList.toggle("is-open");
//         menuBtnRef.setAttribute("aria-expanded", !expanded);

//         mobileMenuRef.classList.toggle("is-open");
//     })
// })();