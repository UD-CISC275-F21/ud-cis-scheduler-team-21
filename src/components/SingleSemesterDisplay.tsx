import React, { useState, useEffect } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";


interface SS_Semester{
    course_set: Course[];
    semester_number:number;
    userSemesters: Semester[];
    updateSemesters: (s : Semester[])=>void;
}

export function SingleSemesterDisplay({ course_set, semester_number, userSemesters, updateSemesters }:SS_Semester) :JSX.Element {

    //Constants-------------------
    const [creditSum, addSum] = useState(0);


    //Functions-------------------
    
    //Removes all the courses from the current Semester
    function remove_all_classes(sem_num: number): void {
        const modifiedSemesterList:Semester[] = [];
        userSemesters.forEach((semester:Semester)=>{
            modifiedSemesterList.push(semester);
        });
        modifiedSemesterList[sem_num - 1].course_set.splice(0, modifiedSemesterList[sem_num - 1].course_set.length);
        updateSemesters(modifiedSemesterList);
        addSum(0);
    }

    //Remove a single course from the current Semester
    function remove_class(sem_num: number, course_name: string): void{
        const modifiedSemesterList:Semester[] = [];
        userSemesters.forEach((semester:Semester)=>{
            modifiedSemesterList.push(semester);
        });
        modifiedSemesterList[sem_num-1].course_set.forEach((course: Course, index: number)=>{
            if(course.crsName == course_name){
                modifiedSemesterList[sem_num-1].course_set.splice(index,1);  
                updateSemesters(modifiedSemesterList);
                addSum(v => v - course.crsCredits);          
            }
        });
    }

    //Defining the display characteristics of a Course in the Single Semester View
    function Course_SS({ crsName, crsDescription, crsCredits, semester_number }:Course):JSX.Element{
        return (
            <tr className="w-100">
                <td><b>{crsName}:</b> {crsDescription}</td>
                <td className="text-center">{crsCredits}</td>
                <td className="editcourse">
                    <button type="button" className="btn btn-outline-secondary m-1">Edit</button>
                    <button type="button" className="btn btn-outline-danger m-1" data-testid="Remove-Course"
                        onClick={() => remove_class(semester_number as number, crsName)}>X</button>
                </td>
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
        
    }, [semester_number, course_set, userSemesters]);

    
    //Return Statement-------------
    return <div className="w-100">
        <table className="table">
            <thead>
                <h2 className="Semester"><b>Semester {semester_number}</b></h2>
                <tr>
                    <th className="text-center">Courses</th>
                    <th className="text-center">Credit</th>
                    <th className="Actions">Actions</th>
                </tr>
            </thead>
            <tbody data-testid="course-list">
                {course_set.map((course: Course, index: number) => {
                    return <Course_SS key={index} crsName={course.crsName} crsDescription={course.crsDescription} crsCredits={course.crsCredits} semester_number={semester_number} />;
                })}
            </tbody >
        </table >
        <div>
            <b>Total Credits:  </b>
            <b>{creditSum}</b>

        </div>

        <div className="text-center">
            <button type="button" className="btn btn-danger m-1" data-testid="Remove-All-Courses"
                onClick={() => remove_all_classes(semester_number as number)}>Remove all courses</button>

        </div>
    </div >
    ;
}