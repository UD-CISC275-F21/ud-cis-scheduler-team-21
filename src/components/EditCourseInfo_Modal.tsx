import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import data from "../assets/data.json";


interface EditCourseInfo_Modal_Inputs {
    showModal: boolean;
    setShow: (b: boolean) => void;
    crsID: string;
}

export function EditCourseInfo_Modal({ showModal, setShow, crsID }: EditCourseInfo_Modal_Inputs): JSX.Element {

    //---------------------------Constants---------------------------
    const handleClose = () => setShow(false);
    const [courseDescription, setCourseDescription] = useState("Course Description");
    const [courseName, setCourseName] = useState("Course Name");
    const [courseCredits, setCourseCredits] = useState("Course Credits");
    const [coursePrereqs, setCoursePrereqs] = useState("Course Prereqs");


    //---------------------------Functions---------------------------

    //saves the data in the modal as the new data for the course
    function saveNewData(): void {
        data.map((courseList) => {
            if (courseList.id == crsID) {
                courseList.description = courseDescription;
                courseList.name = courseName;
                courseList.credits = courseCredits;
                courseList.prereqs = coursePrereqs;
                setShow(false);
            }
        });
    }


    //---------------------------Use Effect---------------------------
    useEffect(() => {
        data.map((courseList) => {
            if (courseList.id == crsID) {
                setCourseDescription(courseList.description);
                setCourseName(courseList.name);
                setCourseCredits(courseList.credits);
                setCoursePrereqs(courseList.prereqs);
            }
        });
    }, [crsID]);


    //---------------------------Return Statement---------------------------
    return (
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Edit the traits of: {crsID}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="row">
                        <div className="col-3 text-center mt-3">
                            <p><b>Name </b></p>
                        </div>
                        <div className="col-9 text-center">
                            <textarea className="form-control m-1" aria-label="inputName" id="NameInput" value={courseName} onChange={(e) => setCourseName(e.target.value)}></textarea>                          
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center mt-3">
                            <p><b>Description </b></p>
                        </div>
                        <div className="col-9 text-center">
                            <textarea className="form-control m-1" aria-label="inputDescription" id="DescriptionInput" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center mt-3">
                            <p><b>Credits</b></p>
                        </div>
                        <div className="col-9 text-center">
                            <textarea className="form-control m-1" id="CreditInput" value={courseCredits} onChange={(e) => setCourseCredits(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center mt-3">
                            <p><b>Prerequisites</b></p>
                        </div>
                        <div className="col-9 text-center">
                            <textarea className="form-control m-1" id="PrereqsInput" value={coursePrereqs} onChange={(e) => setCoursePrereqs(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="text-center mt-2">
                        <Button variant="primary" onClick={() => saveNewData()}>Save</Button>
                    </div>
 
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}
