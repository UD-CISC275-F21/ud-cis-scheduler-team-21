import React, {useState, useEffect} from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { MultiSemesterDisplay } from "./MultiSemesterDisplay";

interface Multi_Semester_View {
    userSemesters: Semester[];
    updateSemesters: (s : Semester[])=>void;
}

export function MyPlan_Pane({userSemesters, updateSemesters}:Multi_Semester_View): JSX.Element {

    //Constants-------------------
    const [creditTotal, addTotal] = useState(0);
    const [SemesterCount, addCount] = useState(userSemesters.length);


    //Functions-------------------

    //Removes all the Semesters from the plan
    function remove_all_semesters () {
        const empty_sem: Semester = {course_set:[], semester_number: 1};
        updateSemesters([empty_sem]);
        addTotal(0);
        console.log(SemesterCount);
    }

    //Adds an empty Semester to the plan
    function add_empty_semester(): void{
        console.log(userSemesters[userSemesters.length-1].semester_number+1);
        const empty_sem: Semester = { course_set: [], semester_number: userSemesters[userSemesters.length-1].semester_number + 1};
        updateSemesters([...userSemesters, empty_sem]);
        addCount(userSemesters.length);
    }

    //Alerts user before reloading 
    function reset_alert(): void{
        alert("All unsaved changes will be lost, are you sure you still want to reset?");
    }


    //Use Effect-------------------

    //Updates the Sum total at start and when the array 'userSemesters' changes
    useEffect(() => {
        addTotal(0);
        addCount(userSemesters.length);
        userSemesters.forEach((semester: Semester) => {
            semester.course_set.forEach((course: Course) => {
                addTotal(totalcredits => totalcredits + course.crsCredits);
            });
        });
    }, [userSemesters]);


    //Return Statement---------------
    return (

        <div className="container-fluid padding">

            <div className="row padding">
                {userSemesters.map((semester: Semester, index: number) => {
                    return <MultiSemesterDisplay key={index} course_set={semester.course_set} semester_number={semester.semester_number} userSemesters={userSemesters} updateSemesters={updateSemesters}/>;
                })}
            </div>

            <div className="col text-center">
                <p><h3>Total Credits: </h3><b>{creditTotal}</b></p>
                <button type="button" className="btn btn-primary btn-lg m-3" onClick={() => add_empty_semester()}>Add Semester</button>
                <button type="button" className="btn btn-danger btn-lg m-3" onClick={() => remove_all_semesters()}>Clear Plan</button>
                <form>
                    <button type="submit" className="btn btn-secondary btn-lg m-3" onClick={()=> reset_alert()}>Reset</button>
                </form>
            </div>
        </div>
    );
}