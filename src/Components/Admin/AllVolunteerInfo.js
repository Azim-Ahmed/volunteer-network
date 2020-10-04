import React from 'react';
import { Button, Table } from 'reactstrap';

const AllVolunteerInfo = ({taskItem}) => {
    const {email,name, date, volunteeringName, _id, volunteeringPhoto } = taskItem

    const handleDeleteAdmin = (id) =>{
        fetch("http://localhost:4000/delete/?id="+id,{
            method:"DELETE",
        })
        .then(res=> res.json())
        .then(result =>{
            if(result){
 console.log(result);
 
            }
        })
    }
    return (
        <div>
            <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>{name}</th>
          <th>{email}</th>
          <th>{date}</th>
          <th>{volunteeringName} </th>
          
          <th> <Button onClick = {()=>handleDeleteAdmin(_id)} color = "danger"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg></Button> </th>

        </tr>
      </thead>

    </Table>
        </div>
    );
};

export default AllVolunteerInfo;