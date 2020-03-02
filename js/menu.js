function openMenu() {
    var burger = document.querySelector(".nav-img");
    var ul = document.getElementsByTagName("ul")[0];
    burger.addEventListener('click', function() {
        ul.setAttribute("class", "red");
    })
} 