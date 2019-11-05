const { isTriangle, isEquilateral, isIsosceles, typeOfTriangle } = require('../triangle');

describe('Triangle', () => {

  describe('isTriangle', () => {
    test('Side Lengths of Zero', () => {
      expect(isTriangle(0,0,0)).toBe(false);
    });

    test('One Negative Side Length', () => {
      expect(isTriangle(3,4,-5)).toBe(false);
    });

    test('Two Negative Side Lengths', () => {
      expect(isTriangle(3,-4,-5)).toBe(false);
    });

    test('Three Negative Side Lengths', () => {
      expect(isTriangle(-3,-4,-5)).toBe(false);
    });

    test('Improper sides', () => {
      expect(isTriangle(10,5,2)).toBe(false);
    });

    test('Real Triangle', () => {
      expect(isTriangle(3,4,5)).toBe(true);
    });
  });

  describe('isEquilateral', () => {
    test('Non-Equilateral Triangle', () => {
      expect(isEquilateral(3, 4, 5)).toBe(false);
    });

    test('Equilateral Triangle', () => {
      expect(isEquilateral(3, 3, 3)).toBe(true);
    });
  });

  describe('isIsosceles', () => {
    test('Non-Isosceles Triangle', () => {
      expect(isIsosceles(3, 4, 5)).toBe(false);
    });

    test('Isosceles Triangle: Last Different', () => {
      expect(isIsosceles(3, 3, 2)).toBe(true);
    });
    
    test('Isosceles Triangle: Middle Different', () => {
      expect(isIsosceles(3, 2, 3)).toBe(true);
    });

    test('Isosceles Triangle: First Different', () => {
      expect(isIsosceles(2, 3, 3)).toBe(true);
    });

  });

  describe('typeOfTriangle', () => {

    test('Non-Triangle: Improper Sides', () => {
      expect(typeOfTriangle(10,5,2)).toBe('Not a Valid Triangle');
    });

    test('Non-Triangle: Zero Sides', () => {
      expect(typeOfTriangle()).toBe('Not a Valid Triangle');
    });

    test('Non-Triangle: Two Sides', () => {
      expect(typeOfTriangle(10,5)).toBe('Not a Valid Triangle');
    });
    
    test('Non-Triangle: One Side', () => {
      expect(typeOfTriangle(10)).toBe('Not a Valid Triangle');
    });

    test('Equilateral Triangle', () => {
      expect(typeOfTriangle(5, 5, 5)).toBe('Equilateral Triangle');
    });

    test('Isosceles Triangle', () => {
      expect(typeOfTriangle(6, 3, 6)).toBe('Isosceles Triangle');
    });

    test('Scalene Triangle', () => {
      expect(typeOfTriangle(3,4,5)).toBe('Scalene Triangle');
    });
  });
});