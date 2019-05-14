import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    marque: {
        type: String,
        required: true,
    },
});

const Car = mongoose.model('Car', carSchema);

export default Car;


/*
*Table Car MongoDB
*
* marque : text
* modele : text
* annee : nbr
* place : nbr
* puissance : nbr
* like : nbr
* carburant : GPL | Essence | Diesel | Electrique
* localisation : GPS
* disponibilite [{debut:Time,fin:Time,prix:Nbr},{debut:Time,fin:Time,prix:Nbr},{...}]
* boite_a_vitesse : boolean (manuel | auto)
* proprio : ObjectID user
* */
