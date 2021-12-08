import React from "react";
import { fireEvent, render, screen, waitFor} from "@testing-library/react";
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



    // test if Clear Plan button works properly and removes all the semesters from the semester list
    it("Claer Semester button removes all the Semesters from the semester list", () => {
        const clearbutton = screen.getByTestId("Clear-Plan");
        const courseList = screen.getByTestId("semester-list");
        clearbutton.click();
        expect(courseList.children.length).toBe(1);
    });

    //shows courseinfo button
    it("Course Info Button shows the course info", () => {
        const courseInfoButton = screen.getByTestId("courseInfoButton");
        const courseInfo = screen.getByTestId("courseInfo");
        expect(courseInfo.style.display).toBe("");
        courseInfoButton.click();
        expect(courseInfo.style.display).not.toBe(null);
    });

    //test if Next Semester button works properly and update the single semester.
    it("Next Semester Button works properly and update the single semester", async () => {
        fireEvent.click(screen.getByTestId("editPlan"));
        const NextSemesterButton = screen.getByTestId("Next-Semester");
        const semesterNumber = screen.getByTestId("semesterNumber");
        waitFor(() => expect(semesterNumber).toBe("Semester 1"));
        NextSemesterButton.click();
        waitFor(() =>  expect(screen.queryAllByText("Semester 1")).not.toBeInTheDocument());
        waitFor(() => expect(semesterNumber).toBe("Semester 2"));
    });


    //test if Previous Semester button works properly and update the single semester.
    it("Previous Semester Button works properly and update the single semester", () => {
        fireEvent.click(screen.getByTestId("editPlan"));
        const previousSemesterButton = screen.getByTestId("Previous-Semester");
        waitFor(() => expect(screen.getByText("Semester 2")).toBeInTheDocument());    
        previousSemesterButton.click();
        waitFor(() => expect(screen.getByText("Semester 1")).toBeInTheDocument());    
    });


});    