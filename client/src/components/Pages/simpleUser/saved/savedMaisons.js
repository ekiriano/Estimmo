import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getSavedMaisons,
  deleteSavedMaison
} from "../../../../actions/defaultMaisonActions";
import { Link } from "react-router-dom";

class savedMaisons extends Component {
  componentDidMount() {
    this.props.getSavedMaisons();
  }
  onClickDelete(id) {
    this.props.deleteSavedMaison(id);
  }

  render() {
    var maisonCards = this.props.savedMaisons.map((maison, i) => {
      return (
        <div className="card mb-is-1" key={i}>
          <header className="card-header">
            <p className="card-header-title">
              Addresse : {maison.rue} {maison.code_postal} {maison.ville}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <div className="columns">
                <div className="column is-half">
                  <p>
                    {" "}
                    <i className="uil uil-ruler-combined" /> surface habitable :{" "}
                    {maison.surface_habitable}m²
                  </p>
                  <p>
                    {" "}
                    <i className="uil uil-ruler-combined" /> surface
                    constructible : {maison.surface_habitable_constructible}m²
                  </p>
                  <p>
                    {" "}
                    <i className="uil uil-ruler-combined" />
                    surface totale terrain : {maison.surface_totale_terrain}m²
                  </p>
                  <p>nombre pièces : {maison.nombre_pieces}</p>
                  <p>nombre salle bain : {maison.nombre_salle_bain}</p>
                  <p>nombre d'étages : {maison.nombre_niveaux}</p>
                </div>
                <div className="column is-half">
                  <p>
                    <i className="uil uil-clock-two" />
                    année construction : {maison.annee_construction}
                  </p>
                  <p>
                    <i className="uil uil-bolt-alt" />
                    DPE : {maison.diagnostic_performance_energetique}{" "}
                  </p>
                  <p>etat bien : {maison.etat_bien}</p>
                  <p>qualité luminosité : {maison.luminosite}</p>
                  <p>calme : {maison.calme}</p>
                  <p>proximité : {maison.proximite_transports}</p>
                </div>
              </div>
              <p>Estimmé a : {maison.prix_estimation} €</p>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <button
                onClick={this.onClickDelete.bind(this, maison._id)}
                type="button"
                className="button is-danger "
              >
                <i className="uil uil-trash-alt" /> Supprimer
              </button>
            </div>
          </footer>
        </div>
      );
    });

    return (
      <div>
        <h1 className="mb-is-0_5">Mes Estimations de maisons</h1>
        <div className="columns is-centered">
          <div className="column is-6">
            {this.props.savedMaisons.length === 0 ? (
              <div>
                <p>
                  <b>Vous n'avez aucune estimation de maison sauvegardée </b>
                </p>
                <Link
                  to="/estimmation/simple/maison"
                  className="button is-success mt-is-0_5"
                >
                  <i class="uil uil-plus-circle" /> Estimmer Maintenant
                </Link>
              </div>
            ) : (
              maisonCards
            )}
          </div>
        </div>
      </div>
    );
  }
}

savedMaisons.propTypes = {
  getSavedMaisons: PropTypes.func.isRequired,
  deleteSavedMaison: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  savedMaisons: state.simpleMaisons.savedMaisons
});

export default connect(
  mapStateToProps,
  { getSavedMaisons, deleteSavedMaison }
)(savedMaisons);
