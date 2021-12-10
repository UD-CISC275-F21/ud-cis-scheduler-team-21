import React, { useState, useEffect } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { Course_MS_Display } from "./Course_MS_Display";


interface Semester_MS_Display_Inputs {
    course_set: Course[];
    semester_number: number;
    userSemesters: Semester[];
}

export function Semester_MS_Display({ course_set, semester_number, userSemesters }: Semester_MS_Display_Inputs): JSX.Element {

    //---------------------------Constants---------------------------
    //Total Credits in the semester
    const [creditSum, addSum] = useState(0);


    //---------------------------Use Effect---------------------------

    //Updates the Sum total at start and if the semester number or courses in the semester change
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: Course) => {
            addSum(v => v + course.crsCredits);
        });
    }, [semester_number, userSemesters, course_set]);


    //---------------------------Return Statement---------------------------
    return <div className="col-md-6">
        <h2 className="Semester"><b>Semester {semester_number}</b></h2>

        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Course</th>
                    <th className="text-center">Credits</th>
                </tr>
            </thead>

            <tbody>
                {course_set.map((course: Course, index: number) => {
                    return <Course_MS_Display key={index} course={course} />;
                })}
            </tbody>

            <tfoot>
                <tr>
                    <td><b>Total Credits</b></td>
                    <td><b>{creditSum}</b></td>
                </tr>
            </tfoot>
        </table>
    </div>
    ;
}