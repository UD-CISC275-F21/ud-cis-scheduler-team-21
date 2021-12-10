import { Course } from "./Course";

//Created a type to define the traits of a Semester
export interface Semester{
    course_set: Course[];
    semester_number: number;
    credits: number;
}