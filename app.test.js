const { calculateTax } = require('./app'); 
 
test('calculates 15% tax correctly', () => { 
    expect(calculateTax(100)).toBe(15); 
}); 
 
test('handles negative amounts', () => { 
    expect(calculateTax(-50)).toBe(0); 
}); 