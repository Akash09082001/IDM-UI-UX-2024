const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal1");

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeAllModals();
    }
});

function closeAllModals() {
    modal.style.display = "none";
    modal1.style.display = "none";
}

function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function openModal1() {
    modal1.style.display = "block";
}
function closeModal1() {
    modal1.style.display = "none";
}


const heroSection = document.getElementById('Placement');
const floatBtn = document.getElementById('floatBtn');

// Initial check when the page loads
updateButtonVisibility();

// Listen for scroll events to dynamically update button visibility
window.addEventListener('scroll', updateButtonVisibility);

function updateButtonVisibility() {
    const isInsideHeroSection = isInHeroSection(floatBtn, heroSection);

    if (isInsideHeroSection) {
        floatBtn.style.visibility = 'hidden';
    } else {
        floatBtn.style.visibility = 'visible';
    }
}

function isInHeroSection(element, heroSection) {
    if (!heroSection) {
        return false;
    }

    const buttonRect = element.getBoundingClientRect();
    const heroRect = heroSection.getBoundingClientRect();

    return (
        buttonRect.top >= heroRect.top &&
        buttonRect.bottom <= heroRect.bottom &&
        buttonRect.left >= heroRect.left &&
        buttonRect.right <= heroRect.right
    );
}

