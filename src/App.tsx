import React, { useState} from "react";
import { Tab, Nav, Offcanvas, Button, Col, Row} from "react-bootstrap";
import "./App.css";
import { MyPlan_Pane } from "./components/MyPlan_Pane";
import ScrollToTopBtn from "./components/gotToTop";
import { EditSemesters_Pane } from "./components/EditSemesters_Pane";
import { Semester } from "./interfaces/Semester";
import {semester_list} from "./assets/Globals";
import {WelcomeAndHelp_Pane} from "./components/WelcomeAndHelp_Pane";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {

    //Constants-------------------
    const [userSemesters, updateSemesters] = useState<Semester[]>(semester_list);

    const [show, setShow] = useState(false);
    const [mainViewWidth, setWidth] = useState(12);

    const notify = () => toast("This website offers you to plan your degree, choose courses and manage your credits per semester");


    //Functions-------------------

    //Hides degree requirement panel
    function hideDegReqs():void{
        setShow(false);
        setWidth(12);
    }

    //Shows degree requirement panel
    function showDegReqs():void{
        setShow(true);
        setWidth(9);
    }

    
    //Return Statement---------------
    return (
        <div className="App">

            <header className="App-header">
                <h1 className="mt-4">UD CIS Scheduler</h1>
            </header>
            

            <div className="text-left"><img className="logo" src={logo} alt="Logo" /></div>
            <div className="help">
                <button  className="btn-sm btn-info" onClick={notify}>Help</button>
                <ToastContainer />
            </div>


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
                    <Nav variant="pills" role="button" className="flex-row text-center">
                        <Col md={10}>
                            <Row>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Welcome and Help</Nav.Link>
                                </Nav.Item>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">My Plan</Nav.Link>
                                    </Nav.Item>
                                </Col>
                                <Col md={6}>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Edit Semesters</Nav.Link>
                                    </Nav.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="text-center">
                            <Button variant="secondary" onClick={() => showDegReqs()}>
                                View Degree Requirements
                            </Button>
                        </Col>
                    </Nav>

                    <hr></hr>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <WelcomeAndHelp_Pane />
                        </Tab.Pane>


                        
                        <Tab.Pane eventKey="second">
                            <MyPlan_Pane userSemesters={userSemesters} updateSemesters={updateSemesters} />
                        </Tab.Pane>

                        <ScrollToTopBtn />

                        <Tab.Pane eventKey="third">
                            <EditSemesters_Pane userSemesters={userSemesters} updateSemesters={updateSemesters} />
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>
            </Col>


        </div>

    );
}

export default App;
