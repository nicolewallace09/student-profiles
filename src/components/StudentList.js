import React, { useState, useEffect } from 'react'; 
import Student from './Student'; 

function StudentList(props) {
    const [data, setData] = useState([]); 

    const [q, setQ] = useState(''); 
  
    // displaying API data 
    const displayData = async() => {
      const url = `https://api.hatchways.io/assessment/students`;
  
      const response = await fetch(url); 
      const responseJson = await response.json(); 
      
      
      if(responseJson.students) {
        setData(responseJson.students)
      }
    };

    useEffect(() => {
        displayData();
    }, []); 

    function searchStudents (students) {
        return students.filter(student => student.firstName.toLowerCase().indexOf(q) > -1 ||  student.lastName.toLowerCase().indexOf(q) > -1) ;
      }

 return (
    <>
        <div className="search-bar">
            <input className="form-control" 
                type="search" 
                placeholder="Search by name" 
                aria-label="Search"
                value={q}
                onChange={(event) => setQ(event.target.value)}>
            </input>
        </div>

        <div className="app-container">
            <div className='student-list'>
            {data && searchStudents(data).map((student => ( 
                <Student 
                    pic={student.pic}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    email={student.email}
                    company={student.company}
                    skill={student.skill}
                    grades={student.grades}
                    />
            )))}
            </div>
        </div>
    </> 
 )};


export default StudentList; 


