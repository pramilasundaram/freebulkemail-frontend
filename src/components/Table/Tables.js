import React from 'react'
import {Table, DropdownMenu, DropdownToggle, DropdownItem, UncontrolledDropdown } from "reactstrap"
import { BiShow, BiDotsVerticalRounded } from 'react-icons/bi';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
export default function  Tables({data,deleteuser,handleprevious, handlenext,page,pagecount,setPage}) {
 
const nav=useNavigate();
  return (
    <div className="row g-0">
    <Table className="table" style={{
        width: "100%"
      }} >
        <thead>
          <tr>
            <th>S.No</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
           <tr>
              <th scope="row"> 1</th>
              <td>Pramilasundaram</td>
              <td>pramila@gmail.com</td>                   
              <td>female</td>
              <td>
                <UncontrolledDropdown
                  className="me-2"
                  direction="down">
                  <DropdownToggle
                    color="transparent" className='action_icon dot'>
                    <BiDotsVerticalRounded />
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem className='action_icon show' onClick={() => { nav("/profile/" + 4) }} >
                      <BiShow/> view
                    </DropdownItem>
                    <DropdownItem className='action_icon edit' onClick={() => { nav("/edit/" + 4) }}>
                      <FaEdit/> edit
                    </DropdownItem>
                    <DropdownItem className='action_icon trash' onClick={()=>deleteuser(
                      // item._id
                      )} > 
                      <FaTrash/>delete
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
         
        </tbody>
       {/** <tbody>
          {studentdata.map((item, index) => {
            return <tr key={item.id}>
              <th scope="row"> {index + 1}</th>
              <td>{item.name}</td>
              <td>{item.department}</td>                   
              <td><img className="table_Profile_icon" src={item.imageurl} alt="" /></td>
              <td>
                <UncontrolledDropdown
                  className="me-2"
                  direction="down">
                  <DropdownToggle
                    color="transparent">
                    <BiDotsVerticalRounded />
                  </DropdownToggle>
                  <DropdownMenu >
                    <DropdownItem>
                      <BiShow onClick={() => { nav("/profilestudent/" + item.id) }} />
                    </DropdownItem>
                    <DropdownItem>
                      <FaEdit onClick={() => { nav("/editstudent/" + item.id) }} />
                    </DropdownItem>
                    <DropdownItem>
                      <FaTrash onClick={() => handledelete(item.id)} />
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </td>
            </tr>
          })}
        </tbody>*/} 
       
      </Table>
      <Pagination
      handlenext={handlenext}
      handleprevious={handleprevious}
      page={page}
      pagecount={pagecount}
      setPage={setPage}
      />
      </div>
  )
}
