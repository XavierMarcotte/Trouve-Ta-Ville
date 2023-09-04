import Card from "../Cards";

function Results({pelo, population}){
    return(
        <section className="main">
            {pelo.map(value => <Card 
                key={value.code}
                ville={value.nom}
                departement={value.codeDepartement}
                postal={value.codesPostaux[0]} 
                population={value.population}
                pops={population}
            />
            )}
           

        </section>
    )
}


export default Results;