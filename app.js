function calculateTax(amount) { 
    if (amount < 0) return 0; 
    return amount * 0.15; // 15% flat tax 
} 
 
// Update UI if running in a browser 
if (typeof document !== 'undefined') { 
    document.getElementById('result').innerText = "$" + calculateTax(100); 
} 
 
// Export for our automated test framework 
if (typeof module !== 'undefined') { 
    module.exports = { calculateTax }; 
}