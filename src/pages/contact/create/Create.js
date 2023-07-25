import React, { useState } from 'react'
import "./Create.css"
import { Row, Col, Button, Form, FormGroup, Input, Label, Card, CardHeader } from "reactstrap"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import Sidebar from '../../../components/sidebar/Sidebar';
import { createcontact } from '../../../services/Apis';


export default function Createcontact() {

  const nav = useNavigate();
  let userid = localStorage.getItem("userid");
  const [form, setForm] = useState({
    name: "",
    gender: "",
    email: "",
    phonenumber: "",
    location: ""
  });

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { email,  phonenumber, name, gender, location } = form;
    if (name === "") {
      toast.error("fullname is required")    }
     else if (gender === "") {
      toast.error("gender is required")
    } else if (email === "") {
      toast.error("email is required")
    } else if (phonenumber === "") {
      toast.error("phonenumber is required")
    } else if (location === "") {
      toast.error("date of birth is required")
    } 
     else {
     
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("phonenumber", phonenumber);
      data.append("gender", gender);
      data.append("location", location);
      data.append("user", userid);
  
      const response = await createcontact(data);
       console.log(response)
      setForm({
        ...form,
        name: "",
        gender: "",
        email: "",
        phonenumber: "",
        location: ""
      })    
    }
  }

  return (
    <div className="row">
      <Sidebar />
      <div className="col-sm-9">
        <div className="row g-0 ">
          <Card
            body
            className="text-center"
            style={{
              width: "100%"
            }}
          >
            <CardHeader tag="h1">create contact</CardHeader>
            <Button color="warning" onClick={() => nav(-1) } style={{ float: "left", width: "100px" }}>BACK</Button>
            <Form onSubmit={handlesubmit}>
              <Row>
              
                {/**name */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="name">
                      FULL NAME
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="name"
                      type="text"
                      value={form.name}
                      onChange={handlechange}
                    />
                  </FormGroup>
                </Col>

                {/**gender */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="gender">
                      GENDER
                    </Label>
                  </FormGroup>
                  <Form className="d-flex justify-content-center">
                    <FormGroup>
                      <Input
                        name="gender"
                        type="radio"
                        value="male"
                        onChange={handlechange}
                      />
                      {' '}
                      <Label check>
                        Male
                      </Label>&nbsp;&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                    <FormGroup >
                      <Input
                        name="gender"
                        type="radio"
                        value="female"
                        onChange={handlechange}
                      />
                      {' '}
                      <Label check>
                        Female
                      </Label>&nbsp;&nbsp;&nbsp;&nbsp;
                    </FormGroup>
                  </Form>
                </Col>

                {/**email */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="Email">
                      EMAIL
                    </Label>
                    <Input
                      id="Email"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                      value={form.email}
                      onChange={handlechange}
                    />
                  </FormGroup>
                </Col>

                {/**phone */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="phonenumber">
                      PHONE
                    </Label>
                    <Input
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="enter mobile number"
                      type="text"
                      value={form.phonenumber}
                      onChange={handlechange}
                    />
                  </FormGroup>
                </Col>



                {/**location */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="location">
                      LOCATION
                    </Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="location"
                      type="text"
                      value={form.location}
                      onChange={handlechange}
                    />
                  </FormGroup>
                </Col>



              </Row>

              <Button color="info">submit</Button>
            </Form>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      </div>
    </div>
  )
}
