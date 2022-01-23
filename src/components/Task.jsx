import React from "react";
import "../assets/style/taskApp.css";
import "../assets/style/task.css";
import "../assets/style/doneButton.css";
import PriorityScale from "./PriorityScale.jsx";
import DoneButton from "./DoneButton.jsx";

export default class Task extends React.Component {
    constructor(props) {
        super(props);
    }
/**
 * Cette fonction nous permet de produire 
 * une tache avec une affichage donné
 */
    render() {
        return (
            <div className="task">
                <div className="info">
                    {this.props.description}({this.props.duration}mn)
                </div>
                <PriorityScale
                    id={this.props.id}
                    priorityLevel={this.props.priority}
                    priorityChange={this.props.priorityChange}
                   
                />

                <DoneButton done={this.props.done} id={this.props.id} />
            </div>
        );
    }
}
