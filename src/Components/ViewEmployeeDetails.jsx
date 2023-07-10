import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewEmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

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
      <div className='card col-md-6 offset-md-3'>
        <h3 className='text-center'>View Employee Details</h3>
        <div className='card-body'>
          <div className='row'>
            <label>Employee First Name:</label>
            <div><strong>{employee.firstName}</strong></div>
          </div>
          <div className='row'>
            <label>Employee Last Name:</label>
            <div><strong>{employee.lastName}</strong></div>
          </div>
          <div className='row'>
            <label>Employee Email:</label>
            <div><strong>{employee.emailId}</strong></div>
          </div>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeDetails;
