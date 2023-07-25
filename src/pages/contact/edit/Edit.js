import React, { useState, useEffect } from 'react'
import "./Edit.css"
import { Row, Col, Button, Form, FormGroup, Input, Label, Card, CardHeader } from "reactstrap"
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import Sidebar from '../../../components/sidebar/Sidebar';
import { updatecontact,getcontact } from '../../../services/Apis';
export default function Editcontact() {
  const nav = useNavigate();
  const [form, setForm] = useState([]);
  const { id } = useParams();
  console.log(id)

  const userGet = async (id) => {
    const response = await getcontact(id);
    console.log(response)
    if (response.status === 200)
      setForm(response.data);
    else {
      console.log("error")
    }
  }

  useEffect(() => {
    userGet(id)
  }, [id]);

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { email,  phonenumber, name, gender, location} = form;
    if (name === "") {
      toast.error("fullname is required")  
    } else if (gender === "") {
      toast.error("gender is required")
    } else if (email === "") {
      toast.error("email is required")
    } else if (phonenumber === "") {
      toast.error("phonenumber is required")
    } else if (location === "") {
      toast.error("date of birth is required")
    } else {
      toast.success("updated successfully!!")
     
      // console.log(form)
      const response = await updatecontact(id,form);
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
            <CardHeader tag="h1">UPDATE CONTACT DETAILS</CardHeader>
            <Button color="warning" onClick={() => { nav(-1) }} style={{ float: "left", width: "100px" }}>BACK</Button>
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
                        checked={form.gender === "male" ? true : false}
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
                        checked={form.gender === "female" ? true : false}
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
