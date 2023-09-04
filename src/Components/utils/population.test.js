import CutPopulation from "./population";


describe('Fonction getTitleByResultsNumber', () => {

    test('devrait donner 3 chiffres pour un bomre <1000', () => {
      const result = CutPopulation(93);
      expect(result).toBe('93');
    });
  
    test('devrait donner 1 nombre à virgule pour un bomre >1000', () => {
      const result = CutPopulation(1503);
      expect(result).toBe('1.503 K');
    });
  
    test('devrait donner 1 nombre à virgule pour un bomre >1000000', () => {
      const result = CutPopulation(158962492);
      expect(result).toBe('1.58962492 M');
    });
    
  });