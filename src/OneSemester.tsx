import React, { FunctionComponent } from "react";
import "./App.css";
import { Course, CourseIntf } from "./Course";

export type SemesterIntf = {
    course_1: CourseIntf,
    course_2: CourseIntf,
    course_3: CourseIntf,
    course_4: CourseIntf,
    course_5: CourseIntf
}

export const Semester: FunctionComponent<SemesterIntf> = ({ course_1, course_2, course_3, course_4, course_5 }) =>
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

        <Course crsName={course_2.crsName} crsDescription={course_2.crsDescription} crsCredits={course_2.crsCredits} />

        <Course crsName={course_3.crsName} crsDescription={course_3.crsDescription} crsCredits={course_3.crsCredits} />

        <Course crsName={course_4.crsName} crsDescription={course_4.crsDescription} crsCredits={course_4.crsCredits} />

        <Course crsName={course_5.crsName} crsDescription={course_5.crsDescription} crsCredits={course_5.crsCredits} />


        <div className="row padding">
            <div className="col-md-8">
                <h5>Total Credits</h5>
            </div>
            <div className="col-md-4">
                <h5>{course_1.crsCredits + course_2.crsCredits + course_3.crsCredits + course_4.crsCredits + course_5.crsCredits}</h5>
            </div>
        </div>

    </div>;

//export default OneSemester;