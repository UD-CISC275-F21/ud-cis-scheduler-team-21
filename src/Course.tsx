import React, { FunctionComponent } from "react";
import "./App.css";

export type CourseIntf = {
    crsName: string,
    crsDescription: string,
    crsCredits: number
}


export const Course: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits }) =>

    <tr>
        <td><b>{crsName}:</b> {crsDescription}</td>
        <td>{crsCredits}</td>
    </tr>;