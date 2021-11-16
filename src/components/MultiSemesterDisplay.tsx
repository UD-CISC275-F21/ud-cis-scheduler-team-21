import React, { useState, useEffect } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";


interface MS_Semester{
    course_set: Course[];
    semester_number:number;
    userSemesters: Semester[];
    updateSemesters: (s : Semester[])=>void;
}

export function MultiSemesterDisplay ({ course_set, semester_number, userSemesters }:MS_Semester):JSX.Element{

    //Constants-------------------
    const [creditSum, addSum] = useState(0);


    //Functions-------------------

    //Function Defining the display characteristics of a Course in the Multi Semester View
    function Course_MS({ crsName, crsDescription, crsCredits }: Course) {
        return (
            <tr>
                <td><b>{crsName}:</b> {crsDescription}</td>
                <td className="text-center">{crsCredits}</td>
            </tr>
        );
    }
    

    //Use Effect-------------------

    //Updates the Sum total at start and if the semester number or courses in the semester change
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: Course) => {
            addSum(v => v + course.crsCredits);
        });
    }, [semester_number, userSemesters, course_set]);

    
    //Return Statement-------------
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
                    return <Course_MS key={index} crsName={course.crsName} crsDescription={course.crsDescription} crsCredits={course.crsCredits} />;
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