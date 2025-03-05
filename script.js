document.addEventListener('DOMContentLoaded', () => {
    loadRestaurants();
});

function addRestaurant() {
    Swal.fire({
        title: 'Add New Restaurant',
        html: `
            <input type="text" id="restaurantName" class="swal2-input" placeholder="Restaurant Name">
            <input type="text" id="restaurantLocation" class="swal2-input" placeholder="Location">
            <input type="text" id="restaurantCuisine" class="swal2-input" placeholder="Cuisine">
            <input type="file" id="restaurantImage" class="swal2-input" accept="image/*">
        `,
        confirmButtonText: 'Add',
        preConfirm: () => {
            const name = Swal.getPopup().querySelector('#restaurantName').value;
            const location = Swal.getPopup().querySelector('#restaurantLocation').value;
            const cuisine = Swal.getPopup().querySelector('#restaurantCuisine').value;
            const imageFile = Swal.getPopup().querySelector('#restaurantImage').files[0];
            if (!name || !location || !cuisine || !imageFile) {
                Swal.showValidationMessage(`Please enter all fields and select an image`);
            }
            return { name: name, location: location, cuisine: cuisine, imageFile: imageFile };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const restaurant = result.value;
            const reader = new FileReader();
            reader.onload = (e) => {
                restaurant.imageSrc = e.target.result;
                saveRestaurant(restaurant);
                addRestaurantCard(restaurant);
            };
            reader.readAsDataURL(restaurant.imageFile);
        }
    });
}

function addRestaurantCard(restaurant) {
    const restaurantContainer = document.getElementById('restaurantContainer');
    const restaurantCard = document.createElement('div');
    restaurantCard.className = 'restaurant-card';
    restaurantCard.innerHTML = `
        <img src="${restaurant.imageSrc}" alt="Restaurant Image">
        <h3>${restaurant.name}</h3>
        <p>Location: ${restaurant.location}</p>
        <p>Cuisine: ${restaurant.cuisine}</p>
    `;
    restaurantContainer.appendChild(restaurantCard);
}

function saveRestaurant(restaurant) {
    let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.push(restaurant);
    localStorage.setItem('restaurants', JSON.stringify(restaurants));
}

function loadRestaurants() {
    let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    restaurants.forEach(restaurant => {
        addRestaurantCard(restaurant);
    });
}

function toggleDropdown() {
    document.getElementById('dropdownContent').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.p-pic')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.getElementById('dropdownContent').addEventListener('click', function(event) {
    if (event.target.matches('a[href="index.html"]')) {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html';
            }
        });
    }
});