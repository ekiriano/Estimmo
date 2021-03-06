import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import SavedAppartements from "./simpleUser/saved/savedAppartements";
import SavedMaisons from "./simpleUser/saved/savedMaisons";
import SavedBiens from "./superUser/saved/savedBien";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAppartments: false,
      showMaisons: true,
      showBiens: false
    };
  }

  onClickshowAppartments() {
    this.setState({ showMaisons: false });
    this.setState({ showAppartments: true });
    this.setState({ showBiens: false });
  }

  onClickshowMaisons() {
    this.setState({ showAppartments: false });
    this.setState({ showMaisons: true });
    this.setState({ showBiens: false });
  }

  onClickshowBiens() {
    this.setState({ showAppartments: false });
    this.setState({ showMaisons: false });
    this.setState({ showBiens: true });
  }

  // TODO ::  Component did update to re store user tye

  /*
  componentWillUpdate(nextprops){
    if(nextprops.auth.user){


    }
  }
  */
  render() {
    return (
      <div className="">
        <div className="row">
          <div className="columns is-mobile min-is-100vh">
            <div className="column is-3 primary-bg min-is-100vh is-fixed ">
              <h1>
                <i class="uil uil-user-circle" /> {this.props.user.name}
              </h1>
              <h3>{this.props.user.user_type} User</h3>

              <aside className="menu has-text-left ml-is-0_10   ">
                <p className="menu-label">Estimmations Regulières</p>
                <ul className="menu-list">
                  <li>
                    <Link
                      to="#"
                      className={classnames("", {
                        "is-active": this.state.showMaisons
                      })}
                      onClick={this.onClickshowMaisons.bind(this)}
                    >
                      Maisons
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className={classnames("", {
                        "is-active": this.state.showAppartments
                      })}
                      onClick={this.onClickshowAppartments.bind(this)}
                    >
                      Appartements
                    </Link>
                  </li>
                </ul>
                {this.props.user.user_type.localeCompare("super") !==
                0 ? null : (
                  <div>
                    <p className="menu-label">Estimmations Detaillées</p>
                    <ul className="menu-list">
                      <li>
                        <Link
                          to="#"
                          className={classnames("", {
                            "is-active": this.state.showBiens
                          })}
                          onClick={this.onClickshowBiens.bind(this)}
                        >
                          Estimmations
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </aside>
            </div>

            <div className="column is-offset-3">
              {this.state.showAppartments ? <SavedAppartements /> : null}
              {this.state.showMaisons ? <SavedMaisons /> : null}
              {this.state.showBiens ? <SavedBiens /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  user: state.auth.user,
  errors: state.errors
});

export default connect(mapStateProps)(Dashboard);
