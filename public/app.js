document.getElementById('show-map-btn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const cityInfo = {
        'Tokyo': {
            history: 'Tokyo, originally known as Edo, became the capital of Japan in 1868.',
            places: ['Tokyo Tower', 'Senso-ji Temple', 'Shibuya Crossing']
        },
        'New York': {
            history: 'New York, known as the Big Apple, is famous for its skyline and cultural diversity.',
            places: ['Statue of Liberty', 'Central Park', 'Times Squares']
        },
        'Paris': {
            history: 'Paris, known as the City of Light, is famous for its art, fashion, and culture.',
            places: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral']
        },
        'London': {
            history: 'London is the capital of England and the United Kingdom, known for its history and influence.',
            places: ['Big Ben', 'Tower of London', 'Buckingham Palace']
        },
        'Rome': {
            history: 'Rome, the capital of Italy, is known for its nearly 3,000 years of globally influential art, architecture, and culture.',
            places: ['Colosseum', 'Vatican City', 'Trevi Fountain']
        },
        'Sydney': {
            history: 'Sydney is known for its Sydney Opera House and beautiful harbour.',
            places: ['Sydney Opera House', 'Sydney Harbour Bridge', 'Bondi Beach']
        },
        'Cairo': {
            history: 'Cairo is the capital of Egypt, known for its ancient history and proximity to the Giza pyramid complex.',
            places: ['Pyramids of Giza', 'The Egyptian Museum', 'Khan el-Khalili']
        },
        'Beijing': {
            history: 'Beijing, the capital of China, has a rich historical legacy and is famous for its ancient sites.',
            places: ['Great Wall of China', 'Forbidden City', 'Tiananmen Square']
        },
        // Add more cities as needed
    };

    const cityData = cityInfo[city];

    if (cityData) {
        document.getElementById('city-history').textContent = cityData.history;
        
        // Clear previous list items
        const placesList = document.getElementById('places-list');
        placesList.innerHTML = '';

        // Populate the list with bullet points
        cityData.places.forEach(place => {
            const li = document.createElement('li');
            li.textContent = place;
            placesList.appendChild(li);
        });

        // Show the map
        let mapCoordinates = {
            'Tokyo': [35.6895, 139.6917],
            'New York': [40.7128, -74.0060],
            'Paris': [48.8566, 2.3522],
            'London': [51.5074, -0.1278],
            'Rome': [41.9028, 12.4964],
            'Sydney': [-33.8688, 151.2093],
            'Cairo': [30.0444, 31.2357],
            'Beijing': [39.9042, 116.4074],
        };

        const coordinates = mapCoordinates[city];

        // Show map only if coordinates are defined
        if (coordinates) {
            const map = L.map('map').setView(coordinates, 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            // Add a marker for the city
            L.marker(coordinates).addTo(map).bindPopup(city).openPopup();
        } else {
            alert('City not found on the map!');
        }
    } else {
        alert('City not found!');
    }
});
