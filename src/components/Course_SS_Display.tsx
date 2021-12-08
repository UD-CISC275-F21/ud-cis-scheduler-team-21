import React from "react";
import { Course } from "../interfaces/Course";


interface Course_SS_Inputs{
    course: Course;
    remove_class: (n: number, s : string) => void;
}

//Defining the display characteristics of a Course in the Single Semester View
export function Course_SS_Display({ course, remove_class }:Course_SS_Inputs):JSX.Element{
    //---------------------------Return Statement---------------------------
    return (
        <tr className="w-100">
            <td><b>{course.crsName}:</b> {course.crsDescription}</td>
            <td className="text-center">{course.crsCredits}</td>
            <td className="editcourse">
                <button type="button" className="btn btn-outline-danger m-1" data-testid="Remove-Course"
                    onClick={() => remove_class(course.semester_number as number, course.crsName)}>X</button>
            </td>
        </tr>
    );
}



