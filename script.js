document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
            });
        });
    });
function updateDateTime() {
    const now = new Date();

    const options = {  
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    };

    const formattedDate = now.toLocaleString('en-US', options);

    document.getElementById('currentDateTime').textContent = `Current Date and Time: ${formattedDate}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);
document.getElementById("showDateTimeBtn").addEventListener("click", function () {
    const currentDateTime = new Date().toLocaleString();
    const dateTimeDisplay = document.getElementById("currentDateTime");
    dateTimeDisplay.textContent = `Current Date and Time: ${currentDateTime}`;
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on page load
});
document.getElementById("showDateTimeBtn").addEventListener("click", function () {
    const button = this;
    button.classList.add("bounce");

    // Remove the class after the animation completes
    setTimeout(() => {
        button.classList.remove("bounce");
    }, 400); // 400ms matches the animation duration
});
// Reset carousel animation on slide transition
document.querySelector('#travelCarousel').addEventListener('slid.bs.carousel', function () {
    const activeItem = document.querySelector('.carousel-item.active img');
    
    // Remove and re-add the active class to restart animation
    activeItem.classList.remove('active');
    setTimeout(() => activeItem.classList.add('active'), 10);
});




