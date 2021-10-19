import React from "react";
import "./App.css";

/*export const Course = ({
    CrsName,
    CrsDescription,
    CrsCredits
})*/

function Course(): JSX.Element {
    return (
        <div className="row padding">
            <div className="col-md-8">
                <p>
                    <b>EGGG 101</b> Introduction to Engineering
                </p>
            </div>
            <div className="col-md-4">
                <p>2</p>
            </div>
        </div>
    );
}

export default Course;