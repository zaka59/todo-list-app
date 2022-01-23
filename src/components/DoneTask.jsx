import React from "react";
import "../assets/style/doneTask.css";

export default class DoneTask extends React.Component {
    constructor(props) {
        super(props);
    }
/**
 * Cette fonction permet l'affichage des 
 * taches finies avec leur priorité
 */
    render() {
        return (
            <div className="task">
                <div className="info">
                    {this.props.description}({this.props.duration}mn) (priorité
                    :{this.props.priority})
                </div>
            </div>
        );
    }
}
