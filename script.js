// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  // TODO: Refactor this loop using map() or forEach()
  for (let i = 0; i < stations.length; i++) {
    addStationElement(stations[i]);
  }
}

function addStations(stations) {
  stations.forEach(station => {
    addStationElement(station);
  });


const mapFunc = function addStations(stations) {
  
}



// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  // TODO: Use forEach to display items in wishlist
}

// ❌ Search Feedback
function searchStations(query) {
  // TODO: Filter stations array based on query
  // TODO: Display error if none found
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  // Group stations by city
  const grouped = stations.reduce((acc, station) => {
    if (!acc[station.city]) acc[station.city] = [];
    acc[station.city].push(station);
    return acc;
  }, {});
  // Clear current list
  document.getElementById("station-list").innerHTML = "";
  // Render stations grouped by city
  Object.keys(grouped).forEach(city => {
    const cityHeader = document.createElement("h2");
    cityHeader.textContent = city;
    document.getElementById("station-list").appendChild(cityHeader);
    grouped[city].forEach(station => addStationElement(station));
  });
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
