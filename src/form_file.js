import React, { Component, useState } from 'react'
import Table_file from './table_file';

function Form_file(props){
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [mobile,setmobile]=useState("");
    const [tabledata,setTableData]=useState([]);

    const name_value=(e)=>{setname(e.target.value);}
    const email_value=(e)=>{setemail(e.target.value);}
    const mobile_value=(e)=>{setmobile(e.target.value);}

    function submited(){
    const data={name,email,mobile}

    setTableData([...tabledata,data])
    }
    console.log(tabledata,"table")
        return( <>         
            <div id="form">
                <h1>{props.title}</h1>
                <div><p>Name</p><input value={name} onChange={name_value} placeholder="Enter Your name"></input></div>
                <div><p>E Maill</p><input value={email} onChange={email_value} placeholder="Enter Your E Maill"></input></div>
                <div><p>Mobile No</p><input value={mobile} onChange={mobile_value} placeholder="Enter Your Mobile No"></input></div>
                <button onClick={submited} >Submit</button> <button >Login</button>
            </div>
            <Table_file data={tabledata}/>  
            </>  
    )
} 
export default Form_file;