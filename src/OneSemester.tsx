import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.css";
import { Course_MS, Course_SS, CourseIntf} from "./Course";

export type SemesterIntf = {
    course_set: CourseIntf[],
    semester_number: number
}


export const Semester_MS: FunctionComponent<SemesterIntf> = ({ course_set, semester_number }) => {
    
    const [sum, addSum] = useState(0);
    
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: CourseIntf) => {
            addSum(v => v + course.crsCredits);
        });
    }, [semester_number, course_set]);


    return <div className="col-md-6">
        <h2 className="Semester">Semester {semester_number}</h2>

        <table>
            <thead>
                <tr>
                    <th className="text-center">Course</th>
                    <th className="text-center">Credits</th>
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
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: CourseIntf) => {
            addSum(v => v + course.crsCredits);
        });
    }, [semester_number, course_set]);
    
   
    return <div className="col-md-6">
        <h2 className="Semester">Semester {semester_number}</h2>

        <table>
            <thead>
                <tr>
                    <th className="text-center">Course</th>
                    <th className="text-center">Credits</th>
                    <th className="Actions">Actions</th>
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

        <div className="col-md-9">
            <h5 className="addcourse"><b>Add Course</b></h5>
            <form>
                <input 
                    className="inputName" 
                    type="text"
                    name="crsName"
                    placeholder="Name"
                />
                <input 
                    className="inputDes" 
                    type="text"
                    name="crsDescription"
                    placeholder="Description"
                />
                <button type="submit" className="btn btn-success m-3">Add</button>

            </form>
        </div>

    </div >
    ;
};

