document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const navLi = document.querySelectorAll('nav ul li');
    const current = "active"; // You can customize this class

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove 'active-link' class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active-link'));

            // Add 'active-link' class to the clicked link
            this.classList.add('active-link');

            // Scroll to the corresponding section
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            let offsetTop = (window.scrollY < 786) ? 100 : 70;
            const offset = targetSection.offsetTop - offsetTop;

            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });

    // Function to scroll to the active element in the navigation
    function scrollActiveNavLink() {
        // Find the active link
        const activeLink = document.querySelector('.nav-link.active-link');

        // Check if the active link is visible
        if (activeLink) {
            const activeLinkLeft = activeLink.offsetLeft;
            const activeLinkRight = activeLinkLeft + activeLink.offsetWidth;
            const navbar = document.querySelector('nav');
            const navbarLeft = navbar.scrollLeft;
            const navbarRight = navbarLeft + navbar.offsetWidth;

            if (activeLinkLeft < navbarLeft || activeLinkRight > navbarRight) {
                navbar.scroll({
                    left: activeLinkLeft - navbar.offsetWidth / 2 + activeLink.offsetWidth / 2,
                    behavior: "smooth"
                });
            }
        }
    }

    // Scroll to the active link on page load
    scrollActiveNavLink();

    // Add scroll event listener to highlight the link when scrolling
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // Iterate through sections and highlight the corresponding link
        navLinks.forEach(link => {
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection.offsetTop <= scrollPosition && targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
                navLinks.forEach(navLink => navLink.classList.remove('active-link'));
                link.classList.add('active-link');

                // Scroll to the active link when the section is in view
                scrollActiveNavLink();
            }
        });
    });
});
