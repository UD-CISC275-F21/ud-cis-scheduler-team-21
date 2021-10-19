import React from "react";
import "./App.css";
import Course from "./Course";

function OneSemester(): JSX.Element {
    return (
        <div className="col-md-12 col-lg-6">
            <h2>Semester</h2>

            <div className="row padding">
                <div className="col-md-8">
                    <h3>Course</h3>
                </div>
                <div className="col-md-4">
                    <h3>Credits</h3>
                </div>
            </div>

            <Course />

            <div className="row padding">
                <div className="col-md-8">
                    <p>
                        <b>CISC 108</b> Introduction to Computer Science I
                    </p>
                </div>
                <div className="col-md-4">
                    <p>3</p>
                </div>
            </div>

            <div className="row padding">
                <div className="col-md-8">
                    <p>
                        <b>MATH 241</b> Analytic Geometry and Calculus A
                    </p>
                </div>
                <div className="col-md-4">
                    <p>4</p>
                </div>
            </div>

            <div className="row padding">
                <div className="col-md-8">
                    <p>
                        <b>ENGL 110</b> Seminar in Composition
                    </p>
                </div>
                <div className="col-md-4">
                    <p>3</p>
                </div>
            </div>

            <div className="row padding">
                <div className="col-md-8">
                    <h5>Total Credits</h5>
                </div>
                <div className="col-md-4">
                    <h5>12</h5>
                </div>
            </div>

        </div>
    );
}

export default OneSemester;