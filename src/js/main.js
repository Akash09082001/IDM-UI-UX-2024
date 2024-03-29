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


const formHeading = document.getElementById("formHeading")

function openModal(headingText) {
    formHeading.innerHTML = headingText;
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
function getInfoFromButton(button) {
    var heading = button.getAttribute('data-heading');
    var id = button.getAttribute('data-id');
    return { heading: heading, id: id };
}
document.querySelectorAll('.enquireNow').forEach(function (button) {
    button.addEventListener('click', function () {
        var info = getInfoFromButton(this);
        openModal(info.heading);
        console.log("Button ID: " + info.id);
    });
});



const heroSection = document.getElementById('Highlight');
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

