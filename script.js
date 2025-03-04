function filterRestaurantsByCity() {
    let city = document.getElementById('cityDropdown').value;
    let restaurantCards = document.querySelectorAll('.restaurant-card');

    restaurantCards.forEach(card => {
        if (city === 'all' || card.getAttribute('data-city') === city) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}