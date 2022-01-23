import React from "react";
import "../assets/style/taskApp.css";
import "../assets/style/addtask.css";
import "../assets/style/doneButton.css";

export default class DoneButton extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Fonction permettant d'appeler la propriété done
     * 
     */
    done() {
        this.props.done(this.props.id);
    }

    /**
     * Cette fonction permet à ce qu'un click sur le bouton 
     * ajoute la tâche aux tâches finis
     */
    render() {
        return (
            <div className="doneButton">
                <button onClick={this.done.bind(this)}>&#10004;</button>
            </div>
        );
    }
}
