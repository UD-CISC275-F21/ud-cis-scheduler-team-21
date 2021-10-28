import React, { FunctionComponent } from "react";
import "./App.css";

export type CourseIntf = {
    crsName: string,
    crsDescription: string,
    crsCredits: number
}


export const Course_MS: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits }) =>

    <tr>
        <td><b>{crsName}:</b> {crsDescription}</td>
        <td>{crsCredits}</td>
    </tr>
    ;

export const Course_SS: FunctionComponent<CourseIntf> = ({ crsName, crsDescription, crsCredits }) =>

    <tr>
        <td><b>{crsName}:</b> {crsDescription}</td>
        <td>{crsCredits}</td>
        <td> <button type="button" className="btn btn-primary m-3 ">X</button></td>
    </tr>
    ;