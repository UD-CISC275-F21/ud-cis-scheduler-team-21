import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import data from "../assets/data.json";


interface Modal_Helper_Intf {
    showModal: boolean;
    setShow: (b: boolean) => void;
    crsID: string;
}
export function Mod({ showModal, setShow, crsID }: Modal_Helper_Intf): JSX.Element {
    const handleClose = () => setShow(false);
    const [courseDescription, setCourseDescription] = useState("courseDescription");
    const [courseName, setCourseName] = useState("courseName");
    const [courseCredits, setCourseCredits] = useState("courseCredits");
    const [coursePrereqs, setCoursePrereqs] = useState("coursePrereqs");
    //const handleShow = () => setShow(true);
    //console.log(crsName);

    function saveData(): void {
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
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Welcome to the editing window</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <form>
                        <input id="DescriptionInput" type="text" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
                    </form>
                    <form>
                        <input id="NameInput" type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                    </form>
                    <form>
                        <input id="CreditInput" type="text" value={courseCredits} onChange={(e) => setCourseCredits(e.target.value)} />
                    </form>
                    <form>
                        <input id="PrereqsInput" type="text" value={coursePrereqs} onChange={(e) => setCoursePrereqs(e.target.value)} />
                    </form>
                    <button type="submit" onClick={() => saveData()}>
                        Save
                    </button>


                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
}
