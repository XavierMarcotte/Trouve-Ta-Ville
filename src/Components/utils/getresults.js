function getTitleByResultsNumber(results) {
    switch (results.length) {
      case 0:
        return 'Aucun résultat';
      case 1 :
        return '1 seul résultat';
      default:
        return `${results.length} résultats`;
    }
  }
  
  export default getTitleByResultsNumber;