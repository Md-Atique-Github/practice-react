import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });

  const [employeeList, setEmployeeList] = useState([]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/employee/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
  
      if (response.ok) {
        console.log('Employee data saved successfully');
        // Reset the form
        setEmployee({
          firstName: '',
          lastName: '',
          emailId: '',
        });
       
        const updateResponse = await fetch('http://localhost:8080/employee/getAll');
        const updatedEmployeeList = await updateResponse.json();
        setEmployeeList(updatedEmployeeList);
      } else {
        console.error('Error occurred while saving employee data');
      }
    } catch (error) {
      console.error('Error occurred while saving employee data', error);
    }
  };
  


const handleReset = () => {
  // Reset the form
  setEmployee({
    firstName: '',
    lastName: '',
    emailId: '',
  });
};

return (
  <div>
    <div className='container'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add Employee</h2>
          <div className='card-body'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  placeholder='First name'
                  type='text'
                  className='form-control'
                  id='firstName'
                  name='firstName'
                  value={employee.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  placeholder='Last Name'
                  type='text'
                  className='form-control'
                  id='lastName'
                  name='lastName'
                  value={employee.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='emailId'>Email ID</label>
                <input
                  placeholder='Email Address'
                  type='email'
                  className='form-control'
                  id='emailId'
                  name='emailId'
                  value={employee.emailId}
                  onChange={handleChange}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  marginTop: '1rem',
                }}
              >
                <button type='submit' className='btn btn-primary'>
                  Save
                </button>
                <button type='reset' className='btn btn-warning' onClick={handleReset}>
                  Reset
                </button>
                <Link to="/employeee" type='cancel' className='btn btn-danger' >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
export default CreateEmployee;
