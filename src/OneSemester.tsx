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
        <h2 className="Semester">Semester</h2>

        <table>
            <tr>
                <th>Course</th>
                <th>Credits</th>
            </tr>


            <Course crsName={course_1.crsName} crsDescription={course_1.crsDescription} crsCredits={course_1.crsCredits} />

            <Course crsName={course_2.crsName} crsDescription={course_2.crsDescription} crsCredits={course_2.crsCredits} />

            <Course crsName={course_3.crsName} crsDescription={course_3.crsDescription} crsCredits={course_3.crsCredits} />

            <Course crsName={course_4.crsName} crsDescription={course_4.crsDescription} crsCredits={course_4.crsCredits} />

            <Course crsName={course_5.crsName} crsDescription={course_5.crsDescription} crsCredits={course_5.crsCredits} />

            <tr>
                <td>Total Credits</td>
                <td>{course_1.crsCredits + course_2.crsCredits + course_3.crsCredits + course_4.crsCredits + course_5.crsCredits}</td>
            </tr>
        </table>

    </div>;

//export default OneSemester;