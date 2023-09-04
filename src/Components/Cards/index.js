import CutPopulation from "../utils/population";

function Card({ville,departement, postal,population, pops}) {
    return (
        <div className="card">
            <h3>{ville}<p>- {departement}</p></h3>
            <span className="firstspan">Code postal :  <p>{postal}</p></span>
            {pops && <span className="secondspan">Population :  <p>{population}</p></span>}
            {!pops && <span className="secondspan">Population :  <p>{CutPopulation(population)}</p></span>}
        </div>
    );
  }
  
  export default Card;