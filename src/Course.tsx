import React, { FunctionComponent } from "react";
import "./App.css";
import { semester_list  } from "./Globals";

export type CourseIntf = {
    crsName: string,
    crsDescription: string,
    crsCredits: number,
    semester_number?: number
}


//removes one course in the semester
const remove_class = (sem_num: number, course_name: string) =>{
    semester_list[sem_num-1].course_set.forEach((course: CourseIntf, index: number)=>{
        if(course.crsName == course_name){
            semester_list[sem_num-1].course_set.splice(index,1);     
        }
    });    
};


export const Course_MS: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits}) =>

    <tr>
        <td><b>{crsName}:</b> {crsDescription}</td>
        <td className="text-center">{crsCredits}</td>
    </tr>
    ;

export const Course_SS: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits, semester_number }) =>

    <tr>
        <td><b>{crsName}:</b> {crsDescription}</td>
        <td className="text-center">{crsCredits}</td>
        <td className="editcourse"><button type="button" className="m-1">Edit</button></td>
        <td className="deletecourse"><button type="button" className="m-1" onClick={() => remove_class(semester_number as number,crsName)}>X</button></td>

    </tr>
    ;