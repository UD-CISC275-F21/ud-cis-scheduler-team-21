import React from "react";
import "./App.css";
import { Semester } from "./OneSemester";
import { semester_list } from "./Globals";

function SingleSemester(): JSX.Element {

    const current_semester_num = 1;

    return (

        <div className="container-fluid padding text-center">

            <div className="row padding">
                <div className="col-sm-2 col-md-3 col-lg-4 text-center">
                    <button type="button" className="btn btn-primary m-3 ">Previous Semester</button>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-4 text-center">
                    <h3>Semester #{current_semester_num}</h3>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-4 text-center">
                    <button type="button" className="btn btn-primary m-3 ">Next Semester</button>
                </div>
            </div>


            <Semester course_1={semester_list[0].course_1}
                course_2={semester_list[0].course_2}
                course_3={semester_list[0].course_3}
                course_4={semester_list[0].course_4}
                course_5={semester_list[0].course_5}
                semester_number={semester_list[0].semester_number}
            />

        </div>
    );
}

export default SingleSemester;