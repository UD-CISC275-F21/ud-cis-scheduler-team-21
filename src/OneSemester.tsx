import React, { FunctionComponent, useState, useEffect } from "react";
import "./App.css";
import { Course_MS, Course_SS, CourseIntf} from "./Course";
import { semester_list } from "./Globals";


export type SemesterIntf = {
    course_set: CourseIntf[],
    semester_number: number
}


export const Semester_MS: FunctionComponent<SemesterIntf> = ({ course_set, semester_number }) => {
    
    const [sum, addSum] = useState(0);
    
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: CourseIntf) => {
            addSum(v => v + course.crsCredits);
        });
    }, [semester_number, course_set]);

    return <div className="col-md-6">
        <h2 className="Semester">Semester {semester_number}</h2>

        <table>
            <thead>
                <tr>
                    <th className="text-center">Course</th>
                    <th className="text-center">Credits</th>
                </tr>
            </thead>

            <tbody>

                {course_set.map((course: CourseIntf, index: number) => {
                    return <Course_MS key={index} crsName={course.crsName} crsDescription={course.crsDescription} crsCredits={course.crsCredits} />;
                })}

            </tbody>
            <tfoot>
                <tr>
                    <td><b>Total Credits</b></td>
                    <td><b>{sum}</b></td>
                </tr>
            </tfoot>
        </table>

        
    </div>

    ;
};

export const Semester_SS: FunctionComponent<SemesterIntf> = ({ course_set, semester_number }) => {


    const [focused_semester, updateFocus] = useState(<Semester_SS course_set={semester_list[0].course_set}
        semester_number={semester_list[0].semester_number}
    />);


    const [sum, addSum] = useState(0);
    useEffect(() => {
        addSum(0);
        course_set.forEach((course: CourseIntf) => {
            addSum(v => v + course.crsCredits);
        });
    }, [semester_number, course_set]);
    {focused_semester;}

    //removes all the courses from semester plan
    const remove_allclass = (sem_num: number): void => {
        semester_list[sem_num-1].course_set.splice(0,semester_list[sem_num-1].course_set.length); 
        updateFocus(<Semester_SS course_set={semester_list[sem_num].course_set}
            semester_number={semester_list[sem_num].semester_number}
        />);   
        addSum(0);
    };

    

    return <div className="col-md-6">
        <h2 className="Semester">Semester {semester_number}</h2>
        <table>
            <thead>
                <tr>
                    <th className="text-center">Courses</th>
                    <th className="text-center">Credits</th>
                    <th className="Actions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {course_set.map((course: CourseIntf, index: number) => {
                    return <Course_SS key={index} crsName={course.crsName} crsDescription={course.crsDescription} crsCredits={course.crsCredits} semester_number={semester_number} />;
                })}
            </tbody >
            <tfoot>
                <tr>
                    <td><b>Total Credits</b></td>
                    <td><b>{sum}</b></td>
                </tr>
                <td className="deletecourse"><button type="button" className="btn-sm btn-danger m-1" onClick={() => remove_allclass(semester_list[semester_number-1].semester_number as number)}>Remove all courses</button></td>
            </tfoot>
        </table >
        <div className="col-md-9">
            <h5 className="addcourse"><b>Add Course</b></h5>
            <form>
                <input 
                    className="inputName" 
                    type="text"
                    name="crsName"
                    placeholder="Name"
                />
                <input 
                    className="inputDes" 
                    type="text"
                    name="crsDescription"
                    placeholder="Description"
                />
                <button type="submit" className="btn btn-success m-3">Add</button>

            </form>
        </div>

    </div >
    ;
};