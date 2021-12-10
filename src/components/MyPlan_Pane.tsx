import React, {useState, useEffect} from "react";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { Semester_MS_Display } from "./Semester_MS_Display";
import { toast } from "react-toastify";


interface Multi_Semester_View {
    userSemesters: Semester[];
    updateSemesters: (s : Semester[])=>void;
    change_SS_SemNum: (n: number)=>void;
}

export function MyPlan_Pane({userSemesters, updateSemesters, change_SS_SemNum}:Multi_Semester_View): JSX.Element {

    //---------------------------Constants---------------------------
    //Total Credits in the users plan
    const [creditTotal, addTotal] = useState(0);


    //---------------------------Functions---------------------------

    //Removes all the Semesters from the plan
    function remove_all_semesters () {
        change_SS_SemNum(0);
        const empty_sem: Semester = {course_set:[], semester_number: 1, credits:0 };
        userSemesters.splice(0,userSemesters.length);
        updateSemesters([...userSemesters, empty_sem]);
        addTotal(0);
        change_SS_SemNum(0);

        toast.error("All semesters have been removed", {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    //Adds an empty Semester to the plan
    function add_empty_semester(): void{
        //console.log(userSemesters[userSemesters.length-1].semester_number+1);
        const empty_sem: Semester = { course_set: [], semester_number: userSemesters[userSemesters.length-1].semester_number + 1, credits:0};
        updateSemesters([...userSemesters, empty_sem]);

        toast.success("New semesters has been added", {
            position: toast.POSITION.TOP_RIGHT
        });

    }

    function rest(): void {
        window.location.reload();
        alert("All unsaved changes will be lost, are you sure you still want to reset?");

    }


    //---------------------------Use Effect---------------------------

    //Updates the Sum total at start and when the array 'userSemesters' changes
    useEffect(() => {
        addTotal(0);
        userSemesters.forEach((semester: Semester) => {
            semester.course_set.forEach((course: Course) => {
                addTotal(totalcredits => totalcredits + course.crsCredits);
            });
        });
    }, [userSemesters]);


    //---------------------------Return Statement---------------------------
    return (

        <div className="container-fluid padding" >

            <div className="row padding" data-testid="semester-list">
                {userSemesters.map((semester: Semester, index: number) => {
                    return <Semester_MS_Display key={index} course_set={semester.course_set} semester_number={semester.semester_number} userSemesters={userSemesters} />;
                })}
            </div>

            <div className="text-center">
                <p><strong>Total Credits: </strong> <b>{creditTotal}</b></p>
                <div className="row">
                    <div className="col-4">
                        <button type="button" className="btn btn-primary btn-lg btn-block"
                            onClick={() => add_empty_semester()}>Add Semester</button>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-danger btn-lg btn-block"
                            onClick={() => remove_all_semesters()}>Clear Plan</button>
                    </div>
                    <div className="col-4">
                        <form>
                            <button type="button" className="btn btn-secondary btn-lg btn-block" 
                                onClick={() => rest()}>Reset</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}