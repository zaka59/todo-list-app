import React from "react";
import "../assets/style/taskApp.css";
import "../assets/style/addtask.css";
import "../assets/style/priorityScale.css";
import PriorityLevel from "./PriorityLevel.jsx";
import DoneButton from "./DoneButton.jsx";

export default class priorityScale extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
     * Cette fonction permet à l'utilisateur de 
     * de choisir un niveau de priorité donné 
     * 
     */

    render() {
        const level = []; //la liste des priorité
        let i = 1;
        let name;
        let j = 0;
        while (i <= 6) {
            if (i <= this.props.priorityLevel) {
                name = "level on";
                j++;
            } else {
                name = "level off";
            }
            level.push(
                <PriorityLevel
                    name={name}
                    id={this.props.id}
                    key={i}
                    priorityChange={this.props.priorityChange}
                    level={i}
                />
            );
            i++;
        }
        return (
            <div className="scale">
                {level}({j})
            </div>
        );
    }
}
