export class Adresse {
    id: number;
    rue: string;
    ville: string;
    codePostal: string;
    pays: string;

    constructor(
        id: number,
        rue: string,
        ville: string,
        codePostal: string,
        pays: string) {
        this.id = id;
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
        this.pays = pays;
    }
}
