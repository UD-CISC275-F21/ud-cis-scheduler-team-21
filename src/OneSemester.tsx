import React from "react";
import "./App.css";
import { Course } from "./Course";

function OneSemester(): JSX.Element {
    return (
        <div className="col-md-6">
            <h2>Semester</h2>

            <div className="row padding">
                <div className="col-md-8">
                    <h3>Course</h3>
                </div>
                <div className="col-md-4">
                    <h3>Credits</h3>
                </div>
            </div>


            <Course crsName="EGGG 101" crsDescription="Introduction to Engineering" crsCredits="2"/>

            <Course crsName="CISC 108" crsDescription="Introduction to Computer Science I" crsCredits="3"/>

            <Course crsName="MATH 241" crsDescription="Analytic Geometry and Calculus A" crsCredits="4"/>

            <Course crsName="ENGL 110" crsDescription="Seminar in Composition" crsCredits="3"/>

            <Course crsName="Breadth Requirement I" crsDescription="Breadth Elective of Required Category" crsCredits="3"/>


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