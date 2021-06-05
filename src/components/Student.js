import React, { useState } from 'react'; 
import { Row, Card } from 'react-bootstrap';
import { Collapse, Button } from 'reactstrap';

function Student(props) {
    // state for toggle button 
    const [open, setOpen] = useState(false); 
    const [status, setStatus] = useState
        (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#b2b2b2" className="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>); 

    const onEntered= () => setStatus
        (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#b2b2b2" class="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg>);

    const onExited = () => setStatus
        (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#b2b2b2" className="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>);

    const toggle = () => setOpen(!open); 

    // function to get the average of grades to use to display 
    const getAverage = (arr) => {
        let sum = 0;
        let average = 0;

    for(let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
        sum += arr[i];
        average = sum/8;
    }
        return average ;
    };

    // tags 
    const [tags, setTags] = useState([]);

    const addTags = event => {
		if (event.key === 'Enter') {
			setTags([...tags, event.target.value]);
			event.target.value = "";
		}
    };

	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};


 return (
    <div className="students">
        <Card className="student-cards" key={props.id}>
          <Row>
                <div className="student-icon col-3">
                    <img src={props.pic} alt="icon"/>
                </div>
              
                <div className="student-info col-7">
                    <p className="name">{props.firstName} {props.lastName}</p>

                    <div className="info-details">
                        <p className="email">Email: {props.email}</p>
                        <p className="company">Company: {props.company}</p>
                        <p className="skill">Skill: {props.skill}</p>
                        <p className="average">Average: {getAverage(props.grades)}%</p>


                        <div className="tags-section">
                        <ul id="tags">
                        { tags.map((tag, index) => (
                        <li key={index} className="tag">
                        <span className='tag-name'>{tag}</span>
                        <span className='close' onClick={() => removeTags(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                        </li>
                        ))}
                        </ul>

                        <input
                        className="tags-input"
                        type="text"
                        onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                        placeholder="Add tag"
                        />
                        </div>


                        <Collapse
                            isOpen={open}
                            onEntered={onEntered}
                            onExited={onExited}
                        >
                            <div className="card-body">
                                <p className="grades">Test 1: {props.grades[0]}%</p>
                                <p className="grades">Test 2: {props.grades[1]}%</p>
                                <p className="grades">Test 3: {props.grades[2]}%</p>
                                <p className="grades">Test 4: {props.grades[3]}%</p>
                                <p className="grades">Test 5: {props.grades[4]}%</p>
                                <p className="grades">Test 6: {props.grades[5]}%</p>
                                <p className="grades">Test 7: {props.grades[6]}%</p>
                                <p className="grades">Test 8: {props.grades[7]}%</p>
                            </div>
                        </Collapse>
                    </div> 
                </div>

                <div className="toggle-button col-2">
                    <Button color="none" onClick={toggle}>{status}</Button>
                </div>
          
          </Row>
        </Card>
      
    </div>

 )};

export default Student; 
