import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/*

*/

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
        expect(semesterList.children.length).toBe(8);
        addButton.click();
        expect(semesterList.children.length).toBe(9);
    });

    /*
    // test if Add Course button adds the course to the course list.
    it("Add Course button adds the course to the course list", () => {

        const addButton = screen.getByTestId("Add-Course");
        const courseList = screen.getByTestId("course-list");
        expect(courseList.children.length).toBe(5);
        addButton.click();
        expect(courseList.children.length).toBe(6);
    });
*/

    // test if Remove Course button removes the course from the semester list.
    test("Remove Course button removes the course from the semester list", () => {

        const removeButton: HTMLElement = screen.getAllByTestId("Remove-Course")[0] as HTMLElement;

        //const removeButton = screen.getAllByTestId("Remove-Course");
        const courseList = screen.getByTestId("course-list");
        expect(courseList.children.length).toBe(5);
        removeButton.click();
        expect(courseList.children.length).toBe(4);
    });




});    