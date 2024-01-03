import axios from 'axios';
import './App.css';
import { EmpData} from './EmployeeData'
import { useEffect, useState } from 'react';


function App() {

  const [data,setData]=useState([]);

  //we are binding this data to this state
  useEffect(()=>{

    GetData();
  },[])

  const GetData = ()=>{
axios.get('http://localhost:5177/api/Issue')
.then((result)=>{
  setData(result.data)
}).catch((console.error()))
    

  }

  const handleEdit = (id) =>{
    alert(id);
  }

  const handleDelete = (id) =>{
    alert(id);
  }

  return (
    <div className="container">
      <h1>Jaideep</h1>
      <table className="table table-hover  table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">SrNo</th>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Age</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.priority}</td>
              <td>
                
              <button
    className="btn btn-primary btn-block btn-hover"
    style={{ width: '100%', marginBottom: '5px' }}
    onClick={() => handleEdit(item.id)}
  >
    Edit
  </button>
  <button
    className="btn btn-danger btn-block btn-hover"
    style={{ width: '100%' }}
    onClick={() => handleDelete(item.id)}
  >
    Delete
  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
