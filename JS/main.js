//Javascript for making back to top button able to function.
const scrollToTopButton = document.getElementById("scrollToTopButton");


scrollToTopButton.addEventListener("click", () => {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
