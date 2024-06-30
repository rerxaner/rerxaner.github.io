// clear from before unload
window.onbeforeunload = () => {
    for (const from of document.getElementsByTagName("form")) {
        from.reset();
    }
};

// Toggle Burger
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

// Panggil fungsi navSlide untuk mengaktifkan event listener
navSlide();
