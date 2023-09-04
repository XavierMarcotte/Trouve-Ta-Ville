function CutPopulation(coupe) {
    if (coupe > 1000000) {
      return (coupe / 1000000).toFixed(2) + ' M';
    } else if (coupe > 1000) {
      return (coupe / 1000).toFixed(2) + ' K';
    }
    else {
        return coupe
    }
  }


  export default CutPopulation