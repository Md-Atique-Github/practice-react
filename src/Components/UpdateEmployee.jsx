import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateEmployee = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/employee/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        console.log('Employee data updated successfully');
        // Reset the form or perform any necessary actions
        setEmployee({
          firstName: '',
          lastName: '',
          emailId: '',
        });
        
      } else {
        console.error('Error occurred while updating employee data');
      }
    } catch (error) {
      console.error('Error occurred while updating employee data', error);
    }
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://localhost:8080/employee/get/${id}`);
        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error('Error occurred while fetching employee data', error);
      }
    };

    fetchEmployee();
  }, [id]);

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Update Employee</h2>
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
                    Update
                  </button>
                  <Link to='/employeee' className='btn btn-danger'>
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

export default UpdateEmployee;



