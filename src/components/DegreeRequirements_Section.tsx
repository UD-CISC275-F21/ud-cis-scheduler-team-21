import React  from "react";
import { Offcanvas } from "react-bootstrap";
import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";
import { multiCultural, firstYearSem, discoveryLearningExperience, breadthGroupA, breadthGroupB, breadthGroupC, breadthGroupD, TechElecs } from "../assets/DegreeReqs_CourseList";


interface Degree_Requirements_Inputs {
    show: boolean;
    setShow: (b: boolean) => void;
    setWidth: (n: number) => void;
    userSemesters: Semester[];
}

export function DegreeRequirements_Section({ show, setShow, setWidth, userSemesters }: Degree_Requirements_Inputs): JSX.Element {

    //---------------------------Variables---------------------------
    let engl110 = false;
    let FYS = false;
    let DLE = false;
    let multicultural = false;
    let groupA = false;
    let groupB = false;
    let groupC = false;
    let groupD = false;

    let extra9BreadthCreds = false;

    let cisc108 = false;
    let cisc181 = false;
    let cisc210 = false;
    let cisc220 = false;
    let cisc260 = false;
    let cisc275 = false;
    let cisc303 = false;
    let cisc320 = false;
    let cisc361 = false;
    let cisc372 = false;
    let math210 = false;
    let math241 = false;
    let math242 = false;
    let sixExtraTechCredits = false;
    let twelveConcentrationCredits = false;
    let statsOrProb = false;
    let capstone = false;
    let sciences = false;
    let additionalMath300 = false;
    let additionalWriting = false;
    let cisc355 = false;
    let moreThan124Credits = false;

    let sameBreadth = false;
    let breadthCount = 0;

    let techElecCount = 0;

    let firstCiscCapstone = 0;
    let firstUnivCapstone = 0;

    const sciencePHYS = [false, false, false, false];
    const scienceCHEM = [false, false, false, false];
    const scienceBISC = [false, false];
    const scienceGEOL_1 = [false, false, false];
    const scienceGEOL_2 = [false, false];

    let totalCreditsInPlan = 0;


    //---------------------------Functions---------------------------

    //Hides degree requirement panel
    function hideDegReqs(): void {
        setShow(false);
        setWidth(12);
    }

    function display_requirement_state(state: boolean): string {
        if (state == true) {
            return "✓";
        } else {
            return "✗";
        }
    }


    //useEffect(() => {
    userSemesters.forEach((semester: Semester) => {
        semester.course_set.forEach((course: Course) => {
            sameBreadth = false;
            totalCreditsInPlan += course.crsCredits;
            if (course.crsName == "ENGL 110") {
                engl110 = true;
            } if (firstYearSem.includes(course.crsName)) {
                FYS = true;
            } if (discoveryLearningExperience.includes(course.crsName)) {
                DLE = true;
            } if (breadthGroupA.includes(course.crsName)) {
                groupA = true;
                sameBreadth = true;
                breadthCount += 1;
            } if (breadthGroupB.includes(course.crsName)) {
                groupB = true;
                if (!sameBreadth) {
                    breadthCount += 1;
                }
                sameBreadth = true;
            } if (breadthGroupC.includes(course.crsName)) {
                groupC = true;
                if (!sameBreadth) {
                    breadthCount += 1;
                }
                sameBreadth = true;
            } if (breadthGroupD.includes(course.crsName)) {
                groupD = true;
            } if (multiCultural.includes(course.crsName)) {
                multicultural = true;
            } if (TechElecs.includes(course.crsName)) {
                techElecCount += 1;
            } if (course.crsName == "CISC 108") {
                cisc108 = true;
            } if (course.crsName == "CISC 181") {
                cisc181 = true;
            } if (course.crsName == "CISC 210") {
                cisc210 = true;
            } if (course.crsName == "CISC 220") {
                cisc220 = true;
            } if (course.crsName == "CISC 260") {
                cisc260 = true;
            } if (course.crsName == "CISC 275") {
                cisc275 = true;
            } if (course.crsName == "CISC 303") {
                cisc303 = true;
            } if (course.crsName == "CISC 320") {
                cisc320 = true;
            } if (course.crsName == "CISC 361") {
                cisc361 = true;
            } if (course.crsName == "CISC 372") {
                cisc372 = true;
            } if (course.crsName == "CISC 355") {
                cisc355 = true;
            } if (course.crsName == "MATH 210") {
                math210 = true;
            } if (course.crsName == "MATH 241") {
                math241 = true;
            } if (course.crsName == "MATH 242") {
                math242 = true;
            } if (course.crsName == "CISC 498") {
                if (firstCiscCapstone == 2) {
                    capstone = true;
                }
                firstCiscCapstone = 1;
            } if (course.crsName == "CISC 499") {
                if (firstCiscCapstone == 1) {
                    capstone = true;
                }
                firstCiscCapstone = 2;
            } if (course.crsName == "UNIV 401") {
                if (firstUnivCapstone == 2) {
                    capstone = true;
                }
                firstUnivCapstone = 1;
            } if (course.crsName == "UNIV 402") {
                if (firstUnivCapstone == 1) {
                    capstone = true;
                }
                firstUnivCapstone = 2;
            } if (course.crsName == "PHYS 207") {
                sciencePHYS[0] = true;
            } if (course.crsName == "PHYS 227") {
                sciencePHYS[1] = true;
            } if (course.crsName == "PHYS 208") {
                sciencePHYS[2] = true;
            } if (course.crsName == "PHYS 228") {
                sciencePHYS[3] = true;
            } if (course.crsName == "CHEM 103") {
                scienceCHEM[0] = true;
            } if (course.crsName == "CHEM 133") {
                scienceCHEM[1] = true;
            } if (course.crsName == "CHEM 104") {
                scienceCHEM[2] = true;
            } if (course.crsName == "CHEM 134") {
                scienceCHEM[3] = true;
            } if (course.crsName == "BISC 207") {
                scienceBISC[0] = true;
            } if (course.crsName == "BISC 208") {
                scienceBISC[1] = true;
            } if (course.crsName == "GEOL 105") {
                scienceGEOL_1[0] = true;
            } if (course.crsName == "GEOL 107") {
                scienceGEOL_1[1] = true;
                scienceGEOL_2[0] = true;
            } if (course.crsName == "GEOL 115") {
                scienceGEOL_1[1] = true;
            } if (course.crsName == "GEOL 110") {
                scienceGEOL_2[1] = true;
            } if (course.crsName == "MATH 205" || course.crsName == "MATH 350") {
                statsOrProb = true;
            } if (course.crsName == "ENGL 312" || course.crsName == "ENGL 410") {
                additionalWriting = true;
            } if (course.crsName == "CISC 304" || course.crsName == "MATH 349") {
                additionalMath300 = true;
            }
        });
    });
    if (breadthCount >= 6) {
        extra9BreadthCreds = true;
    }
    if (techElecCount >= 2) {
        sixExtraTechCredits = true;
        if (techElecCount >= 6) {
            twelveConcentrationCredits = true;
        }
    }
    if (!sciencePHYS.includes(false)) {
        sciences = true;
    } else if (!scienceCHEM.includes(false)) {
        sciences = true;
    } else if (!scienceBISC.includes(false)) {
        sciences = true;
    } else if (!scienceGEOL_1.includes(false)) {
        sciences = true;
    } else if (!scienceGEOL_2.includes(false)) {
        sciences = true;
    }
    if (totalCreditsInPlan >= 124) {
        moreThan124Credits = true;
    }
    //}, [show]);


    //---------------------------Return Statement---------------------------
    return (
        <Offcanvas show={show} placement="end" scroll={true} backdrop={true} onHide={() => hideDegReqs()}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><b>Degree Requirements</b></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="text-center">
                    <div className="row">
                        <h5> <u>University Requirements:</u> </h5>
                        <div className="col text-left">
                            <p>ENGL 110: {display_requirement_state(engl110)}</p>
                            <p>Discovery Learning Experience: {display_requirement_state(DLE)}</p>
                            <p>Breadth Group A (Creative Arts and Humanities): {display_requirement_state(groupA)}</p>
                            <p>Breadth Group B (History and Cultural Change): {display_requirement_state(groupB)}</p>
                        </div>
                        <div className="col text-left">
                            <p>First Year Seminar: {display_requirement_state(FYS)}</p>
                            <p>Multicultural Breadth: {display_requirement_state(multicultural)}</p>
                            <p>Breadth Group C (Social and Behavioral Sciences): {display_requirement_state(groupC)}</p>
                            <p>Breadth Group D (Mathematics, Natural Sciences, and Technology): {display_requirement_state(groupD)}</p>
                        </div>
                    </div>
                    <div className="row">
                        <h5> <u>Major Requirements:</u> </h5>
                        <div className="col text-left">
                            <p>CISC 108: {display_requirement_state(cisc108)}</p>
                            <p>CISC 181: {display_requirement_state(cisc181)}</p>
                            <p>CISC 210: {display_requirement_state(cisc210)}</p>
                            <p>CISC 220: {display_requirement_state(cisc220)}</p>
                            <p>CISC 260: {display_requirement_state(cisc260)}</p>
                            <p>CISC 355: {display_requirement_state(cisc355)}</p>
                            <p>MATH 210: {display_requirement_state(math210)}</p>
                            <p>MATH 205 or MATH 350: {display_requirement_state(statsOrProb)}</p>
                            <p>ENGL 312 orENGL 410: {display_requirement_state(additionalWriting)}</p>
                            <p>Capstone Requirements: {display_requirement_state(capstone)}</p>
                            <p>27 Credits of Breadths: {display_requirement_state(extra9BreadthCreds)}</p>
                        </div>
                        <div className="col text-left">
                            <p>CISC 275: {display_requirement_state(cisc275)}</p>
                            <p>CISC 303: {display_requirement_state(cisc303)}</p>
                            <p>CISC 320: {display_requirement_state(cisc320)}</p>
                            <p>CISC 361: {display_requirement_state(cisc361)}</p>
                            <p>CISC 372: {display_requirement_state(cisc372)}</p>
                            <p>MATH 241: {display_requirement_state(math241)}</p>
                            <p>MATH 242: {display_requirement_state(math242)}</p>
                            <p>CISC 304 or MATH 349: {display_requirement_state(additionalMath300)}</p>
                            <p>Lab Science Requirements: {display_requirement_state(sciences)}</p>
                            <p>18 Technical Elective Credits: {display_requirement_state(sixExtraTechCredits)}</p>
                            <p>12 Concentration Elective Credits: {display_requirement_state(twelveConcentrationCredits)}</p>
                        </div>
                    </div>
                    <p>At least 124 Total Credits: {display_requirement_state(moreThan124Credits)}</p>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}