import React, { useState, useEffect } from 'react'; 
import Student from './Student'; 

function StudentList() {
    // data from API
    const [data, setData] = useState([]); 

    // search by name
    const [q, setQ] = useState(''); 

    // search by tag
    // const [tags, setTags] = useState(''); 
  
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
        return students.filter(student => student.firstName.toLowerCase().indexOf(q) > -1 ||  student.lastName.toLowerCase().indexOf(q) > -1);
    }

    // function searchTags (tags) {
    //     return tags.filter(tag => tag.firstName.toLowerCase().indexOf(q) > -1 ||  student.lastName.toLowerCase().indexOf(q) > -1);
    // }

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

        {/* <div className="search-tag">
            <input className="tag-form-control" 
                type="search" 
                placeholder="Search by tag" 
                aria-label="Search"
                value={tags}
                onChange={(event) => setTags(event.target.value)}>
            </input>
        </div> */}

        <div className="app-container">
            <div className='student-list'>
                {data && searchStudents(data).map((student => ( 
                    <Student 
                        key={student.id}
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


