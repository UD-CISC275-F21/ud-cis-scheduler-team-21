import React, { useState } from "react";
import "./App.css";
import { Semester_SS } from "./OneSemester";
import { semester_list } from "./Globals";

function SingleSemester(): JSX.Element {

    const [focused_semester, updateFocus] = useState(<Semester_SS course_set={semester_list[0].course_set}
        semester_number={semester_list[0].semester_number}
    />);

    const [current_semester_num, changeSemNum] = useState(0);

    //shows next semester on click
    const next_click = () => {
        if (current_semester_num < semester_list.length-1) {
            changeSemNum(v => v + 1);
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_set={semester_list[current_semester_num + 1].course_set}
                semester_number={semester_list[current_semester_num + 1].semester_number}
            />);
        }
    };

    //shows perv semester on click
    const prev_click = () => {
        
        if (current_semester_num > 0) {
            changeSemNum(v => v - 1);
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_set={semester_list[current_semester_num - 1].course_set}
                semester_number={semester_list[current_semester_num - 1].semester_number}
            />);
        }  
    };

    //Removes the semester
    const remove_semester = () => {
        semester_list.splice(current_semester_num,1);
        if (current_semester_num < semester_list.length-1) {
            //changeSemNum(v => v + 1);
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_set={semester_list[current_semester_num].course_set}
                semester_number={semester_list[current_semester_num].semester_number}

            />);

        }

    };



    //Removes the semester
    const remove_Allsemester = () => {
        semester_list.splice(0,semester_list.length);
        if (current_semester_num < semester_list.length-1) {
            //changeSemNum(v => v + 1);
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_set={semester_list[current_semester_num].course_set}
                semester_number={semester_list[current_semester_num].semester_number}

            />);

        }

    };



    return (

        <div className="container-fluid padding text-left">
            <div className="row padding">
                <div className="col-sm-2 col-md-3 col-lg-4 text-center">
                    <button type="button" className="btn btn-primary m-3" onClick={() => prev_click()}>Previous</button>
                    <button type="button" className="btn btn-primary m-3" onClick={() => next_click()}>Next</button>
                    <button type="button" className="btn btn-danger m-3" onClick={() => remove_semester()}>Remove</button>
                    <button type="button" className="btn btn-danger m-3" onClick={() => remove_Allsemester()}>Remove All</button>


                </div>
            </div>

            {focused_semester}


        </div>


    );
}

export default SingleSemester;