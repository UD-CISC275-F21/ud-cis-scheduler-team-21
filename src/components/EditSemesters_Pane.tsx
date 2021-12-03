import React, { useState } from "react";
import { Button, Form, Toast} from "react-bootstrap";
import { Autocomplete, TextField } from "@mui/material";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { SingleSemesterDisplay } from "./SingleSemesterDisplay";
import data from "../assets/data.json";

interface Single_Semester_View {
    userSemesters: Semester[];
    updateSemesters: (s: Semester[]) => void;
}

export function EditSemesters_Pane({ userSemesters, updateSemesters }: Single_Semester_View): JSX.Element {

    //Constants-------------------
    const [current_semester_num, changeSemNum] = useState(0);
    const [newClassInput, updateInput] = useState<string>("");
    const [showDuplicateCourseError, setShowDupCourseErr] = useState(false);

    const[courseInfoName, displayName] = useState("Course ID");
    const[courseInfoDescription, displayDescription] = useState("Course Description");
    const[courseInfoCredits, displayCredits] = useState("");
    const[courseInfoPrereqs, displayPrereqs] = useState("Course Prerequisites");


    //Functions-------------------

    //Removes the current semester
    const remove_semester = () => {

        const modifiedSemesterList: Semester[] = [];
        userSemesters.forEach((semester: Semester) => {
            modifiedSemesterList.push(semester);
        });
        
        modifiedSemesterList.splice(current_semester_num, 1);
        modifiedSemesterList.forEach((semester: Semester, index: number) => {
            semester.semester_number = index + 1;
        });

        // if on last elemnet remove it
        if (current_semester_num === userSemesters.length - 1) {
            modifiedSemesterList.splice(current_semester_num, 1);
            updateSemesters(userSemesters);
            changeSemNum(current_semester_num - 1);
        }else{
            for(let i = current_semester_num; i < userSemesters.length - 1; i++){
                userSemesters[i] = userSemesters[i + 1];
            }

        }
        
        
        updateSemesters(modifiedSemesterList);
        if (current_semester_num < userSemesters.length - 1) {
            console.log(current_semester_num);
        }

    };

    //Returns array of class 'id's for auto fill
    function getAllCourses(): string[] {
        const id_list: string[] = [];
        data.map((courseList) => {
            id_list.push(courseList.id);
        });
        return id_list;
    }

    //Checks for to make sure course doesnt exist in current plan
    //and returns true if it ISNT and false if it IS
    function checkForDuplicates(newCourseID: string): boolean{
        let canAddCourse = true;
        userSemesters.forEach((semester: Semester) => {
            semester.course_set.forEach((course: Course) =>{
                if(course.crsName == newCourseID){
                    canAddCourse = false;
                }
            });
        });
        return canAddCourse;
    }

    //Adds a course to the current semester
    function addCourse(entered_id: string): void {
        let new_crs: Course = { crsName: "", crsDescription: "", crsCredits: 0 };
        const modifiedSemesterList: Semester[] = [];
        userSemesters.forEach((semester: Semester) => {
            modifiedSemesterList.push(semester);
        });
        data.map((courseList) => {
            if (courseList.id == entered_id) {
                if(checkForDuplicates(entered_id)){
                    new_crs = { crsName: courseList.id, crsDescription: courseList.name, crsCredits: parseInt(courseList.credits, 10) };
                    modifiedSemesterList[current_semester_num].course_set.push(new_crs);
                    updateSemesters(modifiedSemesterList);
                }else{
                    setShowDupCourseErr(true);
                }
            }
        });
    }

    //Displays a courses information in the course info section
    function showCourseInfo(entered_id: string): void {
        data.map((courseList) => {
            if (courseList.id == entered_id) {
                displayName(courseList.name);
                displayDescription(courseList.description);
                displayCredits(courseList.credits);
                displayPrereqs(courseList.prereqs);
            }
        });
    }


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

    //Return Statement-------------
    return (
        <>
            <div className="container-fluid padding text-left">
                <div className="row">
                    <div className="col-6">
                        <div className="text-center">
                            <button type="button" className="col-3 btn btn-primary m-3"
                                onClick={() => show_Prev_Semester()}>Previous Semester</button>
                            <button type="button" className="col-3 btn btn-danger m-3"
                                onClick={() => remove_semester()}>Remove Semester</button>
                            <button type="button" className="col-3 btn btn-primary m-3"
                                onClick={() => show_Next_Semester()}>Next Semester</button>
                        </div>

                        <SingleSemesterDisplay course_set={userSemesters[current_semester_num].course_set}
                            semester_number={userSemesters[current_semester_num].semester_number}
                            userSemesters={userSemesters} updateSemesters={updateSemesters}
                        />
                    </div>

                    <div className="col-3 text-center">
                        <h2 className="text-success mt-5"><b>Add Course</b></h2>
                        <Form id="searchBar" onSubmit={(event) => {
                            addCourse(newClassInput);
                            event.preventDefault();
                        }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter the desired course code:</Form.Label>
                                <Autocomplete onChange={(event, value) => {
                                    updateInput(value as string); event.preventDefault();
                                }} disablePortal id="combo-box-demo" options={getAllCourses()} renderInput={(params) => <TextField {...params} size={undefined} variant='outlined' label="Enter Course ID" placeholder="CISC" />} />
                            </Form.Group>

                            <Button className="btn btn-success text-center m-2" onClick={() => {
                                addCourse(newClassInput);
                            }}>
                                Add Course
                            </Button>

                            <Button className="btn btn-info text-center m-2" onClick={()=>{
                                showCourseInfo(newClassInput);
                            }}>
                                Show Course Info
                            </Button>

                            <Toast bg="danger" onClose={() => setShowDupCourseErr(false)} show={showDuplicateCourseError} delay={8000} autohide>
                                <Toast.Header>
                                    <strong className="me-auto">Error Adding Course</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <p><b>The course you are trying to add is already in your current plan!</b></p>
                                    <p>(If it`s not in the current semester, it might be in one of the other semesters included in your plan)</p>
                                </Toast.Body>
                            </Toast>

                        </Form>
                    </div>

                    <div className="col-3 text-center">
                        <h3 className="text-info mt-5"><b>Course Info</b></h3>
                        <div>
                            <h5>Name:</h5>
                            <p> {courseInfoName} </p>
                            <hr></hr>
                            <h5>Description:</h5>
                            <p>{courseInfoDescription}</p>

                            <hr></hr>

                            <h5>Credits: {courseInfoCredits}</h5>

                            <hr></hr>

                            <h5>Prerequisites:</h5>
                            <p>{courseInfoPrereqs}</p>
                            <hr></hr>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}