const Contact = () => {
    return(
        <>
            <div className="row col-5 offset-4 mt-5">
            <form action="" method="post" autocomplete="off">
                <div className="mb-3">
                    <label for="nom" className="form-label titre">Nom :</label>
                    <input type="text" required className="form-control texte" id="nom" placeholder="Entrez votre nom"/>
                </div>
                <div className="mb-3">
                    <label for="prenom" className="form-label titre">Prénom :</label>
                    <input type="text" required className="form-control texte" id="prenom" placeholder="Entrez votre prénom"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label titre">Email :</label>
                    <input type="email" required className="form-control texte" id="email" placeholder="Entrez votre email"/>
                </div>
                <div className="mb-3">
                    <label for="sujet" className="form-label titre">Sujet :</label>
                    <input className="form-control texte" required list="listSujet texte" id="sujet" placeholder="Votre sujet d'envoie"/>  
                </div>
                <div className="mb-3">
                    <textarea name="comments" className="texte" id="comments" placeholder="Plus de détails ..." cols="77" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-warning texte">Envoyer</button>
                <button type="reset" className="btn btn-dark texte">Reset</button>
            </form>
            </div>
        </>
    )
}

export default Contact