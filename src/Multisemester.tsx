import React, {useState, useEffect} from "react";
import "./App.css";
import { SemesterIntf, CourseIntf } from "./OneSemester";
import { Semester_MS } from "./OneSemester";

interface Multi_Semester_View {
    userSemesters: SemesterIntf[];
    updateSemesters: (s : SemesterIntf[])=>void;
}

export function MultiSemester({userSemesters, updateSemesters}:Multi_Semester_View): JSX.Element {

    //Variable to manage the credit total per semester
    const [creditTotal, addTotal] = useState(0);
    const [SemesterCount, addCount] = useState(userSemesters.length);

    //Function to removes all the Semesters from the plan
    function remove_all_semesters () {
        const empty_sem: SemesterIntf = {course_set:[], semester_number: 1};
        updateSemesters([empty_sem]);
        addTotal(0);
        console.log(SemesterCount);
    }

    //Function to removes all the Semesters from the plan
    const add_empty_semester = (): void => {
        console.log(userSemesters[userSemesters.length-1].semester_number+1);
        const empty_sem: SemesterIntf = { course_set: [], semester_number: userSemesters[userSemesters.length-1].semester_number + 1};
        updateSemesters([...userSemesters, empty_sem]);
        addCount(userSemesters.length);
    };

    const reset =(): void =>{
        alert("You have unsaved changes, are you sure you want to reset?");
    };

    //Updates the Sum total at start and if the semester number or courses in the semester change
    useEffect(() => {
        addTotal(0);
        addCount(userSemesters.length);
        userSemesters.forEach((semester: SemesterIntf) => {
            semester.course_set.forEach((course: CourseIntf) => {
                addTotal(totalcredits => totalcredits + course.crsCredits);
            });
        });
    }, [userSemesters]);

    return (

        <div className="container-fluid padding">

            <div className="row padding">
                {userSemesters.map((semester: SemesterIntf, index: number) => {
                    return <Semester_MS key={index} course_set={semester.course_set} semester_number={semester.semester_number} userSemesters={userSemesters} updateSemesters={updateSemesters}/>;
                })}
            </div>

            <div className="col text-center">
                <p><h3>Total Credits: </h3><b>{creditTotal}</b></p>
                <button type="button" className="btn btn-primary btn-lg m-3" onClick={() => add_empty_semester()}>Add Semester</button>
                <button type="button" className="btn btn-danger btn-lg m-3" onClick={() => remove_all_semesters()}>Clear Plan</button>
                <form>
                    <button type="submit" className="btn btn-secondary btn-lg m-3" onClick={()=> reset()}>Reset</button>
                </form>
            </div>
        </div>
    );
}

//export default MultiSemester;