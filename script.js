const navbarHamburger = document.getElementsByClassName("navbar-hamburger")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

navbarHamburger.addEventListener("click", () => {
    // Add or remove activate class
    navbarLinks.classList.toggle("active")
})