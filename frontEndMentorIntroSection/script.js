let menuOne = document.querySelectorAll('.submenu-1');
let subMenu = document.querySelectorAll('.sub-menu');

let menuTwo = document.querySelectorAll('.submenu-2');
let subMenuTwo = document.querySelectorAll('.sub-menu-two');

let menuMobile = document.querySelector(".menu-mobile");
let navMobile = document.querySelector('.nav-mobile');
let closeMenuMobile = document.querySelector('.close-menu-mobile');

menuMobile.addEventListener("click", ()=>{
    navMobile.classList.add("active")
});
closeMenuMobile.addEventListener("click", ()=>{
    navMobile.classList.remove("active")
})

// menuOne.addEventListener("click", (e)=>{
//     menuOne.classList.toggle("active");
//     subMenuTwo.classList.remove("active");
//     subMenu.classList.toggle("active");
// });

menuOne.forEach((menu) =>{
    menu.addEventListener("click", ()=>{
        subMenuTwo.forEach((submenu2) =>{
            submenu2.classList.remove("active");
        });
        subMenu.forEach((submenu) =>{
            submenu.classList.toggle("active");
        });
    });
})



menuTwo.forEach((menu) =>{
    menu.addEventListener("click", ()=>{
        subMenu.forEach((submenu) =>{
            submenu.classList.remove("active");
        });
        subMenuTwo.forEach((submenu2) =>{
            submenu2.classList.toggle("active");
        });
    });
})

// menuTwo.addEventListener("click", (e)=>{
//     menuTwo.classList.toggle("active");
//     subMenu.classList.remove("active");
//     subMenuTwo.classList.toggle("active");
// });