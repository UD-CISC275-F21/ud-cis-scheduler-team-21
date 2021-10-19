import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

function MultiSemester(): JSX.Element {
    return (
        <div className="container-fluid padding">
            <div className="row padding">
                <div className="col-md-12 col-lg-6">
                    <h2>Fall Semester</h2>
                    <div className="row padding">
                        <div className="col-md-8 col-lg-4">
                            <h3>Course</h3>
                            <p>
                                <b>EGGG 101</b> Introduction to Engineering
                            </p>
                            <p>
                                <b>CISC 108</b> Introduction to Computer Science I
                            </p>
                            <p>
                                <b>MATH 241</b> Analytic Geometry and Calculus A
                            </p>
                            <p>
                                <b>ENGL 110</b> Seminar in Composition
                            </p>
                            <p>
                                <b>Total Credits:</b>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <h3>Credits</h3>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>3</p>
                            <p>12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MultiSemester;