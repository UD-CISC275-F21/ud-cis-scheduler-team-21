import React, { FunctionComponent } from "react";
import "./App.css";
import { Course, CourseIntf } from "./Course";

export type SemesterIntf = {
    course_1: CourseIntf
    //course_2 : CourseIntf,
    //course_3 : CourseIntf,
    //course_4 : CourseIntf,
    //course_5 : CourseIntf
}

export const Semester: FunctionComponent<SemesterIntf> = ({ course_1 }) =>
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


        <Course crsName={course_1.crsName} crsDescription={course_1.crsDescription} crsCredits={course_1.crsCredits} />

        <Course crsName="CISC 108" crsDescription="Introduction to Computer Science I" crsCredits="3" />

        <Course crsName="MATH 241" crsDescription="Analytic Geometry and Calculus A" crsCredits="4" />

        <Course crsName="ENGL 110" crsDescription="Seminar in Composition" crsCredits="3" />

        <Course crsName="Breadth Requirement I" crsDescription="Breadth Elective of Required Category" crsCredits="3" />


        <div className="row padding">
            <div className="col-md-8">
                <h5>Total Credits</h5>
            </div>
            <div className="col-md-4">
                <h5>12</h5>
            </div>
        </div>

    </div>;

//export default OneSemester;