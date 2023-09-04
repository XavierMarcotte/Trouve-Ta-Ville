import { useEffect, useState } from "react";

import './../../style/reset.css'



import Form from "../form";
import Title from "../title";
import Results from "../Result";
import getTitleByResultsNumber from "../utils/getresults";

function app(){
    const [isLoading, setIsLoading] = useState(false);
    const [repos, setRepos] = useState([]);
    const [population, setPopulation] = useState(false)

    const CeciForm = async (search) => {
      try {
        setIsLoading(true);
        let response;
        if (isNaN(search)) {
          response = await fetch('https://geo.api.gouv.fr/communes?nom=' + search);
        } 
        else{
          response = await fetch('https://geo.api.gouv.fr/communes?codePostal=' + search);
        }
        const data = await response.json();
        console.log(data);
        setRepos(data)
        setIsLoading(false);
      } catch(error) {
        alert('Erreur lors de la récupération des dépôts.');
      }
    };

     const changerFormat = () => {
        setPopulation(!population)
        console.log(population);
     }
      

    useEffect(() => {
      CeciForm('react');
    }, []);
    
    return(
        <>
            <Title />
            <Form fetchRepos={CeciForm}/>
            <div className="format">
                <p>Résultat : {getTitleByResultsNumber(repos)}</p>
                <button onClick={changerFormat}>Changer le format</button>
            </div>
            {isLoading && <p>Veuillez patienter...</p>}
            {!isLoading && <Results pelo={repos} population={population}/>}
        </>
    )
}



export default app;