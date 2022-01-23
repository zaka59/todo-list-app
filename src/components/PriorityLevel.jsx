import React from "react";
import "../assets/style/taskApp.css";
import "../assets/style/addtask.css";
import "../assets/style/priorityLevel.css";
import PriorityScale from "./PriorityScale.jsx";

export default class PriorityLevel extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Cette méthode permet changer la priorité 
     * elle fait appel à la propriété priorityChange
     */
    taskChanged() {
        this.props.priorityChange(this.props.id, this.props.level);
        
    }
    /**
     * Cette fonction permet d'appliquer taskChanged lors 
     * d'un click
     */
    render() {
        return (
            <div id="level">
                <div
                    className={this.props.name}
                    onClick={() => this.taskChanged()}
                ></div>
            </div>
        );
    }
}
