document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active"); 
        menuToggle.classList.toggle("active"); 
    });

    // Закриття меню при натисканні на посилання
    document.querySelectorAll(".navbar ul li a").forEach(item => {
        item.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
});
