/* eslint-disable react/no-unescaped-entities */
import React from "react";

export function WelcomeAndHelp_Pane() :JSX.Element {
   
    //---------------------------Return Statement---------------------------
    return (
        <div>
            <h2>Welcome to UD CISC  Scheduler</h2>
            <p>Every student at the University of Delaware is assigned an <a href="https://www1.udel.edu/registrar/faculty_staff/subjects.html" 
                target="_blank" rel="noreferrer">Academic Advisor</a> who 
                is meant to help guide the student to graduation.</p>
            <p>The advisor's role is to help students become self-sufficient, and they aren't intended to make
                 decisions on behalf students. Ideally, by the end of their degree, 
                 students have chosen their own path to graduation, with minimal input from their adviser. 
                 To facilitate their choices, students are often strongly recommended to construct a Degree Plan.</p>
            <p>However, an open-ended field like <a href="https://catalog.udel.edu/preview_program.php?catoid=47&poid=34727&returnto=8860" 
                target="_blank" rel="noreferrer">Computer Science</a> poses a unique challenge, since there are many 
                possible paths to graduation with different <a href="https://catalog.udel.edu/preview_entity.php?catoid=47&ent_oid=5200" 
                target="_blank" rel="noreferrer">tradeoffs and opportunities</a>. Indeed, many students come
                 in with almost no knowledge of the possible career directions and what courses support 
                 those paths. Further, the incredibly high student-to-faculty ratio, along with already stretched
                  faculty resources, exacerbates the situation. There is never enough time for busy faculty to meet
                   with their advisees.</p>
            <p>Although there are many logistical and administrative barriers to success, at
                 least one procedural problem might be solvable with technology: many students struggle to 
                 put together a clear 4-year plan without a lot of prompting and help from their adviser.</p>
            <p>Our goal, with this website, is to help Computer Science majors at the University of Delaware to put 
                together a Degree Plan and streamline their advising experience.</p>
        </div>
    );
}