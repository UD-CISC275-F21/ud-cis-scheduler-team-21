import React, { useState } from "react";
import { Semester } from "../interfaces/Semester";
import { Semester_SS_Display } from "./Semester_SS_Display";
import { AddCourse_Section } from "./AddCourse_Section";
import { Course } from "../interfaces/Course";



interface Single_Semester_View {
    userSemesters: Semester[];
    updateSemesters: (s: Semester[]) => void;
}

export function EditSemesters_Pane({ userSemesters, updateSemesters }: Single_Semester_View): JSX.Element {

    //---------------------------Constants---------------------------
    //Tracks the focussed semester (value=0 when focused on semester 1)
    const [current_semester_num, changeSemNum] = useState(0);

    //---------------------------Functions---------------------------

    //Removes the current semester
    const remove_semester = () => {
        if (current_semester_num === userSemesters.length - 1 && userSemesters.length != 1) {
            userSemesters.splice(current_semester_num, 1);
            changeSemNum(current_semester_num - 1);
        } else if (userSemesters.length > 1) {
            userSemesters.splice(current_semester_num, 1);
            userSemesters.forEach((semester: Semester, index: number) => {
                semester.semester_number = index + 1;
                semester.course_set.forEach((course: Course) => {
                    course.semester_number=semester.semester_number;
                });
            });
        }
        updateSemesters([...userSemesters]);
    };

    //shows next semester on click
    const show_Next_Semester = () => {
        if (current_semester_num < userSemesters.length-1) {
            changeSemNum(v => v + 1);
        }
    };

    //shows perv semester on click
    const show_Prev_Semester = () => {
        if (current_semester_num > 0) {
            changeSemNum(v => v - 1);
        }  
    };

    //---------------------------Return Statement---------------------------
    return (
        <>
            <div className="container-fluid padding text-left">
                <div className="row">

                    <div className="col-6">
                        <div className="text-center">
                            <button type="button" className="col-3 btn btn-primary m-3"
                                onClick={() => show_Prev_Semester()}>Previous Semester</button>
                            <button type="button" className="col-3 btn btn-danger m-3" data-testid="Remove-Semester"
                                onClick={() => remove_semester()}>Remove Semester</button>
                            <button type="button" className="col-3 btn btn-primary m-3" data-testid="Next-Semester"
                                onClick={() => show_Next_Semester()}>Next Semester</button>
                        </div>

                        <Semester_SS_Display course_set={userSemesters[current_semester_num].course_set}
                            semester_number={userSemesters[current_semester_num].semester_number}
                            userSemesters={userSemesters} updateSemesters={updateSemesters}
                        />
                    </div>

                    <div className="col-6 text-center">
                        <AddCourse_Section userSemesters={userSemesters} updateSemesters={updateSemesters} current_semester_num={current_semester_num} />
                    </div>
                </div>

            </div>
        </>
    );
}