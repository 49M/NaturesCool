// Temperature Data
const tempData = {
    winter: { outdoor: [-6, -1] },
    spring: { outdoor: [1, 14] },
    summer: { outdoor: [16, 25] },
    fall: { outdoor: [5, 15] },
};

// Heat Transfer Coefficient and Area
const U = 0.5; // W/m²·K
const A = 100; // m²
const baselineHeatTransfer = U * A; // W/K
const efficiencyReduction = 0.3; // 30% reduction

// Elements
const slider = document.getElementById('season-slider');
const selectedMonth = document.getElementById('selected-month');
const outdoorTemp = document.getElementById('outdoor-temp');
const indoorTemp = document.getElementById('indoor-temp');

// Helper: Get Season and Temperatures
function getSeason(month) {
    if (month <= 2 || month === 12) return 'winter';
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    return 'fall';
}

// Calculate Reduced Indoor Temperature
function calculateIndoorTemperature(avgOutdoor) {
    // Baseline temperature difference
    const deltaT = avgOutdoor; // Assume baseline indoor temp at 20°C
    const reducedHeatTransfer = baselineHeatTransfer * (1 - efficiencyReduction);
    const deltaTReduced = deltaT * (reducedHeatTransfer / baselineHeatTransfer);

    // Adjusted indoor temperature
    return avgOutdoor - deltaTReduced;
}

// Update Temperatures
function updateTemperature() {
    const month = parseInt(slider.value);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const season = getSeason(month);

    // Calculate average outdoor temperature
    const avgOutdoor = (tempData[season].outdoor[0] + tempData[season].outdoor[1]) / 2;
    
    // Calculate adjusted indoor temperature
    const adjustedIndoor = calculateIndoorTemperature(avgOutdoor);

    // Update DOM elements
    selectedMonth.textContent = monthNames[month - 1];
    outdoorTemp.textContent = `${avgOutdoor.toFixed(1)}°C`;
    indoorTemp.textContent = `${adjustedIndoor.toFixed(1)}°C`;
}

// Initialize
slider.addEventListener('input', updateTemperature);
updateTemperature();
