import React from "react";
import { Toast } from "react-bootstrap";


//-----------------------------------------------Duplicate Error Toast: Component (1/2)--------------------------------------------//
interface DuplicateError_Inputs {
    showDuplicateCourseError: boolean;
    setShowDupCourseErr: (b: boolean) => void;
}

export function DuplicateError_Toast({ showDuplicateCourseError, setShowDupCourseErr }: DuplicateError_Inputs): JSX.Element {
    return (
        <>
            <Toast bg="danger" onClose={() => setShowDupCourseErr(false)} show={showDuplicateCourseError} delay={8000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Error: Course Already in Plan </strong>
                </Toast.Header>
                <Toast.Body>
                    <p><b>The course you are trying to add is already in your current plan!</b></p>
                    <p>(If it`s not in the current semester, it might be in one of the other semesters included in your plan)</p>
                </Toast.Body>
            </Toast>
        </>
    );
}



//-----------------------------------------------Prerequisite Error Toast: Component (2/2)--------------------------------------------//
interface PrerequisiteError_Inputs {
    showPrereqCourseErr: boolean;
    setPrereqCourseErr: (b: boolean) => void;
}

export function PrerequisiteError_Toast({ showPrereqCourseErr, setPrereqCourseErr }: PrerequisiteError_Inputs): JSX.Element {
    return (
        <>
            <Toast bg="danger" onClose={() => setPrereqCourseErr(false)} show={showPrereqCourseErr} delay={8000} autohide>
                <Toast.Header>
                    <strong className="me-auto">Error: Not all Prerequisites</strong>
                </Toast.Header>
                <Toast.Body>
                    <p><b>The course you are trying to add has prerequisites not included in your plan!</b></p>
                    <p>(If you would like to add this class, please first add all of its prerequisites)</p>
                </Toast.Body>
            </Toast>
        </>
    );
}
