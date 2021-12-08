import React from "react";
import { Offcanvas } from "react-bootstrap";


interface Degree_Requirements_Inputs {
    show: boolean;
    setShow: (b: boolean) => void;
    setWidth: (n: number) => void;
}

export function DegreeRequirements_Section({ show, setShow, setWidth }: Degree_Requirements_Inputs): JSX.Element {

    //---------------------------Functions---------------------------

    //Hides degree requirement panel
    function hideDegReqs(): void {
        setShow(false);
        setWidth(12);
    }


    //---------------------------Return Statement---------------------------
    return (
        <Offcanvas show={show} placement="end" scroll={true} backdrop={true} onHide={() => hideDegReqs()}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Degree Requirements</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                This will eventually be an active list. indicating which of the
                degree requirements have been met by the current plan and which have not
            </Offcanvas.Body>
        </Offcanvas>
    );
}