document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    const ratingMessage = document.getElementById("ratingMessage");

    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            const rating = index + 1;
            // Highlight the selected rating stars
            stars.forEach((s, i) => {
                s.style.color = i < rating ? "gold" : "gray";
            });
            // Update rating message
            ratingMessage.textContent = `You rated this ${rating} star${rating > 1 ? "s" : ""}`;
        });
    });
});
