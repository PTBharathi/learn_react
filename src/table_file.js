import React from 'react'
import Form_file from './form_file';

function Table_file(props){
    console.log(props,"tabloiuiouyiyie")
    const tablevalues=props.data.map(item=>{
        console.log(item)
        return(
            <>
        <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
            </tr>
            </>
            )
        }
    )
    

  return (<>
    <div>
        <table>
            <tr>
             <th>Name</th>
             <th>E Mail</th>
             <th>Mobile No</th>
             </tr>
             <tbody>
            {tablevalues}
            </tbody>
        </table>
    </div></>
  )
}
export default Table_file;