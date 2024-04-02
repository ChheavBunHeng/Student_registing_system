import React from "react";
import Select from "react-select";
import "./Signup.css";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
const DepartmentOptions = [
    {value:"CSE",label:"CSE"},
    {value:"IT",label:"IT"},
];
const CourseOptions = [
  {value:"Word",label:"Word"},
  {value:"Excel",label:"Excel"},
  {value:"PowerPoint",label:"PowerPoint"},
  {value:"Access",label:"Access"},
  {value:"Outlook",label:"Outlook"},
]
const BranchOptions = [
  {value:"Branch1",label:"Branch1"},
  {value:"Branch2",label:"Branch2"},
  {value:"Branch3",label:"Branch3"},
];

function Signup() {
    return (
      <div className="signup-container grid place-content-center align-middle w-screen h-screen">
        <h1 className="text-center">Signup</h1>
        {/* UserName */}
        <div className="flex flex-col">
          <input type="text" placeholder="Enter Khmer Name" />
          <input type="text" placeholder="Enter English Name" />
        </div>
        {/* Gender part */}
        <div>
          <Select options={genderOptions} className="react-select" placeholder="Gender" classNamesPrefix="react-select"></Select>
        </div>
        {/* Date of Birth */}
        <input type="date" />
        {/* Course and department */}
        <div className="flex flex-row">
          <Select className="react-select" options={CourseOptions} placeholder="Course" classNamesPrefix="react-select"></Select>
          <Select className="react-select" options={DepartmentOptions} placeholder="Department" classNamesPrefix="react-select"></Select>
        </div>
        {/* Fee and payment */}
        <div>
          <input type="text" placeholder="Course Fee" />
          <input type="text" placeholder="Payment Fee"/>
          <input type="text" placeholder="Payment Owned" />
        </div>
        {/* Date of registration and start date */}
        <div>
          <input type="date" placeholder="Register Date"/>
          <input type="date" placeholder="Start Date"/>
        </div>
        {/* Register */}
        <div className="flex flex-row justify-center align-middle">
          <input type="text" placeholder="Register Name"/>
          <Select placeholder="Branch name" options={BranchOptions}></Select>
        </div>
      </div>
    );
  }
  
  
  export default Signup;
  