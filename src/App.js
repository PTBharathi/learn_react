import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const tabledata =[
  {
    first_name:"sathish",
    last_name:"t",
    father_name:"thanga",
    email:"123@gmail.com",
    address:"address"
  },
  {
    first_name:"bharathi",
    last_name:"t",
    father_name:"thanga",
    email:"123@gmail.com",
    address:"address"
  }
]

function App() {
const [first_name,setfirstname]=useState('');
const [last_name,setlastname]=useState('');
const [father_name,setfathername]=useState('');
const [email,setemail]=useState('');
const [address,setaddress]=useState('');
const [data,setdata]=useState([]);
console.log(data)

  const firstname = (e) => {
  setfirstname(e.target.value);
};
const lastname = (e) => {
  setlastname(e.target.value);
};
const fathername = (e) => {
  setfathername(e.target.value);
};
const email_value = (e) => {
  setemail(e.target.value);
};
const address_value = (e) => {
  setaddress(e.target.value);
};
function submitvalue(){
const submitdata ={first_name,last_name,father_name,email,address};
// let arrayData =data;
// arrayData.push(submitdata);
setdata([...data,submitdata])
console.log(data.first_name)
setfirstname('')
setlastname('')
setfathername('')
setemail('')
setaddress('')
}

 function Tabledata(){
  console.log(data,"data")
  // const data ={first_name,last_name,father_name,email,address}
  let tableRows = data.map(item=>{
  return(
    <>
    <tr>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.father_name}</td>
      <td>{item.email}</td>
      <td>{item.address}</td>
    </tr>
    </>
  )
})
return tableRows;
 }


     return (
    <div className='body'>
      <h1>Register Login</h1>
    <div id='form'>
      <div className='content firstname'>
      <h3>First Name</h3> <input type='text' value={first_name} onChange={firstname} placeholder='First Name'></input>
      </div>
      <div className='content lastname'>
      <h3>Last Name</h3> <input type='text' value={last_name} onChange={lastname} placeholder='Last Name'></input>
      </div>
      <div className='content fathername'>
      <h3>Father Name</h3> <input type='text' value={father_name} onChange={fathername} placeholder='Father Name'></input>
      </div>
      <div className='content email'>
      <h3>E Mail</h3> <input type='text' value={email} onChange={email_value} placeholder='E mail'></input>
      </div>
      <div className='content address'>
      <h3>Address</h3> <input type='text' value={address} onChange={address_value} placeholder='Address'></input>
      </div>
      <div className='but'><button onClick={submitvalue} type='button'>Submit</button><button>Login</button></div>
    </div>
    <div className='table'>
    <table>
      <thead>
      <tr><td><th>First Name</th></td>
      <td><th>Last name</th></td>
      <td><th>Father Name</th></td>
      <td><th>email</th></td>
      <td><th>Address</th></td></tr>
      </thead>
      <tbody>
        {Tabledata()}
      </tbody>
    </table>
    </div>
    </div>

    );
  };

export default App



