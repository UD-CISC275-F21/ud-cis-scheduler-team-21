import React from "react";
import { Course } from "../interfaces/Course";

interface Course_MS_Inputs{
    course: Course;
}

//Function Defining the display characteristics of a Course in the Multi Semester View
export function Course_MS_Display({ course }: Course_MS_Inputs): JSX.Element{
    //---------------------------Return Statement---------------------------
    return (
        <tr>
            <td><b>{course.crsName}:</b> {course.crsDescription}</td>
            <td className="text-center">{course.crsCredits}</td>
        </tr>
    );
}