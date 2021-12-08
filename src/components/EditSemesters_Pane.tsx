import React, { useState } from "react";
import { Button, Form, Toast} from "react-bootstrap";
import { Autocomplete, TextField } from "@mui/material";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { SingleSemesterDisplay } from "./SingleSemesterDisplay";
import data from "../assets/data.json";
import {Mod} from "../components/modalHelper";

interface Single_Semester_View {
    userSemesters: Semester[];
    updateSemesters: (s: Semester[]) => void;
}

export function EditSemesters_Pane({ userSemesters, updateSemesters }: Single_Semester_View): JSX.Element {

    //Constants-------------------
    const [current_semester_num, changeSemNum] = useState(0);
    const [newClassInput, updateInput] = useState<string>("");
    const [showDuplicateCourseError, setShowDupCourseErr] = useState(false);
    const [showPrereqCourseErr, setPrereqCourseErr] = useState(false);
    const [showModal, setShowModal] = useState(false);


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
        // if on last elemnet remove it
        if (current_semester_num === userSemesters.length - 1 && userSemesters.length !=1) {
            modifiedSemesterList.splice(current_semester_num, 1);
            updateSemesters(userSemesters);
            changeSemNum(current_semester_num - 1);
        }else if (userSemesters.length > 1 && current_semester_num != 1){
            modifiedSemesterList.splice(current_semester_num, 1);
            modifiedSemesterList.forEach((semester: Semester, index: number) => {
                semester.semester_number = index + 1;
            });    
        }    
        //update semester list
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

    //Checks for to make sure course prerequisites exist in current plan
    //and returns True if they have prereqs and False if they dont
    function checkForPrereqs(prereqsString: string): boolean{
        let canAddCourse = false;
        const prereqsArray = prereqsString.split(",");
        userSemesters.forEach((semester: Semester) => {
            semester.course_set.forEach((course: Course) =>{
                prereqsArray.forEach((prereqCourseID: string, index:number)=>{
                    if(course.crsName == prereqCourseID){
                        prereqsArray.splice(index,1);
                    }
                });
            });
        });
        console.log(prereqsArray);
        console.log(prereqsArray.length);
        if((prereqsArray.length == 1 && prereqsArray[0]=="")||prereqsArray.length==0){
            canAddCourse = true;
        }
        return canAddCourse;
    } 

    //Adds a course to the current semester
    function addCourse(entered_id: string): void {
        let new_crs: Course = { crsName: "", crsDescription: "", crsCredits: 0, crsPrereqs:"", semester_number: 0};
        const modifiedSemesterList: Semester[] = [];
        userSemesters.forEach((semester: Semester) => {
            modifiedSemesterList.push(semester);
        });
        data.map((courseList) => {
            if (courseList.id == entered_id) {
                if(!checkForPrereqs(courseList.prereqs)){
                    setPrereqCourseErr(true);
                }else if(!checkForDuplicates(entered_id)){
                    setShowDupCourseErr(true);
                }else{
                    new_crs = { crsName: courseList.id, crsDescription: courseList.name, crsCredits: parseInt(courseList.credits, 10), crsPrereqs: courseList.prereqs, semester_number: current_semester_num+1 };
                    modifiedSemesterList[current_semester_num].course_set.push(new_crs);
                    updateSemesters(modifiedSemesterList);
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
                <Mod
                    showModal={showModal}
                    setShow={setShowModal}
                    crsID={newClassInput}               
                />
                <div className="row">
                    <div className="col-6">
                        <div className="text-center">
                            <button type="button" className="col-3 btn btn-primary m-3" data-testid="Previous-Semester"
                                onClick={() => show_Prev_Semester()}>Previous Semester</button>
                            <button type="button" className="col-3 btn btn-danger m-3" data-testid="Remove-Semester"
                                onClick={() => remove_semester()}>Remove Semester</button>
                            <button type="button" className="col-3 btn btn-primary m-3" data-testid="Next-Semester"
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
                                <Autocomplete  data-testid="autoComplete" onChange={(event, value) => {
                                    updateInput(value as string); event.preventDefault();
                                }} disablePortal id="combo-box-demo" options={getAllCourses()} renderInput={(params) => <TextField {...params} size={undefined} variant='outlined' label="Enter Course ID" placeholder="CISC" />} />
                            </Form.Group>

                            <Button className="btn btn-success text-center m-2" data-testid="Add-Course" onClick={() => {
                                addCourse(newClassInput, );
                            }}>
                                Add Course
                            </Button>

                            <Button className="btn btn-info text-center m-2" data-testid="courseInfoButton" onClick={()=>{
                                showCourseInfo(newClassInput);
                            }}>
                                Show Course Info
                            </Button>
                            <Button className="btn btn-info text-center m-2" onClick={()=>{
                                setShowModal(true);
                            }}>
                                Edit
                            </Button>

                            <Toast bg="danger" onClose={() => setShowDupCourseErr(false)} show={showDuplicateCourseError} delay={8000} autohide>
                                <Toast.Header>
                                    <strong className="me-auto">Error: Course Already in Plan </strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <p><b>The course you are trying to add is already in your current plan!</b></p>
                                    <p>(If it`s not in the current semester, it might be in one of the other semesters included in your plan)</p>
                                </Toast.Body>
                            </Toast>

                            <Toast bg="danger" onClose={() => setPrereqCourseErr(false)} show={showPrereqCourseErr} delay={8000} autohide>
                                <Toast.Header>
                                    <strong className="me-auto">Error: Not all Prerequisites</strong>
                                </Toast.Header>
                                <Toast.Body>
                                    <p><b>The course you are trying to add has prerequisites not included in your plan!</b></p>
                                    <p>(If you would like to add this class, please first add all of its prerequisites)</p>
                                </Toast.Body>
                            </Toast>

                        </Form>
                    </div>

                    <div className="col-3 text-center">
                        <h3 className="text-info mt-5"><b>Course Info</b></h3>
                        <div data-testid="courseInfo">
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