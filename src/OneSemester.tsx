import React, { FunctionComponent } from "react";
import "./App.css";
import { Course_MS, Course_SS, CourseIntf } from "./Course";

export type SemesterIntf = {
    course_1: CourseIntf,
    course_2: CourseIntf,
    course_3: CourseIntf,
    course_4: CourseIntf,
    course_5: CourseIntf,
    semester_number: number
}

export const Semester_MS: FunctionComponent<SemesterIntf> = ({ course_1, course_2, course_3, course_4, course_5, semester_number }) =>
    <div className="col-md-6">
        <h2 className="Semester">Semester {semester_number}</h2>

        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                </tr>
            </thead>

            <tbody>
                <Course_MS crsName={course_1.crsName} crsDescription={course_1.crsDescription} crsCredits={course_1.crsCredits} />

                <Course_MS crsName={course_2.crsName} crsDescription={course_2.crsDescription} crsCredits={course_2.crsCredits} />

                <Course_MS crsName={course_3.crsName} crsDescription={course_3.crsDescription} crsCredits={course_3.crsCredits} />

                <Course_MS crsName={course_4.crsName} crsDescription={course_4.crsDescription} crsCredits={course_4.crsCredits} />

                <Course_MS crsName={course_5.crsName} crsDescription={course_5.crsDescription} crsCredits={course_5.crsCredits} />
            </tbody>
            <tfoot>
                <tr>
                    <td><b>Total Credits</b></td>
                    <td><b>{course_1.crsCredits + course_2.crsCredits + course_3.crsCredits + course_4.crsCredits + course_5.crsCredits}</b></td>
                </tr>
            </tfoot>
        </table>

    </div>
;

export const Semester_SS: FunctionComponent<SemesterIntf> = ({ course_1, course_2, course_3, course_4, course_5, semester_number }) =>
    <div className="col-md-6">
        <h2 className="Semester">Semester {semester_number}</h2>

        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <Course_SS crsName={course_1.crsName} crsDescription={course_1.crsDescription} crsCredits={course_1.crsCredits} />
                <td> <button type="button" className="btn btn-primary m-3 ">Remove Class</button></td>
                </tr>

                <Course_SS crsName={course_2.crsName} crsDescription={course_2.crsDescription} crsCredits={course_2.crsCredits} />
                <td> <button type="button" className="btn btn-primary m-3 ">Remove Class</button></td>
                </tr>

                <Course_SS crsName={course_3.crsName} crsDescription={course_3.crsDescription} crsCredits={course_3.crsCredits} />
                <td> <button type="button" className="btn btn-primary m-3 ">Remove Class</button></td>
                </tr>

                <Course_SS crsName={course_4.crsName} crsDescription={course_4.crsDescription} crsCredits={course_4.crsCredits} />
                <td> <button type="button" className="btn btn-primary m-3 ">Remove Class</button></td>
                </tr>

                <Course_SS crsName={course_5.crsName} crsDescription={course_5.crsDescription} crsCredits={course_5.crsCredits} />
                <td> <button type="button" className="btn btn-primary m-3 ">Remove Class</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><b>Total Credits</b></td>
                    <td><b>{course_1.crsCredits + course_2.crsCredits + course_3.crsCredits + course_4.crsCredits + course_5.crsCredits}</b></td>
                </tr>
            </tfoot>
        </table>

    </div>
;