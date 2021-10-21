import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Semester, SemesterIntf } from "./OneSemester";
import { CourseIntf } from "./Course";

function MultiSemester(): JSX.Element {

    const example_courses: CourseIntf[] = [{ crsName: "EGGG101", crsDescription: "Introduction to Engineering", crsCredits: 2 }, { crsName: "CISC108", crsDescription: "Introduction to Somputer Science I", crsCredits: 3 }, { crsName: "MATH241", crsDescription: "Analytic Geometry and Calculus A", crsCredits: 4 }, { crsName: "ENGL110", crsDescription: "Seminar in Composition", crsCredits: 3 }, { crsName: "Breadth Req. I", crsDescription: "Breadth Requirement Elective (1/5)", crsCredits: 3 },
        { crsName: "CISC 181", crsDescription: " Introduction to Computer Science II", crsCredits: 3 }, { crsName: "MATH 242", crsDescription: "Analytic Geometry & Calculus B", crsCredits: 4 }, { crsName: "CISC 210", crsDescription: "Introduction to Systems Programming", crsCredits: 3 }, { crsName: "Laboratory Science I", crsDescription: "Laboratory Science (1/3)", crsCredits: 4 }, { crsName: "Breadth Req. II", crsDescription: "Breadth Requirement Elective (2/5)", crsCredits: 3 },
        { crsName: "CISC 220", crsDescription: "Data Structures", crsCredits: 3 }, { crsName: "CISC 260", crsDescription: "Machine Org. & Assembly Language", crsCredits: 3 }, { crsName: "MATH 210", crsDescription: "Discrete Mathematics I", crsCredits: 3 }, { crsName: "Laboratory Science II", crsDescription: "Laboratory Science (2/3)", crsCredits: 4 }, { crsName: "Breadth Req. III", crsDescription: "Breadth Requirement Elective (3/5)", crsCredits: 3 },
        { crsName: "CISC 355", crsDescription: "Computers, Ethics & Society", crsCredits: 3 }, { crsName: "CISC 275", crsDescription: "Introduction to Software Engineering", crsCredits: 3 }, { crsName: "MATH 205", crsDescription: "Statistical Methods", crsCredits: 3 }, { crsName: "Laboratory Science III", crsDescription: "Laboratory Science (3/3)", crsCredits: 4 }, { crsName: "Breadth Req. IV", crsDescription: "Breadth Requirement Elective (4/5)", crsCredits: 3 },
        { crsName: "CISC 320", crsDescription: "Introduction to Algorithms", crsCredits: 3 }, { crsName: "CISC 361", crsDescription: "Operating Systems", crsCredits: 3 }, { crsName: "CISC 304", crsDescription: "Logic and Programming", crsCredits: 3 }, { crsName: "Concentration Elective I", crsDescription: "Concentration Elective (1/4)", crsCredits: 3 }, { crsName: "General Elective I", crsDescription: "General Elective (1/6)", crsCredits: 3 },
        { crsName: "CISC 372", crsDescription: "Parallel Computing", crsCredits: 3 }, { crsName: "CISC 303", crsDescription: "Automata Theory", crsCredits: 3 }, { crsName: "ENGL 312", crsDescription: "Written Communication in Business", crsCredits: 3 }, { crsName: "Concentration Elective II", crsDescription: "Concentration Elective (2/4)", crsCredits: 3 }, { crsName: "General Elective II", crsDescription: "General Elective (2/6)", crsCredits: 3 },
        { crsName: "CISC498", crsDescription: "Computer Science Design Project I", crsCredits: 3 }, { crsName: "CISC 3XX", crsDescription: "Computer Science Elective I", crsCredits: 3 }, { crsName: "Concentration Elective III", crsDescription: "Concentration Elective (3/4)", crsCredits: 3 }, { crsName: "General Elective III", crsDescription: "General Elective (3/6)", crsCredits: 3 }, { crsName: "General Elective IV", crsDescription: "General Elective (4/6)", crsCredits: 3 },
        { crsName: "CISC499", crsDescription: "Computer Science Design Project II", crsCredits: 2 }, { crsName: "CISC 3XX", crsDescription: "Computer Science Elective II", crsCredits: 3 }, { crsName: "Concentration Elective IV", crsDescription: "Concentration Elective (4/4)", crsCredits: 3 }, { crsName: "General Elective V", crsDescription: "General Elective (5/6)", crsCredits: 3 }, { crsName: "General Elective VI", crsDescription: "General Elective (6/6)", crsCredits: 3 }];

    const example_semester1: SemesterIntf = { course_1: example_courses[0], course_2: example_courses[1], course_3: example_courses[2], course_4: example_courses[3], course_5: example_courses[4] };
    const example_semester2: SemesterIntf = { course_1: example_courses[5], course_2: example_courses[6], course_3: example_courses[7], course_4: example_courses[8], course_5: example_courses[9] };
    const example_semester3: SemesterIntf = { course_1: example_courses[10], course_2: example_courses[11], course_3: example_courses[12], course_4: example_courses[13], course_5: example_courses[14] };
    const example_semester4: SemesterIntf = { course_1: example_courses[15], course_2: example_courses[16], course_3: example_courses[17], course_4: example_courses[18], course_5: example_courses[19] };
    const example_semester5: SemesterIntf = { course_1: example_courses[20], course_2: example_courses[21], course_3: example_courses[22], course_4: example_courses[23], course_5: example_courses[24] };
    const example_semester6: SemesterIntf = { course_1: example_courses[25], course_2: example_courses[26], course_3: example_courses[27], course_4: example_courses[28], course_5: example_courses[29] };
    const example_semester7: SemesterIntf = { course_1: example_courses[30], course_2: example_courses[31], course_3: example_courses[32], course_4: example_courses[33], course_5: example_courses[34] };
    const example_semester8: SemesterIntf = { course_1: example_courses[35], course_2: example_courses[36], course_3: example_courses[37], course_4: example_courses[38], course_5: example_courses[39] };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler Updated by:
                <p>
                    Ryan Miller, Connor Creavin, and Usama Mahmood.
                </p>
            </header>

            <div className="container-fluid padding">

                <div className="row padding">

                    <Semester course_1={example_semester1.course_1}
                        course_2={example_semester1.course_2}
                        course_3={example_semester1.course_3}
                        course_4={example_semester1.course_4}
                        course_5={example_semester1.course_5}
                    />

                    <Semester course_1={example_semester2.course_1}
                        course_2={example_semester2.course_2}
                        course_3={example_semester2.course_3}
                        course_4={example_semester2.course_4}
                        course_5={example_semester2.course_5}
                    />
                </div>

                <div className="row padding">

                    <Semester course_1={example_semester3.course_1}
                        course_2={example_semester3.course_2}
                        course_3={example_semester3.course_3}
                        course_4={example_semester3.course_4}
                        course_5={example_semester3.course_5}
                    />

                    <Semester course_1={example_semester4.course_1}
                        course_2={example_semester4.course_2}
                        course_3={example_semester4.course_3}
                        course_4={example_semester4.course_4}
                        course_5={example_semester4.course_5}
                    />
                </div>

                <div className="row padding">

                    <Semester course_1={example_semester5.course_1}
                        course_2={example_semester5.course_2}
                        course_3={example_semester5.course_3}
                        course_4={example_semester5.course_4}
                        course_5={example_semester5.course_5}
                    />

                    <Semester course_1={example_semester6.course_1}
                        course_2={example_semester6.course_2}
                        course_3={example_semester6.course_3}
                        course_4={example_semester6.course_4}
                        course_5={example_semester6.course_5}
                    />
                </div>

                <div className="row padding">

                    <Semester course_1={example_semester7.course_1}
                        course_2={example_semester7.course_2}
                        course_3={example_semester7.course_3}
                        course_4={example_semester7.course_4}
                        course_5={example_semester7.course_5}
                    />

                    <Semester course_1={example_semester8.course_1}
                        course_2={example_semester8.course_2}
                        course_3={example_semester8.course_3}
                        course_4={example_semester8.course_4}
                        course_5={example_semester8.course_5}
                    />
                </div>

            </div>
        </div >
    );
}

export default MultiSemester;