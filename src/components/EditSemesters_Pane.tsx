import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
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
    const [inpu, setInpu] = useState<string>("");


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

    //Adds a course to the current semester
    function addCourse(entered_id: string): void {
        let new_crs: Course = { crsName: "", crsDescription: "", crsCredits: 0 };
        const modifiedSemesterList: Semester[] = [];
        userSemesters.forEach((semester: Semester) => {
            modifiedSemesterList.push(semester);
        });
        data.map((courseList) => {
            if (courseList.id == entered_id) {
                new_crs = { crsName: courseList.id, crsDescription: courseList.name, crsCredits: parseInt(courseList.credits, 10) };
                modifiedSemesterList[current_semester_num].course_set.push(new_crs);
                updateSemesters(modifiedSemesterList);
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
                            <button type="button" className="col-2 btn btn-primary m-3"
                                onClick={() => show_Prev_Semester()}>Previous</button>
                            <button type="button" className="col-2 btn btn-danger m-3"
                                onClick={() => remove_semester()}>Remove</button>
                            <button type="button" className="col-2 btn btn-primary m-3"
                                onClick={() => show_Next_Semester()}>Next</button>
                        </div>

                        <SingleSemesterDisplay course_set={userSemesters[current_semester_num].course_set}
                            semester_number={userSemesters[current_semester_num].semester_number}
                            userSemesters={userSemesters} updateSemesters={updateSemesters}
                        />
                    </div>

                    <div className="col-3 text-center">
                        <h2 className="text-success mt-5"><b>Add Course</b></h2>
                        <Form id="searchBar" onSubmit={(event) => {
                            addCourse(inpu);
                            event.preventDefault();
                        }}>
                            <Form.Group className="mb-3">
                                <Form.Label>Enter the desired course code:</Form.Label>
                                <Autocomplete onChange={(event, value) => {
                                    setInpu(value as string); event.preventDefault();
                                }} disablePortal id="combo-box-demo" options={getAllCourses()} renderInput={(params) => <TextField {...params} size={undefined} variant='outlined' label="Enter Course ID" placeholder="CISC" />} />
                            </Form.Group>

                            <Button className="btn btn-success text-center m-2" onClick={() => {
                                addCourse(inpu);
                            }}>
                                Add Course
                            </Button>

                            <Button className="btn btn-info text-center m-2">
                                Course Info
                            </Button>

                        </Form>
                    </div>

                    <div className="col-3 text-center">
                        <h3 className="text-info mt-5"><b>Course Info</b></h3>
                        <div>
                            <h5>Name</h5>
                            <p>Course Name here</p>
                            <h5>Description</h5>
                            <p>Course Description here</p>
                            <h5>credits</h5>
                            <p>Course Credits here</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}