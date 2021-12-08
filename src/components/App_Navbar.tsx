import React from "react";
import { Nav, Button, Col, Row } from "react-bootstrap";

interface App_Navbar_Inputs {
    setShow: (b: boolean) => void;
    setWidth: (n: number) => void;
}

export function App_Navbar({ setShow, setWidth }: App_Navbar_Inputs): JSX.Element {

    //---------------------------Functions---------------------------

    //Shows degree requirement panel
    function showDegReqs(): void {
        setShow(true);
        setWidth(9);
    }


    //---------------------------Return Statement---------------------------
    return (
        <>
            <hr></hr>
            <Nav variant="pills" role="button" className="flex-row text-center">
                <Col md={10}>
                    <Row>
                        <Nav.Item><Nav.Link eventKey="first">Welcome and Help</Nav.Link></Nav.Item>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Nav.Item><Nav.Link eventKey="second">My Plan</Nav.Link></Nav.Item>
                        </Col>
                        <Col md={6}>
                            <Nav.Item><Nav.Link eventKey="third">Edit Plan</Nav.Link></Nav.Item>
                        </Col>
                    </Row>
                </Col>
                <Col md={2} className="text-center">
                    <Button variant="secondary" onClick={() => showDegReqs()}>View Degree Requirements</Button>
                </Col>
            </Nav>
            <hr></hr>
        </>
    );
}
