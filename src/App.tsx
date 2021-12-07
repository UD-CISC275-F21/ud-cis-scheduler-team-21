import React, { useState } from "react";
import { Tab, Col } from "react-bootstrap";
import "./App.css";
import { MyPlan_Pane } from "./components/MyPlan_Pane";
import ScrollToTopBtn from "./components/gotToTop";
import { EditSemesters_Pane } from "./components/EditSemesters_Pane";
import { Semester } from "./interfaces/Semester";
import { semester_list } from "./assets/Globals";
import { WelcomeAndHelp_Pane } from "./components/WelcomeAndHelp_Pane";
import { DegreeRequirements_Section } from "./components/DegreeRequirements_Section";
import { App_Navbar } from "./components/App_Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {

    //Constants-------------------
    const [userSemesters, updateSemesters] = useState<Semester[]>(semester_list);

    const [DegreeReq_View_State, toggleDegreeReqView] = useState(false);
    const [app_Content_Width, setAppContentWidth] = useState(12);

    const notify = () => toast("Go to the 'Welcome and Help' Page to see instructions and clear up any confusion you may have");

    //Return Statement---------------
    return (
        <div className="App">

            <header className="App-header">
                <h1 className="mt-4">UD CIS Scheduler</h1>
            </header>

            <div className="text-left"><img className="logo" src={logo} alt="Logo" /></div>

            <div className="help">
                <button className="btn-sm btn-info" onClick={notify}>Help</button>
                <ToastContainer />
            </div>

            <Col md={app_Content_Width}>

                <DegreeRequirements_Section show={DegreeReq_View_State} setShow={toggleDegreeReqView} setWidth={setAppContentWidth} />

                <Tab.Container defaultActiveKey="first">

                    <App_Navbar setShow={toggleDegreeReqView} setWidth={setAppContentWidth} />

                    <Tab.Content>
                        <Tab.Pane eventKey="first"> <WelcomeAndHelp_Pane /> </Tab.Pane>

                        <Tab.Pane eventKey="second"> <MyPlan_Pane userSemesters={userSemesters} updateSemesters={updateSemesters} /> </Tab.Pane>

                        <Tab.Pane data-testid="editPlan" eventKey="third"> <EditSemesters_Pane userSemesters={userSemesters} updateSemesters={updateSemesters} /> </Tab.Pane>

                        <ScrollToTopBtn />

                    </Tab.Content>
                    
                </Tab.Container>
            </Col>


        </div>

    );
}

export default App;
