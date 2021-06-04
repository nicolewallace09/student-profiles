import React from 'react';
import StudentList from './components/StudentList';  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="page">
      <div className="app">
        <StudentList/>
      </div>
    </div>
    </>
  );
}

export default App;
