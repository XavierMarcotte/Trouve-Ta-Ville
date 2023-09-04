function form({fetchRepos}){
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchRepos(event.target[0].value);
      };
    return(
        <>
            <h2>Nom de la commune / code postal </h2>
            <form className="formulaire" onSubmit={handleSubmit}>
                <input type="search" placeholder="Troyes, Bar-le-duc, 78800, ..."></input>
                <button type="submit">Lancer la Recherche</button>
            </form>
        </>
    )
}

export default form;