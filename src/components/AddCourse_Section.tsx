import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Autocomplete, TextField } from "@mui/material";
import { EditCourseInfo_Modal } from "./EditCourseInfo_Modal";
import { DuplicateError_Toast, PrerequisiteError_Toast } from "./AddCourseError_Toasts";
import { Course } from "../interfaces/Course";
import { Semester } from "../interfaces/Semester";
import data from "../assets/data.json";
import { toast } from "react-toastify";


interface NewCourse_Section_Inputs {
    userSemesters: Semester[];
    updateSemesters: (s: Semester[]) => void;
    current_semester_num: number;
}

export function AddCourse_Section({ userSemesters, updateSemesters, current_semester_num }: NewCourse_Section_Inputs): JSX.Element {

    //---------------------------Constants---------------------------
    //String used for autofill
    const [newClassInput, updateInput] = useState<string>("");

    //Booleans to show errors when adding course
    const [showDuplicateCourseError, setShowDupCourseErr] = useState(false);
    const [showPrereqCourseErr, setPrereqCourseErr] = useState(false);

    //Boolean to show EditCourse Modal
    const [showModal, setShowModal] = useState(false);

    //Strings used to display the Course Info
    const [courseInfoName, displayName] = useState("Course ID");
    const [courseInfoDescription, displayDescription] = useState("Course Description");
    const [courseInfoCredits, displayCredits] = useState("");
    const [courseInfoPrereqs, displayPrereqs] = useState("Course Prerequisites");


    //---------------------------Functions---------------------------

    //Adds a course to the current semester
    function addCourse(entered_id: string): void {
        let new_crs: Course = { crsName: "", crsDescription: "", crsCredits: 0, crsPrereqs: "", semester_number: 0 };
        data.map((courseList) => {
            if (courseList.id == entered_id) {
                if (!checkForPrereqs(courseList.prereqs)) {
                    setPrereqCourseErr(true);
                } else if (!checkForDuplicates(entered_id)) {
                    setShowDupCourseErr(true);
                } else {
                    new_crs = { crsName: courseList.id, crsDescription: courseList.name, crsCredits: parseInt(courseList.credits, 10), crsPrereqs: courseList.prereqs, semester_number: current_semester_num + 1 };
                    userSemesters[current_semester_num].course_set.push(new_crs);
                    updateSemesters([...userSemesters]);

                    toast.success("Course added successfully!", {
                        position: toast.POSITION.TOP_RIGHT
                    });
            
                }
            }
        });


    }

    //Checks for to make sure course doesnt exist in current plan
    //and returns true if it ISNT and false if it IS
    function checkForDuplicates(newCourseID: string): boolean {
        let canAddCourse = true;
        userSemesters.forEach((semester: Semester) => {
            semester.course_set.forEach((course: Course) => {
                if (course.crsName == newCourseID) {
                    canAddCourse = false;
                }
            });
    
        });
       

        return canAddCourse;
    }

    //Checks for to make sure course prerequisites exist in current plan
    //and returns True if they have prereqs and False if they dont
    function checkForPrereqs(prereqsString: string): boolean {
        let canAddCourse = false;
        const prereqsArray = prereqsString.split(",");
        userSemesters.forEach((semester: Semester) => {
            semester.course_set.forEach((course: Course) => {
                prereqsArray.forEach((prereqCourseID: string, index: number) => {
                    if (course.crsName == prereqCourseID) {
                        prereqsArray.splice(index, 1);
                    }
                });
            });
        });
        if ((prereqsArray.length == 1 && prereqsArray[0] == "") || prereqsArray.length == 0) {
            canAddCourse = true;
    
        }
        return canAddCourse;
    }

    //Returns array of class 'id's for auto fill
    function getAllCourses(): string[] {
        const id_list: string[] = [];
        data.map((courseList) => {
            id_list.push(courseList.id);
        });
        return id_list;
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

    //---------------------------Return Statement---------------------------
    return (
        <div className="row">
            <EditCourseInfo_Modal
                showModal={showModal}
                setShow={setShowModal}
                crsID={newClassInput}
            />

            <div className="col-6 text-center">
                <h2 className="text-success mt-5"><b>Add Course</b></h2>
                <Form id="searchBar" onSubmit={(event) => {
                    addCourse(newClassInput);
                    event.preventDefault();
                }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter the desired course code:</Form.Label>
                        <Autocomplete data-testid="autoComplete" onChange={(event, value) => {
                            updateInput(value as string); event.preventDefault();
                        }} disablePortal id="combo-box-demo" options={getAllCourses()} renderInput={(params) => <TextField {...params} size={undefined} variant='outlined' label="Enter Course ID" placeholder="CISC" />} />
                    </Form.Group>

                    <DuplicateError_Toast showDuplicateCourseError={showDuplicateCourseError} setShowDupCourseErr={setShowDupCourseErr} />
                    <PrerequisiteError_Toast setPrereqCourseErr={setPrereqCourseErr} showPrereqCourseErr={showPrereqCourseErr} />

                    <Button className="btn btn-success text-center m-2" data-testid="Add-Course" onClick={() => addCourse(newClassInput)}>
                        Add Course
                    </Button>
                    <Button className="btn btn-info text-center m-2" data-testid="courseInfoButton" onClick={() => showCourseInfo(newClassInput)}>
                        Show Course Info
                    </Button>
                    <Button className="btn btn-secondary text-center m-2" onClick={() => setShowModal(true)}>
                        Edit Course
                    </Button>
                </Form>
            </div>

            <div className="col-6 text-center">
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
    );
}