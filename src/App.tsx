import React from "react";
import "./App.css";
import MultiSemester from "./Multisemester";
import "bootstrap/dist/css/bootstrap.min.css";
//import {Button, Col, Table} from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1> UD CIS Scheduler </h1>
            </header>
            <div className="text-right">
                <button type="button" className="btn btn-primary m-3 ">Export PDF</button>
            </div>
            <MultiSemester />
            
            <button type="button" className="btn btn-primary btn-lg m-3">Add Semester</button>
            <button type="button" className="btn btn-danger btn-lg m-3">Remove All</button>
            <button type="button" className="btn btn-secondary btn-lg m-3">Reset</button>
        
        </div>
        
    );
}

export default App;
