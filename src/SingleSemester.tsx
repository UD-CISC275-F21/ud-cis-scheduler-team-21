import React, { useState } from "react";
import "./App.css";
import { Semester_SS } from "./OneSemester";
import { semester_list } from "./Globals";
import Data from "./assets/data.json";

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
        if (current_semester_num < semester_list.length) {
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_set={semester_list[current_semester_num].course_set}
                semester_number={semester_list[current_semester_num].semester_number}

            />);

        }

    };

    //Removes all the semester
    const remove_Allsemester = () => {
        semester_list.splice(0,semester_list.length);
        if (current_semester_num < semester_list.length-1) {
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
                    <button type="button" className="btn btn-primary m-3" onClick={() => prev_click()}>Previous Semester</button>
                    <button type="button" className="btn btn-primary m-3" onClick={() => next_click()}>Next Semester</button>
                    <button type="button" className="btn btn-danger m-3" onClick={() => remove_semester()}>Remove Semester</button>
                    <button type="button" className="btn btn-danger m-3" onClick={() => remove_Allsemester()}>Remove All Semesters</button>

                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    {focused_semester}
                </div>

                <div className="col-3">
                    <h2 className="text-center"><b>Add course</b></h2> 
                    <h5 className="text-center">Add course to the Semester {current_semester_num + 1}</h5>
                    <div className="text-center">
                        <input className="text-center" placeholder="Enter Course Code"></input>

                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-secondary m-3">Hold</button>
                        <button type="button" className="btn btn-success m-3">Add</button>

                    </div>
                    {
                        Data.map(post =>{
                            return(
                                <div key={post.id}>
                                    <h4>{post.id}</h4>
                                    <p>{post.name}</p>
                                    <p className="text-center">{post.credits}</p>
                                </div>
                            );
                        })
                    }

                </div>

                <div className="col-3">
                    <h2 className="text-center"><b>Requirements</b></h2>
                </div>
            </div>
            
          



        </div>


    );
}

export default SingleSemester;