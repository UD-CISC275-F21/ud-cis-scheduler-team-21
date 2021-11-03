import React from "react";
import "./App.css";
import { Semester_MS } from "./OneSemester";
import { semester_list } from "./Globals";

function MultiSemester(): JSX.Element {

    return (

        <div className="container-fluid padding">

            <div className="row padding">
                <div className="Year">
                    <h4>First Year</h4>
                </div>
                <Semester_MS course_set={semester_list[0].course_set}
                    semester_number={semester_list[0].semester_number}
                />

                <Semester_MS course_set={semester_list[1].course_set}
                    semester_number={semester_list[1].semester_number}
                />
            </div>

            <div className="row padding">
                <div className="Year">
                    <h4>Second Year</h4>
                </div>

                <Semester_MS course_set={semester_list[2].course_set}
                    semester_number={semester_list[2].semester_number}
                />

                <Semester_MS course_set={semester_list[3].course_set}
                    semester_number={semester_list[3].semester_number}
                />
            </div>

            <div className="row padding">
                <div className="Year">
                    <h4>Third Year</h4>
                </div>

                <Semester_MS course_set={semester_list[4].course_set}
                    semester_number={semester_list[4].semester_number}
                />

                <Semester_MS course_set={semester_list[5].course_set}
                    semester_number={semester_list[5].semester_number}
                />
            </div>

            <div className="row padding">

                <div className="Year">
                    <h4>Fourth Year</h4>
                </div>

                <Semester_MS course_set={semester_list[6].course_set}
                    semester_number={semester_list[6].semester_number}
                />

                <Semester_MS course_set={semester_list[7].course_set}
                    semester_number={semester_list[7].semester_number}
                />
            </div>

            <div className="col text-center">
                <button type="button" className="btn btn-primary btn-lg m-3">Add Semester</button>
                <button type="button" className="btn btn-danger btn-lg m-3">Remove All</button>
                <form>
                    <button type="submit" className="btn btn-secondary btn-lg m-3">Reset</button>
                </form>
            </div>
        </div>
    );
}

export default MultiSemester;