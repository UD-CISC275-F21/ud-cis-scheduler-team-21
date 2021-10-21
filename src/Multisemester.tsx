import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Semester } from "./OneSemester";
import { CourseIntf } from "./Course";

function MultiSemester(): JSX.Element {
    let example_class: CourseIntf = {crsName="EGGG666", crsDescription="Introduction to Engineering", crsCredits="2"};
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler Updated by:
                <p>
                    Ryan Miller, Connor Creavin, and Usama Mahmood.
                </p>
            </header>

            <div className="container-fluid padding">
                <div className="row padding">

                    <Semester course_1={example_class}/>

                    <div className="col-md-12 col-lg-6">
                        <h2>Spring Semester</h2>

                        <div className="row padding">
                            <div className="col-md-8 col-lg-8">
                                <h3>Course</h3>
                                <p>
                                    <b>CISC 181</b> Introduction to Computer Science II
                                </p>
                                <p>
                                    <b>CISC 210</b> Introduction to Systems Programming
                                </p>
                                <p>
                                    <b>MATH 242</b> Calculus B and Calculus C
                                </p>
                                <p>
                                    <b>Breadth</b> Breadth Requirement (1/5)
                                </p>
                                <p>
                                    <b>Total Credits:</b>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-4">
                                <h3>Credits</h3>
                                <p>3</p>
                                <p>3</p>
                                <p>4</p>
                                <p>?</p>
                                <p>10+?</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="row padding">
                    <Semester course_1={example_class}/>
                    <Semester course_1={example_class}/>
                </div>

            </div>
        </div>
    );
}

export default MultiSemester;