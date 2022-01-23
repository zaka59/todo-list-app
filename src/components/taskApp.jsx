import React from "react";
import "../assets/style/taskApp.css";
import AddTask from "./addTask.jsx";
import Todo from "./Todo.jsx";
import tasks from "../data/tasksData.js";
import Done from "./Done.jsx";
import { element } from "prop-types";
/*
 define root component
*/
export default class TaskApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lestaches: [], lestachesfini: [] };
    }

    /**
     * Cette méthode permet de rajouter une tache avec un description et une duree
     * passées en parametres.
     */
    addTask(latache, duree) {
        let newId = 0;
        let c = null;
        for (let key in localStorage) {
            if (localStorage.getItem(key) == null) continue;
            c = JSON.parse(localStorage.getItem(key)).id;
            if (!c) continue;
            if (parseInt(c.substring(1, c.length)) > newId)
                newId = parseInt(c.substring(1, c.length));
        }
        const task = [
            ...this.state.lestaches,
            {
                id: "T" + (newId + 1),
                description: latache,
                duration: parseInt(duree),
                priority: 1,
                done: false,
            },
        ];
        task.forEach((t) => localStorage.setItem(t.id, JSON.stringify(t)));
        this.setState({ lestaches: task });
    }

    /**
     * Cette méthode gere les taches effecuté, les taches effectutées sont placées dans <Done>
     */
    done(id) {
        const copyTasks = [...this.state.lestaches];
        const copyDoneTasks = [...this.state.lestachesfini];
        const doneTaskIndex = copyTasks.findIndex((task) => task.id === id);
        const doneTask = copyTasks[doneTaskIndex];
        const doneTask_v2 = {
            id: doneTask.id,
            description: doneTask.description,
            duration: doneTask.duration,
            priority: doneTask.priority,
            done: true,
        };

        localStorage.setItem(doneTask.id, JSON.stringify(doneTask_v2));
        copyDoneTasks.push(doneTask_v2);
        copyTasks.splice(doneTaskIndex, 1);
        this.setState({
            lestaches: copyTasks,
            lestachesfini: [...copyDoneTasks],
        });
    }
    /**
     * Cette fonction permet de d'initialiser la valeur de 
     * l'état actuel de tâches et des tâches finis 
     * Dans cette fonction on a utilisé le module localStorage
     * pour pouvoir conserver les tâches d'un utilisateur 
     */
    componentDidMount() {
        localStorage.removeItem("undifined");
        let taskss = [];
        let taskss_done = [];
        let c = null;
        for (var key in localStorage) {
            c = JSON.parse(localStorage.getItem(key));
            if (c == null) continue;
            if (c.done === false) {
                taskss.push({
                    id: c.id,
                    description: c.description,
                    duration: parseInt(c.duration),
                    priority: parseInt(c.priority),
                });
            } else {
                taskss_done.push({
                    id: c.id,
                    description: c.description,
                    duration: parseInt(c.duration),
                    priority: parseInt(c.priority),
                });
            }
        }
        this.setState({ lestaches: taskss, lestachesfini: taskss_done });
    }

    /**
     * Cette méthode permet de mettre a jour une tache 
     * passée en parametre (id).
     */
    taskPriorityChanged(id, newPrority) {
        const index = (element) => element.id === id;
        const tasks2 = this.state.lestaches;
        const c = tasks2[tasks2.findIndex(index)];
        const taskUpdated = {
            id: c.id,
            description: c.description,
            duration: c.duration,
            priority: newPrority,
            done: false,
        };
        tasks2[tasks2.findIndex(index)] = taskUpdated;
        localStorage.setItem(c.id, JSON.stringify(taskUpdated));
        this.setState({ lestaches: tasks2 });
    }

    /**
     * Cette méthode permet de créer les tâches 
     * avec le composant Task avec certaines propriétés
     */
    render() {
        return (
            <div className="taskApp">
                <AddTask addTask={this.addTask.bind(this)} />
                <Todo
                    lestaches={this.state.lestaches}
                    priorityChange={this.taskPriorityChanged.bind(this)}
                    done={this.done.bind(this)}
                />
                <Done
                    done={this.done.bind(this)}
                    //lestaches={this.state.lestaches}
                    lestachesfini={this.state.lestachesfini}
                />
            </div>
        );
    }
}
