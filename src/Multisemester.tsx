import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Semester, SemesterIntf } from "./OneSemester";
import { CourseIntf } from "./Course";

function MultiSemester(): JSX.Element {

    const example_courses: CourseIntf[] = [{ crsName: "EGGG101", crsDescription: "Introduction to Engineering", crsCredits: "2" }, { crsName: "CISC108", crsDescription: "Introduction to Somputer Science I", crsCredits: "3" }, { crsName: "MATH241", crsDescription: "Analytic Geometry and Calculus A", crsCredits: "4" }, { crsName: "ENGL110", crsDescription: "Seminar in Composition", crsCredits: "3" }, { crsName: "Breadth Req. I", crsDescription: "Breadth Elective of Required Category", crsCredits: "3" }];

    const example_semester: SemesterIntf = { course_1: example_courses[0], course_2: example_courses[1], course_3: example_courses[2], course_4: example_courses[3], course_5: example_courses[4] };

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

                    <Semester course_1={example_semester.course_1}
                        course_2={example_semester.course_2}
                        course_3={example_semester.course_3}
                        course_4={example_semester.course_4}
                        course_5={example_semester.course_5}
                    />

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

                    <Semester course_1={example_semester.course_1}
                        course_2={example_semester.course_2}
                        course_3={example_semester.course_3}
                        course_4={example_semester.course_4}
                        course_5={example_semester.course_5}
                    />
                    
                    <Semester course_1={example_semester.course_1}
                        course_2={example_semester.course_2}
                        course_3={example_semester.course_3}
                        course_4={example_semester.course_4}
                        course_5={example_semester.course_5}
                    />
                </div>

            </div>
        </div>
    );
}

export default MultiSemester;