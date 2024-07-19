document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");
    const navLinks = document.querySelectorAll('.nav-links a');

    function showMenu() {
        navMenu.classList.add("show");
        menuToggle.style.display = "none";
        menuClose.style.display = "block";
    }

    function hideMenu() {
        navMenu.classList.remove("show");
        menuToggle.style.display = "block";
        menuClose.style.display = "none";
    }

    // Show menu on toggle click
    menuToggle.addEventListener("click", function(event) {
        if (window.innerWidth <= 768) {
            event.stopPropagation(); // Prevent click event from bubbling up to the document
            showMenu();
        }
    });
    
    // Hide menu on close click
    menuClose.addEventListener("click", function(event) {
        if (window.innerWidth <= 768) {
            event.stopPropagation(); // Prevent click event from bubbling up to the document
            hideMenu();
        }
    });
    
    // Hide menu when clicking on any nav link
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            if (window.innerWidth <= 768) {
                hideMenu();
            }
        });
    });

    // Hide menu when clicking outside the menu
    document.addEventListener("click", function() {
        if (navMenu.classList.contains("show")) {
            hideMenu();
        }
    });

    // Prevent menu from hiding when clicking inside the menu
    navMenu.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // Hide menu when scrolling down
    window.addEventListener("scroll", function() {
        if (navMenu.classList.contains("show")) {
            hideMenu();
        }
    });
});


