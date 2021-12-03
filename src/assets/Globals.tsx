import { Semester } from "../interfaces/Semester";
import { Course } from "../interfaces/Course";

export const example_courses: Course[] = [{ crsName: "EGGG 101", crsDescription: "Introduction to Engineering", crsCredits: 2 }, { crsName: "CISC 108", crsDescription: "Introduction to Somputer Science I", crsCredits: 3 }, { crsName: "MATH 241", crsDescription: "Analytic Geometry and Calculus A", crsCredits: 4 }, { crsName: "ENGL 110", crsDescription: "Seminar in Composition", crsCredits: 3 }, { crsName: "Breadth Req. I", crsDescription: "Breadth Requirement Elective (1/5)", crsCredits: 3 },
    { crsName: "CISC 181", crsDescription: " Introduction to Computer Science II", crsCredits: 3 }, { crsName: "MATH 242", crsDescription: "Analytic Geometry & Calculus B", crsCredits: 4 }, { crsName: "CISC 210", crsDescription: "Introduction to Systems Programming", crsCredits: 3 }, { crsName: "Laboratory Science I", crsDescription: "Laboratory Science (1/3)", crsCredits: 4 }, { crsName: "Breadth Req. II", crsDescription: "Breadth Requirement Elective (2/5)", crsCredits: 3 },
    { crsName: "CISC 220", crsDescription: "Data Structures", crsCredits: 3 }, { crsName: "CISC 260", crsDescription: "Machine Org. & Assembly Language", crsCredits: 3 }, { crsName: "MATH 210", crsDescription: "Discrete Mathematics I", crsCredits: 3 }, { crsName: "Laboratory Science II", crsDescription: "Laboratory Science (2/3)", crsCredits: 4 }, { crsName: "Breadth Req. III", crsDescription: "Breadth Requirement Elective (3/5)", crsCredits: 3 },
    { crsName: "CISC 355", crsDescription: "Computers, Ethics & Society", crsCredits: 3 }, { crsName: "CISC 275", crsDescription: "Introduction to Software Engineering", crsCredits: 3 }, { crsName: "MATH 205", crsDescription: "Statistical Methods", crsCredits: 3 }, { crsName: "Laboratory Science III", crsDescription: "Laboratory Science (3/3)", crsCredits: 4 }, { crsName: "Breadth Req. IV", crsDescription: "Breadth Requirement Elective (4/5)", crsCredits: 3 },
    { crsName: "CISC 320", crsDescription: "Introduction to Algorithms", crsCredits: 3 }, { crsName: "CISC 361", crsDescription: "Operating Systems", crsCredits: 3 }, { crsName: "CISC 304", crsDescription: "Logic and Programming", crsCredits: 3 }, { crsName: "Concentration Elective I", crsDescription: "Concentration Elective (1/4)", crsCredits: 3 }, { crsName: "General Elective I", crsDescription: "General Elective (1/6)", crsCredits: 3 },
    { crsName: "CISC 372", crsDescription: "Parallel Computing", crsCredits: 3 }, { crsName: "CISC 303", crsDescription: "Automata Theory", crsCredits: 3 }, { crsName: "ENGL 312", crsDescription: "Written Communication in Business", crsCredits: 3 }, { crsName: "Concentration Elective II", crsDescription: "Concentration Elective (2/4)", crsCredits: 3 }, { crsName: "General Elective II", crsDescription: "General Elective (2/6)", crsCredits: 3 },
    { crsName: "CISC 498", crsDescription: "Computer Science Design Project I", crsCredits: 3 }, { crsName: "CISC 3XX", crsDescription: "Computer Science Elective I", crsCredits: 3 }, { crsName: "Concentration Elective III", crsDescription: "Concentration Elective (3/4)", crsCredits: 3 }, { crsName: "General Elective III", crsDescription: "General Elective (3/6)", crsCredits: 3 }, { crsName: "General Elective IV", crsDescription: "General Elective (4/6)", crsCredits: 3 },
    { crsName: "CISC 499", crsDescription: "Computer Science Design Project II", crsCredits: 3 }, { crsName: "CISC 3XX", crsDescription: "Computer Science Elective II", crsCredits: 3 }, { crsName: "Concentration Elective IV", crsDescription: "Concentration Elective (4/4)", crsCredits: 3 }, { crsName: "General Elective V", crsDescription: "General Elective (5/6)", crsCredits: 3 }, { crsName: "General Elective VI", crsDescription: "General Elective (6/6)", crsCredits: 3 }];

const example_semester1: Semester = { course_set: [example_courses[0], example_courses[1], example_courses[2], example_courses[3], example_courses[4]], semester_number: 1 };
const example_semester2: Semester = { course_set: [example_courses[5], example_courses[6], example_courses[7], example_courses[8], example_courses[9]], semester_number: 2 };
const example_semester3: Semester = { course_set: [example_courses[10], example_courses[11], example_courses[12], example_courses[13], example_courses[14]], semester_number: 3 };
const example_semester4: Semester = { course_set: [example_courses[15], example_courses[16], example_courses[17], example_courses[18], example_courses[19]], semester_number: 4 };
const example_semester5: Semester = { course_set: [example_courses[20], example_courses[21], example_courses[22], example_courses[23], example_courses[24]], semester_number: 5 };
const example_semester6: Semester = { course_set: [example_courses[25], example_courses[26], example_courses[27], example_courses[28], example_courses[29]], semester_number: 6 };
const example_semester7: Semester = { course_set: [example_courses[30], example_courses[31], example_courses[32], example_courses[33], example_courses[34]], semester_number: 7 };
const example_semester8: Semester = { course_set: [example_courses[35], example_courses[36], example_courses[37], example_courses[38], example_courses[39]], semester_number: 8 };

export const semester_list: Semester[] = [example_semester1, example_semester2, example_semester3, example_semester4, example_semester5, example_semester6, example_semester7, example_semester8];