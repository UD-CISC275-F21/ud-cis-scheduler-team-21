import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultiSemester from "./Multisemester";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Button from 'react-bootstrap/Button';

function App(): JSX.Element {
    return (
        <div className="App">
            
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler Updated by:
                <p>
                    Ryan Miller, Connor Creavin, and Usama Mahmood.
                </p>
            </header>

            <MultiSemester />
        </div>
        
    );
}

export default App;
