import React from "react";
import "./App.css";
//import PropTypes from "prop-types";

type CourseIntf = {
    crsName: string,
    crsDescription: string,
    crsCredits: string
}
export const Course = ({crsName, crsDescription, crsCredits}: CourseIntf) => 
    //return (
        <div className="row padding">
            <div className="col-md-8">
                <p>
                    <b>{crsName}</b> {crsDescription}
                </p>
            </div>
            <div className="col-md-4">
                <p>{crsCredits}</p>
            </div>
        </div>
    //);//as JSX.Element;
//}

//export default Course;