
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListEmployees = () => {
  const [employees, setEmployees] = useState([]);

  const deleteEmployee = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:8080/employee/delete/${employeeId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Employee deleted successfully');
        
        setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== employeeId));
      } else {
        console.error('Error occurred while deleting the employee');
      }
    } catch (error) {
      console.error('Error occurred while deleting the employee', error);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:8080/employee/getAll');
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('ERROR IN FETCHING DATA', error);
      };
    }

    fetchEmployees();
  }, [])


  return (
    <div>
      <div className='row'>

      </div>
      <h2 className='text-center'>Employees List</h2>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td><Link to={`/edit-employee/${employee.id}`} className='btn btn-info'>
                  <span className='btn-text'>Edit</span>
                </Link>
                </td>
                <td>
                <button onClick={() => deleteEmployee(employee.id)} type='reset' className='btn btn-warning'>
  <span className='btn-text2'>Delete</span>
</button>
</td>
<td>
        <Link to={`/view-employee/${employee.id}`} className='btn btn-info'>
          <span className='btn-text2'>View Details</span>
        </Link>
      </td>
   
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListEmployees;