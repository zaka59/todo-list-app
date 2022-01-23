import React from "react";
import "../assets/style/addtask.css";

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = { filterValue: "", DEFAULT_DURATION: 30, pclass: "OK" };
        this.textInput = React.createRef();
        this.duree = React.createRef();
    }

    addTask(texte, duree) {
        if (texte.trim() != "") {
            this.state.pclass = "OK";
            this.props.addTask(texte, duree);
            this.textInput.current.value = "";
            this.duree.current.value = this.state.DEFAULT_DURATION;
        } else {
            this.state.pclass = "ERROR";
        }
    }
    render() {
        return (
            <div className="addTask">
                <p className={this.state.pclass}>
                    {" "}
                    Veuillez ecrire une description
                </p>
                <input
                    type="texte"
                    ref={this.textInput}
                    placeholder="description"
                    required
                />
                <input
                    type="number"
                    ref={this.duree}
                    min="1"
                    defaultValue={this.state.DEFAULT_DURATION.toString()}
                />
                mn{" "}
                <button
                    onClick={() =>
                        this.addTask(
                            this.textInput.current.value,
                            this.duree.current.value
                        )
                    }
                >
                    add
                </button>
            </div>
        );
    }
}
