import React, { useState, useEffect } from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { Course_SS_Display } from "./Course_SS_Display";
import { toast } from "react-toastify";


interface Semester_SS_Display_Inputs {
    course_set: Course[];
    semester_number: number;
    userSemesters: Semester[];
    updateSemesters: (s: Semester[]) => void;
}

export function Semester_SS_Display({ course_set, semester_number, userSemesters, updateSemesters }: Semester_SS_Display_Inputs): JSX.Element {

    //---------------------------Constants---------------------------
    //Total Credits in the semester
    const [creditSum, addSum] = useState(0);


    //---------------------------Functions---------------------------

    //Removes all the courses from the current Semester
    function remove_all_classes(sem_num: number): void {
        userSemesters[sem_num - 1].course_set.splice(0, userSemesters[sem_num - 1].course_set.length);
        updateSemesters([...userSemesters]);
        addSum(0);

        toast.error("All courses have been removed", {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    //Remove a single course from the current Semester
    function remove_class(sem_num: number, course_name: string): void {
        userSemesters[sem_num - 1].course_set.forEach((course: Course, index: number) => {
            if (course.crsName == course_name) {
                userSemesters[sem_num - 1].course_set.splice(index, 1);
                updateSemesters([...userSemesters]);
                addSum(v => v - course.crsCredits);
            }
        });

        toast.error("Course has been removed", {
            position: toast.POSITION.TOP_RIGHT
        });

    }


    //---------------------------Use Effect---------------------------

    //Updates the Sum total at start and if the semester number or courses in the semester change
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: Course) => {
            addSum(v => v + course.crsCredits);
        });

    }, [semester_number, course_set, userSemesters]);


    //---------------------------Return Statement---------------------------
    return (
        <div className="w-100">

            <table className="table">
                <thead>
                    <h2 data-testid="semesterNumber" className="Semester"><b>Semester {semester_number}</b></h2>
                    <tr>
                        <th className="text-center">Courses</th>
                        <th className="text-center">Credit</th>
                        <th className="Actions">Actions</th>
                    </tr>
                </thead>
                <tbody data-testid="course-list">
                    {course_set.map((course: Course, index: number) => {
                        return <Course_SS_Display key={index} course={course} remove_class={remove_class} />;
                    })}
                </tbody >
            </table >

            <div>
                <b>Total Credits:  </b>
                <b>{creditSum}</b>
            </div>

            <div className="text-center">
                <button type="button" className="btn btn-danger m-1"
                    onClick={() => remove_all_classes(semester_number as number)}>Remove all courses</button>
            </div>
        </div >
    );
}