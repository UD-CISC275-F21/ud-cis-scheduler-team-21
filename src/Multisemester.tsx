import React from "react";
import "./App.css";
import { Semester } from "./OneSemester";
import { semester_list } from "./Globals";

function MultiSemester(): JSX.Element {

    return (

        <div className="container-fluid padding">

            <div className="row padding">
                <div className="Year">
                    <h4>First Year</h4>
                </div>
                <Semester course_1={semester_list[0].course_1}
                    course_2={semester_list[0].course_2}
                    course_3={semester_list[0].course_3}
                    course_4={semester_list[0].course_4}
                    course_5={semester_list[0].course_5}
                    semester_number= {semester_list[0].semester_number}
                />

                <Semester course_1={semester_list[1].course_1}
                    course_2={semester_list[1].course_2}
                    course_3={semester_list[1].course_3}
                    course_4={semester_list[1].course_4}
                    course_5={semester_list[1].course_5}
                    semester_number= {semester_list[1].semester_number}
                />
            </div>

            <div className="row padding">
                <div className="Year">
                    <h4>Second Year</h4>
                </div>

                <Semester course_1={semester_list[2].course_1}
                    course_2={semester_list[2].course_2}
                    course_3={semester_list[2].course_3}
                    course_4={semester_list[2].course_4}
                    course_5={semester_list[2].course_5}
                    semester_number= {semester_list[2].semester_number}
                />

                <Semester course_1={semester_list[3].course_1}
                    course_2={semester_list[3].course_2}
                    course_3={semester_list[3].course_3}
                    course_4={semester_list[3].course_4}
                    course_5={semester_list[3].course_5}
                    semester_number= {semester_list[3].semester_number}
                />
            </div>

            <div className="row padding">
                <div className="Year">
                    <h4>Third Year</h4>
                </div>

                <Semester course_1={semester_list[4].course_1}
                    course_2={semester_list[4].course_2}
                    course_3={semester_list[4].course_3}
                    course_4={semester_list[4].course_4}
                    course_5={semester_list[4].course_5}
                    semester_number= {semester_list[4].semester_number}
                />

                <Semester course_1={semester_list[5].course_1}
                    course_2={semester_list[5].course_2}
                    course_3={semester_list[5].course_3}
                    course_4={semester_list[5].course_4}
                    course_5={semester_list[5].course_5}
                    semester_number= {semester_list[5].semester_number}
                />
            </div>

            <div className="row padding">

                <div className="Year">
                    <h4>Fourth Year</h4>
                </div>

                <Semester course_1={semester_list[6].course_1}
                    course_2={semester_list[6].course_2}
                    course_3={semester_list[6].course_3}
                    course_4={semester_list[6].course_4}
                    course_5={semester_list[6].course_5}
                    semester_number= {semester_list[6].semester_number}
                />

                <Semester course_1={semester_list[7].course_1}
                    course_2={semester_list[7].course_2}
                    course_3={semester_list[7].course_3}
                    course_4={semester_list[7].course_4}
                    course_5={semester_list[7].course_5}
                    semester_number= {semester_list[7].semester_number}
                />
            </div>

        </div>
    );
}

export default MultiSemester;