import React, { FunctionComponent } from "react";
import "./App.css";

export type CourseIntf = {
    crsName: string,
    crsDescription: string,
    crsCredits: string
}


export const Course: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits }) =>

    <div className="row padding">
        <div className="col-md-8">
            <p>
                <b>{crsName}</b> {crsDescription}
            </p>
        </div>
        <div className="col-md-4">
            <p>{crsCredits}</p>
        </div>
    </div>;
