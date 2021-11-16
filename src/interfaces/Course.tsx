//Created a type to define the traits of a Course
export interface Course{
    crsName: string;
    crsDescription: string;
    crsCredits: number;
    semester_number?: number;
}