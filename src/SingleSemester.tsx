import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Autocomplete, TextField } from "@mui/material";
import "./App.css";
import { Semester_SS, SemesterIntf, CourseIntf } from "./OneSemester";
import data from "./assets/data.json";

interface Single_Semester_View {
    userSemesters: SemesterIntf[];
    updateSemesters: (s: SemesterIntf[]) => void;
}

export function SingleSemester({ userSemesters, updateSemesters }: Single_Semester_View): JSX.Element {

    //Constants-------------------
    const [current_semester_num, changeSemNum] = useState(0);
    const [inpu, setInpu] = useState<string>("");


    //Functions-------------------

    //Removes the semester
    const remove_semester = () => {
        const modifiedSemesterList: SemesterIntf[] = [];
        userSemesters.forEach((semester: SemesterIntf) => {
            modifiedSemesterList.push(semester);
        });
        modifiedSemesterList.splice(current_semester_num, 1);
        modifiedSemesterList.forEach((semester: SemesterIntf, index: number) => {
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

    //adds a course to the current semester
    function addCourse(entered_id: string): void {
        let new_crs: CourseIntf = { crsName: "", crsDescription: "", crsCredits: 0 };
        const modifiedSemesterList: SemesterIntf[] = [];
        userSemesters.forEach((semester: SemesterIntf) => {
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


    //Return Statement-------------
    return (
        <>
            <div className="container-fluid padding text-left">
                <div className="row">
                    <div className="col-6">
                        <div className="text-center">
                            <button type="button" className="col-2 btn btn-primary m-1"
                                onClick={() => changeSemNum(v => v - 1)}>Previous</button>
                            <button type="button" className="col-2 btn btn-danger m-1"
                                onClick={() => remove_semester()}>Remove</button>
                            <button type="button" className="col-2 btn btn-primary m-1"
                                onClick={() => changeSemNum(v => v + 1)}>Next</button>
                        </div>
                        <Semester_SS course_set={userSemesters[current_semester_num].course_set}
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
                                }} disablePortal id="combo-box-demo" options={getAllCourses()} renderInput={(params) => <TextField {...params} size={undefined} variant='outlined' label="Enter Course Code" placeholder="CISC" />} />
                            </Form.Group>
                            <Button onClick={() => {
                                addCourse(inpu);
                            }}>
                                Add Course
                            </Button>

                        </Form>

                    </div>

                    <div className="col-3">
                        <h3 className="text-center text-warning mt-5"><b>Requirements</b></h3>
                    </div>
                </div>

            </div>
        </>
    );
}