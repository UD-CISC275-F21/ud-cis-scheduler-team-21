import React, { useState} from "react";
import { Tab, Nav, Offcanvas, Button, Col } from "react-bootstrap";
import "./App.css";
import {MultiSemester} from "./Multisemester";
import {SingleSemester} from "./SingleSemester";
import { SemesterIntf} from "./OneSemester";
import {semester_list} from "./Globals";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

function App(): JSX.Element {

    const [userSemesters, updateSemesters] = useState<SemesterIntf[]>(semester_list);


    const [show, setShow] = useState(false);
    const [mainViewWidth, setWidth] = useState(12);

    function hideDegReqs():void{
        setShow(false);
        setWidth(12);
    }

    function showDegReqs():void{
        setShow(true);
        setWidth(9);
    }

    return (
        <div className="App">

            <header className="App-header">
                <h1 >UD CIS Scheduler</h1>
            </header>

            <div className="text-left"><img className="logo" src={logo} alt="Logo" /></div>
            <div className="text-center"></div>

            <hr></hr>

            <Col md={mainViewWidth}>

                <Offcanvas show={show} placement="end" scroll={true} backdrop={true} onHide={() => hideDegReqs()}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Degree Requirements</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        This will eventually be an active list. indicating which of the
                        degree requirements have been met by the current plan and which have not
                    </Offcanvas.Body>
                </Offcanvas>

                <Tab.Container defaultActiveKey="first">
                    <Nav variant="pills" className="flex-row">
                        <Col md={10}>
                            <Nav.Item>
                                <Nav.Link eventKey="first">My Plan</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Edit Semesters</Nav.Link>
                            </Nav.Item>
                        </Col>

                        <Col md={2} className="text-center padding">
                            <Button variant="primary" onClick={() => showDegReqs()}>
                                View Degree Requirements
                            </Button>
                        </Col>
                    </Nav>

                    <hr></hr>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <MultiSemester userSemesters={userSemesters} updateSemesters={updateSemesters} />
                        </Tab.Pane>
                        
                        <Tab.Pane eventKey="second">
                            <SingleSemester userSemesters={userSemesters} updateSemesters={updateSemesters} />
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>

            </Col>

        </div>

    );
}

export default App;
