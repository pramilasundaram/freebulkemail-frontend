import React, {  useEffect, useState } from 'react'
import { BiShow, BiDotsVerticalRounded } from 'react-icons/bi';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Table, Button, Form, FormGroup, Input, Label, DropdownMenu, DropdownToggle, DropdownItem, Card, UncontrolledDropdown } from "reactstrap"
import "./Home.css"
import Sidebar from '../../../components/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { deletecontact,getfunction } from '../../../services/Apis';


export default function Homecontact() {
  const [data,setData]=useState([])
  let userid = localStorage.getItem("userid");
  
  const nav = useNavigate();


  const userGet = async (id)=> {
    const response = await getfunction(id);
    if(response.status===200)
    setData(response.data);
  }

  const handledelete = async (id) => {
    const response = await deletecontact(id);
    // console.log(response)
    if (response.status === 200) {
      userGet(userid);
    }
    else {
      console.log("error in delete")
    }
  }
  useEffect(() => {
    userGet(userid)
   }, [userid]);

  return (<div className="row">
    <Sidebar />
    <div className="col-sm-9">
      <div className="row g-0">
        <Card
          body
          className="text-center"
          style={{
            width: "100%"
          }}
        >
          <h1>CONTACTS</h1>
          <Card
            body
            className="text-center"
            style={{
              width: "100%"
            }}
          >
            {/*search*/}
            <div className="container-fluid search_add mt-4 d-flex justify-content-between">
              <div className="search ">
                <Form className="d-flex">
                  <Input
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => { }}
                  />
                  <Button color="primary">Search</Button>
                </Form>
              </div>
              {/*filter-begin */}
              <div className="filter_gender ">
                <div
                  style={{
                    overflow: "hidden",
                    padding: "8px"
                  }}
                >
                  <h5>Filter by Gender</h5>
                  <Form className="d-flex">
                    <FormGroup check>
                      <Input name="radio1" type="radio" />
                      <Label check>All</Label>&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />
                      <Label check>Male</Label>&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />
                      <Label check>Female</Label>&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                  </Form>
                </div>
              </div>
              
              <div className="add_btn ">
                <Button color="warning" onClick={() => { nav("/create") }}>
                  Add user
                </Button>
              </div>
            </div>
          </Card>

          {/*table*/}
          <div className="row g-0">
            <Table className="table" style={{
              width: "100%"
            }} >
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>phonenumber</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return <tr key={item.id}>
                    <th scope="row"> {index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.phonenumber}</td>                   
                    <td>{item.email}</td>
                    <td>
                      <UncontrolledDropdown
                        className="me-2"
                        direction="down">
                        <DropdownToggle
                          color="transparent">
                          <BiDotsVerticalRounded />
                        </DropdownToggle>
                        <DropdownMenu >
                          <DropdownItem onClick={() => { nav("/profile/" + item._id) }} >
                            <BiShow /> View
                          </DropdownItem>
                          <DropdownItem  onClick={() => { nav("/edit/" + item._id) }}>
                            <FaEdit /> Edit
                          </DropdownItem>
                          <DropdownItem  onClick={() => handledelete(item._id)}>
                            <FaTrash/> Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                })}
              </tbody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  </div>
  );
}

