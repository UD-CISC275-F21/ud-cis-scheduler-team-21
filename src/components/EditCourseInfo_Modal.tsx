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
    const [courseDescription, setCourseDescription] = useState("courseDescription");
    const [courseName, setCourseName] = useState("courseName");
    const [courseCredits, setCourseCredits] = useState("courseCredits");
    const [coursePrereqs, setCoursePrereqs] = useState("coursePrereqs");


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
                        <div className="col-5 text-center">
                            <p>Edit {crsID} Name: </p>
                        </div>
                        <div className="col-7 text-center">
                            <input id="NameInput" type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-center">
                            <p>Edit {crsID} Description: </p>
                        </div>
                        <div className="col-7 text-center">
                            <input id="DescriptionInput" type="text" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-center">
                            <p>Edit {crsID} Credits: </p>
                        </div>
                        <div className="col-7 text-center">
                            <input id="CreditInput" type="text" value={courseCredits} onChange={(e) => setCourseCredits(e.target.value)} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 text-center">
                            <p>Edit {crsID} Prerequisites: </p>
                        </div>
                        <div className="col-7 text-center">
                            <input id="PrereqsInput" type="text" value={coursePrereqs} onChange={(e) => setCoursePrereqs(e.target.value)} />
                        </div>
                    </div>
                    <Button variant="primary" onClick={() => saveNewData()}>Save</Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}
