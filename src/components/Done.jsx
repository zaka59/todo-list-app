import React from "react";
import "../assets/style/tasklist.css";
import DoneTask from "./DoneTask.jsx";
import taskApp from "./taskApp.jsx";
import Task from "./Task.jsx";

export default class Done extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    /**
     * Cette fonction permet de modifier l'état 
     * show pour permettre l'affichage lors d'un click
     */
    affiche() {
        if (!this.state.show) {
            this.setState({ show: true });
        }
        if (this.state.show) {
            this.setState({ show: false });
        }
    }
    /**
     * Cette permet de créer les composants DoneTask pour les taches finis
     * 
     */
    render() {
        let lestaches = null;
        if (this.state.show) {
            lestaches = this.props.lestachesfini.map((elt) => (
                <DoneTask
                    id={elt.id}
                    duration={elt.duration}
                    description={elt.description}
                    priority={elt.priority}
                    key={elt.id}
                />
            ));
        }
        return (
            <div className="donetasklist">
                <h3>Tâches terminées</h3>
                <button
                    className="doneButton"
                    onClick={this.affiche.bind(this)}
                >
                    +({this.props.lestachesfini.length})
                </button>

                {lestaches}
            </div>
        );
    }
}
