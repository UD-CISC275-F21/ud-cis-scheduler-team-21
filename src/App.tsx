import React, { useState } from "react";
import "./App.css";
import MultiSemester from "./Multisemester";
import SingleSemester from "./SingleSemester";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

function App(): JSX.Element {

    const [view_mode, updateView] = useState(<MultiSemester />);

    return (
        <div className="App">
            <header className="App-header">
                <h1 >UD CIS Scheduler</h1>
                <div className="col text-center">
                    <button type="button" className="btn btn-primary m-3" onClick={() => updateView(<SingleSemester />)}>Edit Semester</button>
                    <button type="button" className="btn btn-primary m-3" onClick={() => updateView(<MultiSemester />)}>My plan</button>
                </div>
            </header>

            <div className="text-left"><img className="logo" src={logo} alt="Logo" /></div>

            <div className="text-right">
                <button type="button" className="btn btn-primary m-3 ">Export PDF</button>
            </div>

            <div className="custom">
                <button type="button" className="btn btn-primary m-3" onClick={() => updateView(<SingleSemester />)}>Custom</button>
                
            </div>

            <hr></hr>

            {view_mode}

        </div>

    );
}

export default App;
