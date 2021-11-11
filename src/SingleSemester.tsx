import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Autocomplete, TextField } from "@mui/material";
import "./App.css";
import { Semester_SS, SemesterIntf, CourseIntf} from "./OneSemester";
import { semester_list } from "./Globals";
import data from "./assets/data.json";

function SingleSemester(): JSX.Element {

    const [focused_semester, updateFocus] = useState(<Semester_SS course_set={semester_list[0].course_set}
        semester_number={semester_list[0].semester_number}
    />);

    const [current_semester_num, changeSemNum] = useState(0);

    const [inpu, setInpu] = useState<string>("");

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
        semester_list.forEach((semester: SemesterIntf, index: number)=>{
            semester.semester_number = index+1;
        });
        
        if (current_semester_num < semester_list.length-1) {
            console.log(current_semester_num);
            updateFocus(<Semester_SS course_set={semester_list[current_semester_num].course_set}
                semester_number={semester_list[current_semester_num].semester_number}
            />);
        }

    };
    /*
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
    */

    function holdCourse(entered_id:string):void{
        console.log(entered_id);
        alert("Course has been added to the pool");
    }


    function getAllCourses():string[]{
        const id_list:string[]=[];
        data.map((courseList) => {
            id_list.push(courseList.id);
        });
        //console.log(id_list);
        return id_list;
    }

    function addCourse(entered_id:string):void{
        //console.log(entered_id);
        //const new_crs: CourseIntf = { crsName: [], crsDescription: semester_list[semester_list.length-1].semester_number + 1, crsCredits: };
        let new_crs: CourseIntf = { crsName: "", crsDescription: "", crsCredits: 0 }; 
        data.map((courseList) => {
            if(courseList.id == entered_id){
                new_crs = { crsName: courseList.id, crsDescription: courseList.name, crsCredits: parseInt(courseList.credits)};
            }
        });
        semester_list[current_semester_num].course_set.push(new_crs);
        updateFocus(<Semester_SS course_set={semester_list[current_semester_num].course_set}
            semester_number={semester_list[current_semester_num].semester_number}
        />);
    }


    return (

        <div className="container-fluid padding text-left">
            <div className="row">
                <div className="col-7">
                    <div className="text-center">
                        <button type="button" className="col-2 btn btn-primary m-1" 
                            onClick={() => prev_click()}>Previous</button>
                        <button type="button" className="col-2 btn btn-danger m-1" 
                            onClick={() => remove_semester()}>Remove</button>
                        <button type="button" className="col-2 btn btn-primary m-1" 
                            onClick={() => next_click()}>Next</button>
                    </div>
                    {focused_semester}
                </div>
                <div className="col-3">
                    <h2 className="text-center text-success mt-5"><b>Add course</b></h2>
                    <Form id="searchBar" onSubmit={(event) => {
                        addCourse(inpu);
                        event.preventDefault();
                    }}>
                        <Form.Group className="text-center mb-3">
                            <Form.Label>Enter the desired course code:</Form.Label>
                            <Autocomplete onChange={(event, value) => {
                                setInpu(value as string); event.preventDefault();
                            }} disablePortal id="combo-box-demo" options={getAllCourses()} renderInput={(params) => 
                                <TextField {...params} type="text" variant="outlined" label="Enter Course Code" 
                                    placeholder="CISC"/>} />
                        </Form.Group>
                        <Button onClick={() => {
                            addCourse(inpu);
                        }}>
                            Add Course
                        </Button>
                        
                        <Button onClick={() => {
                            holdCourse(inpu);
                        }}>
                            Hold Course
                        </Button>
                        
                    </Form>
 
                </div>

                <div className="col-2">
                    <h3 className="text-center text-warning mt-5"><b>Requirements</b></h3>
                </div>
            </div>

        </div>

    );
}

export default SingleSemester;