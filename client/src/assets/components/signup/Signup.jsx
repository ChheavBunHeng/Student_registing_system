import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Signup.css";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const DepartmentOptions = [
  { value: "CSE", label: "CSE" },
  { value: "IT", label: "IT" },
];

const CourseOptions = [ 
  { value: "Word", label: "Word", fee: 30, department: "CSE" },
  { value: "Excel", label: "Excel", fee: 30, department: "IT" },
  { value: "PowerPoint", label: "PowerPoint", fee: 30, department: "CSE" },
  { value: "Access", label: "Access", fee: 30, department: "IT" },
  { value: "Outlook", label: "Outlook", fee: 30, department: "CSE" },
];

const BranchOptions = [
  { value: "Branch1", label: "Branch1" },
  { value: "Branch2", label: "Branch2" },
  { value: "Branch3", label: "Branch3" },
];

const RegisterOptions = [
  { value: "Person1", label: "Person1" },
  { value: "Person2", label: "Person2" },
  { value: "Person3", label: "Person3" },
];

function Signup() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedFee, setSelectedFee] = useState(null);
  const [paymentFee, setPaymentFee] = useState("");
  const [discount, setDiscount] = useState("");
  const [paymentOwned, setPaymentOwned] = useState("");

  useEffect(() => {
    if (selectedCourse) {
      setSelectedFee(selectedCourse.fee);
      setSelectedDepartment(selectedCourse.department);
    }
  }, [selectedCourse]);

  const handleCourseChange = (selectedOption) => {
    setSelectedCourse(selectedOption);
  };

  const handlePaymentFeeChange = (event) => {
    const enteredPaymentFee = parseFloat(event.target.value);
    let calculatedDiscount;
  
    // Check if the entered value is a percentage or a fixed value
    if (event.target.name === "discount") {
      calculatedDiscount = (selectedFee * enteredPaymentFee) / 100; // Calculate discount as a percentage of the selected fee
    } else {
      calculatedDiscount = selectedFee - enteredPaymentFee; // Calculate discount based on entered payment fee
    }
  
    const calculatedPaymentOwned = enteredPaymentFee - calculatedDiscount;
  
    setDiscount(calculatedDiscount);
    setPaymentOwned(calculatedPaymentOwned);
    setPaymentFee(enteredPaymentFee);
  };

  return (
    <div className="signup-container grid place-content-center align-middle">
      <h1 className="text-center">Signup</h1>
      
      {/* UserName */}
      <div className="UserInputName flex flex-col">
        <input type="text" placeholder="Enter Khmer Name" />
        <input type="text" placeholder="Enter English Name" />
      </div>
      
      {/* Gender part */}
      <div>
        <Select options={genderOptions} className="GenderInput" placeholder="Gender" classNamesPrefix="react-select"></Select>
      </div>
      
      {/* Date of Birth */}
      <input type="date" placeholder="Date of Birth" className="DateOfBirth" />
      
      {/* Course and department */}
      <div className="CourseAndDepartment flex flex-row space-x-4">
        <Select
          className="react-select-Course"
          options={CourseOptions}
          placeholder="Course"
          onChange={handleCourseChange}
          classNamesPrefix="react-select"
        />
        <Select
          className="react-select-Department"
          options={DepartmentOptions}
          value={selectedDepartment ? { value: selectedDepartment, label: selectedDepartment } : null}
          placeholder="Department"
          isDisabled={!selectedDepartment}
          classNamesPrefix="react-select"
        />
      </div>
      
      {/* Fee and payment */}
      <div className="PaymentAndFee flex flex-row">
    <input type="text" placeholder={`Course Fee: ${selectedFee || ''}`} readOnly />
    <input type="text" placeholder="Payment Fee" name="payment" value={paymentFee} onChange={handlePaymentFeeChange} />
    <input type="text" placeholder="Discount" name="discount" value={discount} onChange={handlePaymentFeeChange} />
    <input type="text" placeholder="Payment Owned" value={paymentOwned} readOnly />
  </div>
      
      {/* Date of registration and start date */}
      <div className="RegisterAndStart flex flex-row">
        <input type="date" placeholder="Register Date" />
        <input type="date" placeholder="Start Date" />
      </div>
      
      {/* Register */}
      <div className="RegisterNameAndBranch flex flex-row">
        <Select className="react-select-Register" placeholder="Register Name" options={RegisterOptions}></Select>
        <Select className="react-select-Branch" placeholder="Branch name" options={BranchOptions}></Select>
      </div>
    </div>
  );
}

export default Signup;
