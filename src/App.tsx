import React, { useState } from "react";
import "./App.css";
import MultiSemester from "./Multisemester";
import SingleSemester from "./SingleSemester";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

//let view_mode: number = 1; //0=multiSemester, 1=singleSemester

//const multiView = () => updateView(0);
//const singleView = () => updateView(1);

/*function change_view(): void {
    if (view_mode == 0) {
        view = <MultiSemester />;
    }else if(view_mode == 1){
        view = <SingleSemester />;
    }
}*/

function App(): JSX.Element {

    const [view_mode, updateView] = useState(<MultiSemester />);
    //var view: JSX.Element = <MultiSemester />;

    /*useEffect(()=>{
        if (view_mode == 0) {
            view = <MultiSemester />;
        }else if(view_mode == 1){
            view = <SingleSemester />;
        }
    },[view_mode]);*/

    return (
        <div className="App">
            <header className="App-header">
                <h1 >UD CIS Scheduler</h1>
            </header>

            <div className="text-left"><img className="logo" src={logo} alt="Logo" /></div>

            <div className="text-right">
                <button type="button" className="btn btn-primary m-3 ">Export PDF</button>
            </div>

            <div className="custom">
                <button type="button" className="btn btn-primary m-3 ">Custom</button>
            </div>

            <div className="row padding">
                <button type="button" className="btn btn-primary btn-lg m-3" onClick={() => updateView(<MultiSemester />)}>Multi-Semester View</button>
                <button type="button" className="btn btn-primary btn-lg m-3" onClick={() => updateView(<SingleSemester />)}>Single-Semester View</button>
            </div>

            {view_mode}

            <div className="col text-center">
                <button type="button" className="btn btn-primary btn-lg m-3">Add Semester</button>
                <button type="button" className="btn btn-danger btn-lg m-3">Remove All</button>
                <button type="button" className="btn btn-secondary btn-lg m-3">Reset</button>
            </div>

        </div>

    );
}

export default App;
