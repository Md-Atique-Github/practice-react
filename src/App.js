
import './App.css';
import ListEmployees from './Components/ListEmployees';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './Components/CreateEmployee';
import UpdateEmployee from './Components/UpdateEmployee'
import ViewEmployeeDetails from './Components/ViewEmployeeDetails';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
          <Header />
          <div className="container">

            <Routes>
              <Route path='/' element={<ListEmployees />} />
              <Route path='/employeee' element={<ListEmployees />} />
              <Route path='/add-employee' element={<CreateEmployee />} />
              <Route path='/edit-employee/:id' element={<UpdateEmployee />} />
              <Route path='/view-employee/:id' element={<ViewEmployeeDetails />} />
            </Routes>

          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
