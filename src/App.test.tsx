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

    describe("Add Semester, Remove Semester, Rest and Clear button works properly", () => {

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
            fireEvent.click(screen.getByTestId("myPlan"));
            const semesterList = screen.getByTestId("semester-list");
            expect(semesterList.children.length).toBe(7);
            fireEvent.click(screen.getByRole("button", { name: "Add Semester" }));
            expect(semesterList.children.length).toBe(8);
        });

        // test if Clear Plan button works properly and removes all the semesters from the semester list
        it("Claer Semester button removes all the Semesters from the semester list", () => {
            const clearbutton = screen.getByTestId("Clear-Plan");
            const semesterList = screen.getByTestId("semester-list");
            clearbutton.click();
            expect(semesterList.children.length).toBe(1);
        });

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


    describe("Course information is working", () => {
        //shows course information 
        it("Course Info Button shows the course info", () => {
            fireEvent.click(screen.getByTestId("editPlan"));
            expect(screen.queryByText("ART 290 - Introduction to Ceramics")).not.toBeInTheDocument();
            expect(screen.queryByText("Introduction to the tools, processes and aesthetics of ceramics.")).not.toBeInTheDocument();
            fireEvent.click(screen.getByRole("textbox", { name: "Enter Course ID" }));
            fireEvent.change(screen.getByRole("textbox", { name: "Enter Course ID" }), { target: { value: "ART 290" } });
            fireEvent.click(screen.getByRole("option", { name: "ART 290" }));
            fireEvent.click(screen.getByRole("button", { name: "Show Course Info" }));
            expect(screen.queryByText("ART 290 - Introduction to Ceramics")).toBeInTheDocument();
            expect(screen.queryByText("Introduction to the tools, processes and aesthetics of ceramics.")).toBeInTheDocument();

        });

        // test if Edit Course button is enabled and is working as expected
        it("Edit Course button is enabled and is working as expected", () => {
            // -> go to Edit Plan
            fireEvent.click(screen.getByTestId("editPlan"));
            // -> clicks on textbox to enter course code
            fireEvent.click(screen.getByRole("textbox", { name: "Enter Course ID" }));
            // -> set the value to "ART 290"
            fireEvent.change(screen.getByRole("textbox", { name: "Enter Course ID" }), 
                { target: { value: "ART 290" } });
            // -> click on textbox "ART 290" option
            fireEvent.click(screen.getByRole("option", { name: "ART 290" }));
            // -> show course information
            fireEvent.click(screen.getByRole("button", { name: "Show Course Info" }));
            // -> expect the Name true value
            expect(screen.queryByText("ART 290 - Introduction to Ceramics")).toBeInTheDocument();
            // -> expects the description true value
            expect(screen.queryByText("Introduction to the tools, processes and aesthetics of ceramics.")).toBeInTheDocument();
            // -> clicks on edit course
            fireEvent.click(screen.getByRole("button", { name: "Edit Course" }));
            // -> Chnage the name of the course
            const inputName = screen.getByLabelText("inputName");
            fireEvent.change(inputName, { target: { value: "Name Test Passed" } });
            // -> change the description of the course
            const inputDescription = screen.getByLabelText("inputDescription");
            fireEvent.change(inputDescription, { target: { value: "Description Test Passed" } });
            // -> clicks on the save button and updates the information 
            fireEvent.click(screen.getByRole("button", { name: "Save" }));
            // -> clicks on show course info and shows the updated information
            fireEvent.click(screen.getByRole("button", { name: "Show Course Info" }));
            // -> expects the updated name to show under Course Info
            expect(screen.getByTestId("courseInfo")).toContainHTML("Name Test Passed");
            // -> expects the updated description to show under Course Info
            expect(screen.getByTestId("courseInfo")).toContainHTML("Description Test Passed");



        });

    });




    describe("Previous and Next Semester Button works properly", () => {
        //test if Next Semester button works properly and update the single semester.
        it("Next Semester Button works properly and update the single semester", async () => {
            fireEvent.click(screen.getByTestId("editPlan"));
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 1");
            fireEvent.click(screen.getByRole("button", { name: "Next Semester" }));
            expect(screen.getByTestId("semesterNumber")).not.toContainHTML("Semester 1");
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 2");
                
        });
        
        //test if Previous Semester button works properly and update the single semester.
        //click next semester -> semester 1 becomes semester 2, click previous button to go back to previous semester
        it("Previous Semester Button works properly and update the single semester", async () => {
            fireEvent.click(screen.getByTestId("editPlan"));
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 1");
            fireEvent.click(screen.getByRole("button", { name: "Next Semester" }));
            expect(screen.getByTestId("semesterNumber")).not.toContainHTML("Semester 1");
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 2");
            fireEvent.click(screen.getByRole("button", { name: "Previous Semester" }));
            expect(screen.getByTestId("semesterNumber")).toContainHTML("Semester 1");
        });



    });



});