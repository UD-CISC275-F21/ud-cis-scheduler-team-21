import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import App from "./App";


describe("App", () => {
    beforeEach(() => {
        render(<App />);
    });

    it("renders UD CIS Scheduler text", () => {
        const linkElement = screen.getByText(/UD CIS Scheduler/i);
        expect(linkElement).toBeInTheDocument();
    });

    // test if Remove Semester button removes the semester from the semester list.
    it("Remove Semester Button removes the semester from the semester list", () => {
        const removeButton = screen.getByTestId("Remove-Semester");
        const semesterList = screen.getByTestId("semester-list");
        expect(semesterList.children.length).toBe(8);
        removeButton.click();
        expect(semesterList.children.length).toBe(7);
    });

    // test if Add Semester button adds the semester to the semester list.
    it("Add Semester Button adds the semester to the semester list", () => {
        const addButton = screen.getByTestId("Add-Semester");
        const semesterList = screen.getByTestId("semester-list");
        expect(semesterList.children.length).toBe(7);
        addButton.click();
        expect(semesterList.children.length).toBe(8);
    });
    
    describe("Add and Remove Course works", () =>{
        // test if Add Course button adds the course to the course list and autocompletes works as expected.
        it("Add Course Button adds the course to the course list and autocompletes works as expected", () => {
            const addButton = screen.getByTestId("Add-Course");
            const courseList = screen.getByTestId("course-list");
            //const autocomplete: HTMLInputElement  = screen.getByTestId("autoComplete") as HTMLInputElement;
            expect(courseList.children.length).toBe(5);
            fireEvent.click(screen.getByRole("textbox", { name: "Enter Course ID" }));
            fireEvent.change(screen.getByRole("textbox", { name: "Enter Course ID" }), { target: { value: "CISC 101" } });
            fireEvent.click(screen.getByRole("option", { name: "CISC 101" }));
            addButton.click();
            expect(courseList.children.length).toBe(6);
        });
        
        // test if Remove Course button removes the course from the semester list.
        it("Remove Course button removes the course from the semester list", () => {
            const removeButton: HTMLElement = screen.getAllByTestId("Remove-Course")[0] as HTMLElement;
            const courseList = screen.getByTestId("course-list");
            expect(courseList.children.length).toBe(6);
            removeButton.click();
            expect(courseList.children.length).toBe(5);
        });

        // test if Remove Course button removes the course from the semester list.
        it("Remove All Courses button removes all the courses from the course list", () => {
            const removeAllCrsButton = screen.getByTestId("Remove-All-Courses");
            const courseList = screen.getByTestId("course-list");
            expect(courseList.children.length).toBe(courseList.children.length);
            removeAllCrsButton.click();
            expect(courseList.children.length).toBe(0);
        });


    });



    // test if Clear Plan button works properly and removes all the semesters from the semester list
    it("Claer Semester button removes all the Semesters from the semester list", () => {
        const clearbutton = screen.getByTestId("Clear-Plan");
        const semesterList = screen.getByTestId("semester-list");
        clearbutton.click();
        expect(semesterList.children.length).toBe(1);
    });

    //shows courseinfo button
    it("Course Info Button shows the course info", () => {
        fireEvent.click(screen.getByTestId("editPlan"));
        expect(screen.queryByText("CISC 220 - Data Structures")).not.toBeInTheDocument();
        expect(screen.queryByText("Review of data type abstraction, recursion, arrays, stacks, queues, multiple stacks and linked lists. Emphasis on dynamic storage management, garbage collection, trees, graphs, tables, sorting and searching.")).not.toBeInTheDocument();
        fireEvent.click(screen.getByRole("textbox", { name: "Enter Course ID" }));
        fireEvent.change(screen.getByRole("textbox", { name: "Enter Course ID" }), { target: { value: "CISC 220" } });
        fireEvent.click(screen.getByRole("option", { name: "CISC 220" }));
        fireEvent.click(screen.getByRole("button", { name: "Show Course Info" }));
        expect(screen.queryByText("CISC 220 - Data Structures")).toBeInTheDocument();
        expect(screen.queryByText("Review of data type abstraction, recursion, arrays, stacks, queues, multiple stacks and linked lists. Emphasis on dynamic storage management, garbage collection, trees, graphs, tables, sorting and searching.")).toBeInTheDocument();
        

    });


    describe("Previous and Next Semester Button works properly", () => {
        //test if Previous Semester button works properly and update the single semester.
        it("Previous Semester Button works properly and update the single semester", async () => {
            fireEvent.click(screen.getByTestId("editPlan"));
            const NextSemesterButton = screen.getByTestId("Next-Semester");
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 1");
            NextSemesterButton.click();
            expect(screen.getByTestId("semesterNumber")).not.toContainHTML("Semester 1");
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 2");
            const PrevSemesterButton = screen.getByTestId("Previous-Semester");
            PrevSemesterButton.click();
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 1");
        });

        //test if Next Semester button works properly and update the single semester.
        it("Next Semester Button works properly and update the single semester", async () => {
            fireEvent.click(screen.getByTestId("editPlan"));
            const NextSemesterButton = screen.getByTestId("Next-Semester");
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 1");
            NextSemesterButton.click();
            expect(screen.getByTestId("semesterNumber")).not.toContainHTML("Semester 1");
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 2");
                
        });


    });



});    