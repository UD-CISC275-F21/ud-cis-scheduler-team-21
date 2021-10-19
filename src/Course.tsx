import React from "react";
import "./App.css";

export const Course=({
    string: crsName,
    string: description,
    string: credits
})=>{
    return (
        <div className="row padding">
            <div className="col-md-8">
                <p>
                    <b>{crsName}</b> {description}
                </p>
            </div>
            <div className="col-md-4">
                <p>{credits}</p>
            </div>
        </div>
    );
};

//export default Course;