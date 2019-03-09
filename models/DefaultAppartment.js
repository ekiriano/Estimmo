const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DefaultAppartmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  rue: {
    type: String,
    required: true
  },
  code_postal: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  surface: {
    type: Number,
    required: true,
    min: 0
  },
  nombre_pieces: {
    type: Number,
    required: true,
    min: 0
  },
  nombre_salle_bain: {
    type: Number,
    required: true,
    min: 0
  },
  etage: {
    type: Number,
    required: true,
    min: 0
  },
  nombre_etage_total: {
    type: Number,
    required: true,
    min: 0
  },
  //caracteristiquesFacultatives : @todo
  annee_construction: {
    type: Number,
    required: true,
    min: 1000 // ?
  },
  diagnostic_performance_energetique: {
    type: String,
    required: true
    //enum: ["A", "B", "C", "D", "E", "F", "G"]
  },
  etat_bien: {
    type: String,
    required: true
    /*enum: [
      "standard",
      "rafraichissment_necessaire",
      "travaux_importants_necessaires"
    ]*/
  },
  qualite_maison: {
    type: String,
    required: true
    // enum: ["inferieure", "comparable", "suprerieure"]
  },
  luminosite: {
    type: String,
    required: true
    // enum: ["sombre", "peu_clair", "standard", "clair", "tres_clair"]
  },
  calme: {
    type: String,
    required: true
    // enum: ["tres_bruyant", "bruyant", "standard", "calme", "tres_calme"]
  },
  proximite_transports: {
    type: String,
    required: true
    // enum: ["tres_elogoignees", "eloigne", "standard", "proche", "tres_proche"]
  },
  qualite_toiture: {
    type: String,
    required: true
    // enum: ["a_renover", "standard", "refaite_a_neuf"]
  },
  prix_estimation: {
    type: Number,
    min: 0
  }

  // add longtitue latitude
});

module.exports = DefaultAppartment = mongoose.model(
  "defaultAppartment",
  DefaultAppartmentSchema
);
