import React from "react";
import "../assets/style/taskApp.css";
import Task from "./Task.jsx";

export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filtre: "" };
    }
/**
 * 
 * @param {*} event l'evenement pour effectuer
 * le filtre des Tasks
 */
    filterChanged(event) {
        this.setState({ filtre: event.target.value });
    }

    /**
     * Cette méthode permet de déterminer la 
     * longueur des taches en cours
     */
    longueur() {
        return this.props.lestaches.length;
    }
    /**
     * Cette méthode permet de déterminer le
     * temps total
     *  des taches en cours
     */
    tempsTotal() {
        return this.props.lestaches.reduce(
            (previous, element) => previous + element.duration,
            0
        );
    }
    /**
     * Cette méthode permet de créer les tâches 
     * avec le composant Task avec certaines propriétés
     */
    render() {
        let lestaches = null;
        let lestaches2 = [];
        lestaches = this.props.lestaches
            .sort(compare)
            .map((elt) => (
                <Task
                    id={elt.id}
                    duration={elt.duration}
                    description={elt.description}
                    priority={elt.priority}
                    key={elt.id}
                    priorityChange={this.props.priorityChange}
                    done={this.props.done}
                />
            ));

        if (this.state.filtre != "") {
            this.props.lestaches.forEach((element) => {
                if (element.description.includes(this.state.filtre)) {
                    lestaches2.push(element);
                }
            });
            lestaches = lestaches2;

            console.log(lestaches);
            lestaches = lestaches
                .sort(compare)
                .map((elt) => (
                    <Task
                        id={elt.id}
                        duration={elt.duration}
                        description={elt.description}
                        priority={elt.priority}
                        key={elt.id}
                        priorityChange={this.props.priorityChange}
                        done={this.props.done}
                    />
                ));
        }

        return (
            <div className="tasklist">
                <h3>Tâches en cours</h3>
                <input
                    type="text"
                    value={this.state.filtre}
                    onChange={this.filterChanged.bind(this)}
                    placeholder="filtre"
                />
                <div>
                    il y a {this.longueur()} taches en cours. Pour une durée de{" "}
                    {this.tempsTotal()} mn.{" "}
                </div>
                {lestaches}
            </div>
        );
    }
}
/**
 * 
 * @param {*} t1 
 * @param {*} t2 
 * Une fonction de comparaison
 * @returns 1 si t1.priority < t2.priority
 *          -1 si t1.priority > t2.priority
 *           0 sinon
 */
const compare = function (t1, t2) {
    if (t1.priority < t2.priority) return 1;
    else if (t1.priority > t2.priority) return -1;
    return 0;
};
