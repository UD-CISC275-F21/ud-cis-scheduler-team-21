import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.css";
import { semester_list } from "./Globals";


//Created a type to define the traits of a Course
export type CourseIntf = {
    crsName: string,
    crsDescription: string,
    crsCredits: number,
    semester_number?: number
}


//Created a type to define the traits of a Semester
export type SemesterIntf = {
    course_set: CourseIntf[],
    semester_number: number
}



//Function to create, display, and modify a Semester (This version is for when viewing multiple semesters, as denoted by MS for 'Multi Semester')
export const Semester_MS: FunctionComponent<SemesterIntf> = ({ course_set, semester_number }) => {

    //Variable to manage the credit total per semester
    const [creditSum, addSum] = useState(0);

    //Updates the Sum total at start and if the semester number or courses in the semester change
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: CourseIntf) => {
            addSum(v => v + course.crsCredits);
        });
    }, [semester_number, course_set]);


    //Function Defining the display characteristics of a Course in the Multi Semester View
    const Course_MS: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits }) =>
        <tr>
            <td><b>{crsName}:</b> {crsDescription}</td>
            <td className="text-center">{crsCredits}</td>
        </tr>
        ;

    //Return Statement for Multi Semester version of the Semester
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

                {course_set.map((course: CourseIntf, index: number) => {
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
};


//Function to create, display, and modify a Semester (This version is for when editing one semester at a time, as denoted by SS for 'Single Semester')
export const Semester_SS: FunctionComponent<SemesterIntf> = ({ course_set, semester_number }) => {

    //Variable to manage the credit total per semester
    const [creditSum, addSum] = useState(0);

    //Updates the Sum total at start and if the semester number or courses in the semester change
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: CourseIntf) => {
            addSum(v => v + course.crsCredits);
        });
        
    }, [semester_number, course_set]);


    //Function to removes all the courses from Semester
    const remove_allclass = (sem_num: number): void => {
        semester_list[sem_num - 1].course_set.splice(0, semester_list[sem_num - 1].course_set.length);
        addSum(0);
    };

    //Function to remove a single course from the Semester
    const remove_class = (sem_num: number, course_name: string): void =>{
        semester_list[sem_num-1].course_set.forEach((course: CourseIntf, index: number)=>{
            if(course.crsName == course_name){
                semester_list[sem_num-1].course_set.splice(index,1);  
                addSum(v => v - course.crsCredits);          
            }
        });
    };


    //Function Defining the display characteristics of a Course in the Single Semester View
    const Course_SS: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits, semester_number }) =>
        <tr>
            <td><b>{crsName}:</b> {crsDescription}</td>
            <td className="text-center">{crsCredits}</td>
            <td className="editcourse">
                <button type="button" className="btn btn-outline-secondary m-1">Edit</button>
                <button type="button" className="btn btn-outline-danger m-1" onClick={() => remove_class(semester_number as number,crsName)}>X</button></td>
        </tr>
    ;


    //Return Statement for Single Semester version of the Semester
    return <div className="">
        <table className="table">
            <thead>
                <h2 className="Semester"><b>Semester {semester_number}</b></h2>
                <tr>
                    <th className="text-center">Courses</th>
                    <th className="text-center">Credit</th>
                    <th className="Actions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {course_set.map((course: CourseIntf, index: number) => {
                    return <Course_SS key={index} crsName={course.crsName} crsDescription={course.crsDescription} crsCredits={course.crsCredits} semester_number={semester_number} />;
                })}
            </tbody >
        </table >
        <div>
            <b>Total Credits:  </b>
            <b>{creditSum}</b>

        </div>

        <div className="text-center">
            <button type="button" className="btn btn-danger m-1" onClick={() => remove_allclass(semester_number as number)}>Remove all courses</button>

        </div>
    </div >
    ;
};