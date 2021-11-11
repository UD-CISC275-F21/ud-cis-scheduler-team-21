import React, {useState, useEffect} from "react";
import "./App.css";
import { Semester_MS, SemesterIntf, CourseIntf } from "./OneSemester";
import { semester_list } from "./Globals";

function MultiSemester(): JSX.Element {

    //Function to removes all the Semesters from the plan
    const remove_all_semesters = (): void => {
        semester_list.splice(0, semester_list.length);
        const empty_sem: SemesterIntf = {course_set:[], semester_number: 1};
        semester_list.push(empty_sem);
        addTotal(0);
    };

    //Function to removes all the Semesters from the plan
    const add_empty_semester = (): void => {
        const empty_sem: SemesterIntf = { course_set: [], semester_number: semester_list[semester_list.length-1].semester_number + 1};
        semester_list.push(empty_sem);
        addCount(semester_list.length);
    };

    const reset=():void => {
        alert("You have unsaved changes, are you sure you want to reset?");
    };

    //Variable to manage the credit total per semester
    const [creditTotal, addTotal] = useState(0);
    const [SemesterCount, addCount] = useState(semester_list.length);

    //Updates the Sum total at start and if the semester number or courses in the semester change
    useEffect(() => {
        addTotal(0);
        addCount(semester_list.length);
        semester_list.forEach((semester: SemesterIntf) => {
            semester.course_set.forEach((course: CourseIntf) => {
                addTotal(v => v + course.crsCredits);
            }); 
        });
    }, [semester_list]);

    return (

        <div className="container-fluid padding">

            <div className="row padding">
                {semester_list.map((semester: SemesterIntf, index: number) => {
                    return <Semester_MS key={index} course_set={semester.course_set} semester_number={semester.semester_number}/>;
                })}
            </div>

            <div className="col text-center">
                <p><h3>Total Credits: </h3><b>{creditTotal}</b></p>
                <p><h3>Total Semesters: </h3><b>{SemesterCount}</b></p>
                <button type="button" className="btn btn-primary btn-lg m-3" onClick={() => add_empty_semester()}>Add Semester</button>
                <button type="button" className="btn btn-danger btn-lg m-3" onClick={() => remove_all_semesters()}>Clear Plan</button>
                <form>
                    <button type="submit" className="btn btn-secondary btn-lg m-3" onClick={()=> reset()}>Reset</button>
                </form>
            </div>
        </div>
    );
}

export default MultiSemester;