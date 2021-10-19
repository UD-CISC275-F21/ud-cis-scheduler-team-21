import React from "react";
import "./App.css";
import PropTypes from "prop-types";

/*Course.propTypes = {
    crsName: PropTypes.string,

}*/
const Course=({
    crsName,
    description,
    credits
})=>{
    Course.propTypes = {
        crsName: PropTypes.string,
        description: PropTypes.string,
        credits: PropTypes.string
    }
//function Course(crsName: string, description: string, credits: string): JSX.Element{
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

export default Course;