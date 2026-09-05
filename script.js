if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// ============================================
// MOCK DATA - Fuel station data (will be sorted by your location)
// ============================================
const stationsData = {
    petrol: [
        { name: "Indian Oil Petrol Pump", address: "Kasaba Bawada, Kolhapur, Maharashtra 416001", lat: 16.7050, lng: 74.2433, price_per_unit: 103.25, capacity_percent: 75, wait_min: 5, rating: 4.5, review_count: 234, review_snippet: "Clean and efficient", is_open: true },
        { name: "Bharat Petroleum Pump", address: "Shahu Market Road, Kolhapur", lat: 16.7088, lng: 74.2420, price_per_unit: 103.50, capacity_percent: 60, wait_min: 8, rating: 4.3, review_count: 189, review_snippet: "Quick service", is_open: true },
        { name: "HP Petrol Pump", address: "Kawadibazar Road, Karveer, Kolhapur", lat: 16.7075, lng: 74.2460, price_per_unit: 103.15, capacity_percent: 45, wait_min: 3, rating: 4.7, review_count: 456, review_snippet: "Best in the area", is_open: true },
        { name: "Shell Station", address: "Miraj Road, Kolhapur", lat: 16.7095, lng: 74.2395, price_per_unit: 103.35, capacity_percent: 80, wait_min: 10, rating: 4.2, review_count: 312, review_snippet: "Always busy", is_open: true },
        { name: "Indian Oil Express", address: "Vidyanagar, Kolhapur", lat: 16.7110, lng: 74.2480, price_per_unit: 103.05, capacity_percent: 55, wait_min: 6, rating: 4.6, review_count: 278, review_snippet: "Great staff", is_open: true },
        { name: "Bharat Petroleum Express", address: "Laxmi Road, Kolhapur", lat: 16.7038, lng: 74.2452, price_per_unit: 104.10, capacity_percent: 40, wait_min: 4, rating: 4.8, review_count: 523, review_snippet: "Premium quality", is_open: true },
        { name: "HP Fuel Station", address: "Pune-Bangalore Highway, Kolhapur", lat: 16.6982, lng: 74.2558, price_per_unit: 103.20, capacity_percent: 65, wait_min: 7, rating: 4.4, review_count: 345, review_snippet: "Reliable", is_open: true },
        { name: "Essar Fuel Point", address: "Mahadwar Road, Kolhapur", lat: 16.7068, lng: 74.2380, price_per_unit: 103.40, capacity_percent: 70, wait_min: 9, rating: 4.1, review_count: 267, review_snippet: "Good service", is_open: true }
    ],
    diesel: [
        { name: "Indian Oil Diesel Point", address: "Kasaba Bawada, Kolhapur", lat: 16.7050, lng: 74.2433, price_per_unit: 89.42, capacity_percent: 70, wait_min: 8, rating: 4.6, review_count: 298, review_snippet: "Best diesel quality", is_open: true },
        { name: "Bharat Petroleum Diesel", address: "Shahu Market Road, Kolhapur", lat: 16.7088, lng: 74.2420, price_per_unit: 89.65, capacity_percent: 55, wait_min: 5, rating: 4.4, review_count: 234, review_snippet: "Truck friendly", is_open: true },
        { name: "HP Diesel Express", address: "Kawadibazar Road, Kolhapur", lat: 16.7075, lng: 74.2460, price_per_unit: 89.55, capacity_percent: 45, wait_min: 4, rating: 4.7, review_count: 367, review_snippet: "Always stocked", is_open: true },
        { name: "Shell Diesel Hub", address: "Miraj Road, Kolhapur", lat: 16.7095, lng: 74.2395, price_per_unit: 90.10, capacity_percent: 60, wait_min: 6, rating: 4.3, review_count: 145, review_snippet: "Premium diesel", is_open: true },
        { name: "Essar Diesel Station", address: "Mahalaxmi Road, Kolhapur", lat: 16.7028, lng: 74.2465, price_per_unit: 89.25, capacity_percent: 85, wait_min: 12, rating: 3.9, review_count: 178, review_snippet: "Gets busy", is_open: true },
        { name: "Reliance Diesel Point", address: "Shivaji Mhatre Road, Kolhapur", lat: 16.7055, lng: 74.2440, price_per_unit: 89.30, capacity_percent: 80, wait_min: 10, rating: 4.2, review_count: 189, review_snippet: "Bulk discounts", is_open: true },
        { name: "Castrol Diesel Stop", address: "Khanderi Circle, Kolhapur", lat: 16.7049, lng: 74.2484, price_per_unit: 89.48, capacity_percent: 50, wait_min: 5, rating: 4.5, review_count: 256, review_snippet: "Great for trucks", is_open: true },
        { name: "PSO Diesel Hub", address: "Gandhi Chowk, Kolhapur", lat: 16.7044, lng: 74.2402, price_per_unit: 89.38, capacity_percent: 65, wait_min: 7, rating: 4.1, review_count: 198, review_snippet: "Local fleet preferred", is_open: true }
    ],
    cng: [
        { name: "Kolhapur CNG Station", address: "Shahu Market Road, Kolhapur", lat: 16.7088, lng: 74.2420, price_per_unit: 79.56, capacity_percent: 65, wait_min: 7, rating: 4.8, review_count: 567, review_snippet: "Fast filling", is_open: true },
        { name: "City CNG Pump", address: "Kasaba Bawada, Kolhapur", lat: 16.7050, lng: 74.2433, price_per_unit: 79.75, capacity_percent: 55, wait_min: 6, rating: 4.5, review_count: 345, review_snippet: "Well maintained", is_open: true },
        { name: "Mahalaxmi CNG Hub", address: "Mahalaxmi Road, Kolhapur", lat: 16.7028, lng: 74.2465, price_per_unit: 79.45, capacity_percent: 70, wait_min: 8, rating: 4.6, review_count: 423, review_snippet: "Auto drivers love it", is_open: true },
        { name: "Green Kolhapur CNG", address: "Karveer Road, Kolhapur", lat: 16.7075, lng: 74.2460, price_per_unit: 79.68, capacity_percent: 45, wait_min: 4, rating: 4.3, review_count: 289, review_snippet: "Clean facility", is_open: true },
        { name: "Sai CNG Point", address: "Shivaji Mhatre Road, Kolhapur", lat: 16.7055, lng: 74.2440, price_per_unit: 79.52, capacity_percent: 60, wait_min: 6, rating: 4.7, review_count: 378, review_snippet: "Never long wait", is_open: true },
        { name: "Eco CNG Station", address: "Gandhi Chowk, Kolhapur", lat: 16.7044, lng: 74.2402, price_per_unit: 79.88, capacity_percent: 75, wait_min: 9, rating: 4.4, review_count: 234, review_snippet: "Eco-friendly", is_open: true },
        { name: "Sun Mobility CNG", address: "Vidyanagar, Kolhapur", lat: 16.7110, lng: 74.2480, price_per_unit: 79.60, capacity_percent: 50, wait_min: 5, rating: 4.9, review_count: 489, review_snippet: "Fastest filling", is_open: true },
        { name: "Apex CNG", address: "Laxmi Road, Kolhapur", lat: 16.7038, lng: 74.2452, price_per_unit: 79.42, capacity_percent: 80, wait_min: 10, rating: 4.2, review_count: 198, review_snippet: "IT park convenience", is_open: true }
    ],
    lpg: [
        { name: "HP LPG Agency", address: "Kasaba Bawada, Kolhapur", lat: 16.7050, lng: 74.2433, price_per_unit: 803.50, capacity_percent: 60, wait_min: 5, rating: 4.7, review_count: 456, review_snippet: "Always on time", is_open: true },
        { name: "Bharat LPG Supply", address: "Shahu Market Road, Kolhapur", lat: 16.7088, lng: 74.2420, price_per_unit: 805.00, capacity_percent: 70, wait_min: 7, rating: 4.4, review_count: 289, review_snippet: "Good coverage", is_open: true },
        { name: "Indian LPG Distributors", address: "Shivaji Nagar, Kolhapur", lat: 16.7064, lng: 74.2468, price_per_unit: 802.00, capacity_percent: 55, wait_min: 4, rating: 4.6, review_count: 378, review_snippet: "Quick refill", is_open: true },
        { name: "Essar LPG Center", address: "Mahalaxmi Road, Kolhapur", lat: 16.7028, lng: 74.2465, price_per_unit: 804.50, capacity_percent: 45, wait_min: 3, rating: 4.8, review_count: 523, review_snippet: "Excellent service", is_open: true },
        { name: "Reliance LPG", address: "Vidyanagar, Kolhapur", lat: 16.7110, lng: 74.2480, price_per_unit: 801.50, capacity_percent: 80, wait_min: 8, rating: 4.3, review_count: 234, review_snippet: "Reliable supply", is_open: true },
        { name: "Coastal LPG Agency", address: "Gandhi Chowk, Kolhapur", lat: 16.7044, lng: 74.2402, price_per_unit: 806.00, capacity_percent: 65, wait_min: 6, rating: 4.5, review_count: 312, review_snippet: "Suburban reliable", is_open: true },
        { name: "Sahara Gas Depot", address: "Karveer Road, Kolhapur", lat: 16.7075, lng: 74.2460, price_per_unit: 803.00, capacity_percent: 50, wait_min: 4, rating: 4.4, review_count: 267, review_snippet: "Consistent delivery", is_open: true },
        { name: "Evergreen LPG", address: "Laxmi Road, Kolhapur", lat: 16.7038, lng: 74.2452, price_per_unit: 804.00, capacity_percent: 70, wait_min: 7, rating: 4.6, review_count: 389, review_snippet: "Modern facilities", is_open: true }
    ],
    ev: [
        { name: "Kolhapur EV Charger - Tata Power", address: "Near Mahalaxmi Temple, Kolhapur", lat: 16.7012, lng: 74.2446, price_per_unit: 9.50, capacity_percent: 50, wait_min: 0, rating: 4.9, review_count: 678, review_snippet: "Fastest chargers", is_open: true, plug_types: { type2: true, ccs: true, gbt: true }, slots_total: 12, slots_occupied: 6, charge_speed_kw: 50, est_full_charge_min: 45 },
        { name: "ChargeZone Kolhapur", address: "Shahu Market Road, Kolhapur", lat: 16.7088, lng: 74.2420, price_per_unit: 11.00, capacity_percent: 60, wait_min: 0, rating: 4.6, review_count: 423, review_snippet: "Premium experience", is_open: true, plug_types: { type1: true, type2: true, ccs: true, chademo: true }, slots_total: 8, slots_occupied: 5, charge_speed_kw: 30, est_full_charge_min: 65 },
        { name: "Reliance EV Point", address: "Vidyanagar, Kolhapur", lat: 16.7110, lng: 74.2480, price_per_unit: 8.50, capacity_percent: 40, wait_min: 0, rating: 4.8, review_count: 534, review_snippet: "Most affordable", is_open: true, plug_types: { type2: true, ccs: true, gbt: true }, slots_total: 10, slots_occupied: 4, charge_speed_kw: 60, est_full_charge_min: 35 },
        { name: "Fortum Fast Charge", address: "Mahalaxmi Road, Kolhapur", lat: 16.7028, lng: 74.2465, price_per_unit: 12.50, capacity_percent: 75, wait_min: 0, rating: 4.4, review_count: 289, review_snippet: "Ultra-fast charging", is_open: true, plug_types: { type2: true, ccs: true, chademo: true }, slots_total: 6, slots_occupied: 5, charge_speed_kw: 150, est_full_charge_min: 20 },
        { name: "EESL Public Charging", address: "Karveer Road, Kolhapur", lat: 16.7075, lng: 74.2460, price_per_unit: 7.50, capacity_percent: 55, wait_min: 0, rating: 4.5, review_count: 367, review_snippet: "Government rates", is_open: true, plug_types: { type1: true, type2: true, gbt: true }, slots_total: 16, slots_occupied: 9, charge_speed_kw: 22, est_full_charge_min: 120 },
        { name: "Sun Mobility Swap", address: "Miraj Road, Kolhapur", lat: 16.7095, lng: 74.2395, price_per_unit: 0, capacity_percent: 35, wait_min: 0, rating: 4.7, review_count: 445, review_snippet: "5 min battery swap", is_open: true, plug_types: { swap: true }, slots_total: 8, slots_occupied: 3, charge_speed_kw: 0, est_full_charge_min: 5 },
        { name: "Ather Grid Charge", address: "Laxmi Road, Kolhapur", lat: 16.7038, lng: 74.2452, price_per_unit: 10.00, capacity_percent: 65, wait_min: 0, rating: 4.8, review_count: 612, review_snippet: "Free for Ather", is_open: true, plug_types: { type2: true }, slots_total: 4, slots_occupied: 3, charge_speed_kw: 7, est_full_charge_min: 180 },
        { name: "NIO Power Kolhapur", address: "Gandhi Chowk, Kolhapur", lat: 16.7044, lng: 74.2402, price_per_unit: 15.00, capacity_percent: 30, wait_min: 0, rating: 4.6, review_count: 198, review_snippet: "Premium with WiFi", is_open: true, plug_types: { type2: true, ccs: true, chademo: true, gbt: true }, slots_total: 10, slots_occupied: 3, charge_speed_kw: 120, est_full_charge_min: 25 }
    ],
    gas: [
        { name: "HP Gas Agency", address: "Kasaba Bawada, Kolhapur", lat: 16.7050, lng: 74.2433, price_per_unit: 803.50, capacity_percent: 60, wait_min: 0, rating: 4.6, review_count: 234, review_snippet: "Same day delivery", is_open: true },
        { name: "Bharat Gas Depot", address: "Shahu Market Road, Kolhapur", lat: 16.7088, lng: 74.2420, price_per_unit: 805.00, capacity_percent: 55, wait_min: 0, rating: 4.8, review_count: 312, review_snippet: "Best delivery", is_open: true },
        { name: "Indian Gas Point", address: "Vidyanagar, Kolhapur", lat: 16.7110, lng: 74.2480, price_per_unit: 802.00, capacity_percent: 70, wait_min: 0, rating: 4.4, review_count: 189, review_snippet: "Always in stock", is_open: true },
        { name: "Essar Gas Point", address: "Miraj Road, Kolhapur", lat: 16.7095, lng: 74.2395, price_per_unit: 804.50, capacity_percent: 45, wait_min: 0, rating: 4.7, review_count: 267, review_snippet: "New customer discount", is_open: true },
        { name: "Reliance Gas", address: "Mahalaxmi Road, Kolhapur", lat: 16.7028, lng: 74.2465, price_per_unit: 801.50, capacity_percent: 65, wait_min: 0, rating: 4.5, review_count: 178, review_snippet: "Easy online booking", is_open: true },
        { name: "Sahara Gas Agency", address: "Gandhi Chowk, Kolhapur", lat: 16.7044, lng: 74.2402, price_per_unit: 803.00, capacity_percent: 75, wait_min: 0, rating: 4.3, review_count: 156, review_snippet: "City area coverage", is_open: true },
        { name: "HP Gas - Shivaji Nagar", address: "Shivaji Nagar, Kolhapur", lat: 16.7064, lng: 74.2468, price_per_unit: 803.50, capacity_percent: 50, wait_min: 0, rating: 4.9, review_count: 423, review_snippet: "Highly recommended", is_open: true },
        { name: "Bharat Gas - Laxmi Road", address: "Laxmi Road, Kolhapur", lat: 16.7038, lng: 74.2452, price_per_unit: 806.00, capacity_percent: 60, wait_min: 0, rating: 4.4, review_count: 134, review_snippet: "Well connected", is_open: true }
    ]
};



// Pre-loaded reviews
const mockReviews = [
    {
        id: 1,
        name: "Rajesh Kumar",
        initial: "R",
        color: "#FF6B00",
        rating: 5,
        fuel: "petrol",
        text: "Best fuel station in Pune! The staff is incredibly helpful and they always maintain high quality fuel. Been a loyal customer for 3 years now.",
        time: "2 hours ago"
    },
    {
        id: 2,
        name: "Priya Sharma",
        initial: "P",
        color: "#00FFD1",
        rating: 4,
        fuel: "ev",
        text: "Tata Power EV Hub is amazing. Fast charging and clean facilities. Wish they had more slots though.",
        time: "5 hours ago"
    },
    {
        id: 3,
        name: "Amit Patel",
        initial: "A",
        color: "#4A90D9",
        rating: 5,
        fuel: "diesel",
        text: "Perfect for my commercial vehicle. Always get diesel at fair price and never face quality issues.",
        time: "1 day ago"
    },
    {
        id: 4,
        name: "Sneha Joshi",
        initial: "S",
        color: "#00C853",
        rating: 4,
        fuel: "cng",
        text: "CNG station near my house is great. Fast filling and saves money compared to petrol.",
        time: "1 day ago"
    },
    {
        id: 5,
        name: "Vikram Singh",
        initial: "V",
        color: "#FFD600",
        rating: 5,
        fuel: "gas",
        text: "HP Gas delivers within 24 hours every time. Their online booking system is super convenient!",
        time: "2 days ago"
    }
];



// ============================================
// GLOBAL STATE
// ============================================
const DEFAULT_LOCATION = { lat: 20.5937, lng: 78.9629, label: 'India' };
let userLat = DEFAULT_LOCATION.lat;
let userLng = DEFAULT_LOCATION.lng;
let activeFuelType = 'petrol';
let locationDetected = false;
let map = null;
let markers = [];
let markersData = [];
let selectedRating = 0;
let bookingStep = 1;
let selectedProvider = 'hp';
let selectedCylinder = '14.2';
let selectedPayment = 'online';
let placesService = null;
let currentStations = [];
let currentPlaceInfoWindow = null;
let placeSearchThrottle = null;
// ============================================
// GOOGLE MAPS INITIALIZATION
// ============================================
let userMarkers = []; // Track user location markers



function initMap() {
    // Check if Google Maps is loaded
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.warn('Google Maps not loaded');
        return;
    }

    const darkMapStyle = [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#263c3f" }] },
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }] },
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
        { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }] },
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }] },
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }] },
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }] },
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }] },
        { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }] },
        { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }] },
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] },
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
        { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }] }
    ];

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: userLat, lng: userLng },
        styles: darkMapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        minZoom: 4
    });

    placesService = new google.maps.places.PlacesService(map);
    currentPlaceInfoWindow = new google.maps.InfoWindow();

    // Add user location marker
    addUserMarker();

    // Add station markers for current view
    updateStationMarkers();
    searchNearbyStations();

    // Make map wrapper visible
    document.getElementById('mapWrapper').classList.add('visible');

    // Click on any map location to set it as current
    map.addListener('click', (event) => {
        handleMapClick(event.latLng);
    });

    // Refresh nearby stations when the map moves or zooms
    map.addListener('idle', () => {
        if (placeSearchThrottle) {
            clearTimeout(placeSearchThrottle);
        }
        placeSearchThrottle = setTimeout(searchNearbyStations, 500);
    });
}