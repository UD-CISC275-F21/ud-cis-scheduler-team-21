import React, { useState } from "react";
import "./App.css";
import { Semester_SS } from "./OneSemester";
import { semester_list } from "./Globals";

function SingleSemester(): JSX.Element {

    const[focused_semester, updateFocus] = useState(<Semester_SS course_1={semester_list[0].course_1}
        course_2={semester_list[0].course_2}
        course_3={semester_list[0].course_3}
        course_4={semester_list[0].course_4}
        course_5={semester_list[0].course_5}
        semester_number={semester_list[0].semester_number}
    />);

    const [current_semester_num, changeSemNum] = useState(0);

    const next_click=()=>{
        if(current_semester_num<7){
            changeSemNum(v=>v+1);
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_1={semester_list[current_semester_num+1].course_1}
                course_2={semester_list[current_semester_num+1].course_2}
                course_3={semester_list[current_semester_num+1].course_3}
                course_4={semester_list[current_semester_num+1].course_4}
                course_5={semester_list[current_semester_num+1].course_5}
                semester_number={semester_list[current_semester_num+1].semester_number}
            />);
        }
    };
    const prev_click=()=>{
        if(current_semester_num>0){
            changeSemNum(v=>v-1);
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_1={semester_list[current_semester_num-1].course_1}
                course_2={semester_list[current_semester_num-1].course_2}
                course_3={semester_list[current_semester_num-1].course_3}
                course_4={semester_list[current_semester_num-1].course_4}
                course_5={semester_list[current_semester_num-1].course_5}
                semester_number={semester_list[current_semester_num-1].semester_number}
            />);
        }
    };

    return (

        <div className="container-fluid padding text-center">

            <div className="row padding">
                <div className="col-sm-2 col-md-3 col-lg-4 text-center">
                    <button type="button" className="btn btn-primary m-3" onClick={() => prev_click()}>Previous Semester</button>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-4 text-center">
                    <h3>Semester #{current_semester_num+1}</h3>
                </div>
                <div className="col-sm-2 col-md-3 col-lg-4 text-center">
                    <button type="button" className="btn btn-primary m-3" onClick={() => next_click()}>Next Semester</button>
                </div>
            </div>


            {focused_semester}

        </div>
    );
}

export default SingleSemester;