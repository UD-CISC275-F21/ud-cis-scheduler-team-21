import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.css";
import { Course_MS, Course_SS, CourseIntf } from "./Course";

export type SemesterIntf = {
    //course_1: CourseIntf,
    //course_2: CourseIntf,
    //course_3: CourseIntf,
    //course_4: CourseIntf,
    //course_5: CourseIntf,
    course_set: CourseIntf[],
    semester_number: number
}


export const Semester_MS: FunctionComponent<SemesterIntf> = ({ course_set, semester_number }) => {

    const [sum, addSum] = useState(0);

    /*function addCrdts(course_set: CourseIntf[]): number {
        course_set.forEach((course: CourseIntf) => {
            addSum(sum + course.crsCredits);
        });
        return sum;
    }*/

    useEffect(() => {
        course_set.forEach((index: number) => {
            addSum(v => v + course_set[index].crsCredits);
        });
    }, []);

    return <div className="col-md-6">
        <h2 className="Semester">Semester {semester_number}</h2>

        <table>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Credits</th>
                </tr>
            </thead>

            <tbody>

                {course_set.map((course: CourseIntf, index: number) => {
                    return <Course_MS key={index} crsName={course.crsName} crsDescription={course.crsDescription} crsCredits={course.crsCredits} />;
                })}

            </tbody>
            <tfoot>
                <tr>
                    <td><b>Total Credits</b></td>
                    <td><b>{sum}</b></td>
                </tr>
            </tfoot>
        </table>

    </div>
    ;
};
export const Semester_SS: FunctionComponent<SemesterIntf> = ({ course_set, semester_number }) => {

    const [sum, addSum] = useState(0);

    /*const addCrdts = (index: number) => {
        course_set.forEach((course: CourseIntf) => {
            addSum(v => v + course_set[index].crsCredits);
        });
    };*/

    useEffect(() => {
        course_set.forEach((index: number) => {
            addSum(v => v + course_set[index].crsCredits);
        });
    }, []);

    return <div className="col-md-6">
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

                {course_set.map((course: CourseIntf, index: number) => {
                    return <Course_SS key={index} crsName={course.crsName} crsDescription={course.crsDescription} crsCredits={course.crsCredits} semester_number={semester_number} />;
                })}

            </tbody >
            <tfoot>
                <tr>
                    <td><b>Total Credits</b></td>
                    <td><b>{sum}</b></td>
                </tr>
            </tfoot>
        </table >

        <div className="col-sm-2 col-md-3 col-lg-4 text-center">
            <button type="button" className="btn btn-secondary m-3" >Delete All Courses</button>
        </div>


    </div >
    ;
};