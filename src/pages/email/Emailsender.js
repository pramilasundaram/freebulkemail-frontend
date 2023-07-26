import React,{useContext, useState} from 'react'
import "./Emailsender.css"
import { ToastContainer, toast } from "react-toastify";
import { Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label } from 'reactstrap'
import Sidebar from '../../components/sidebar/Sidebar'
import { sendbulkemail } from '../../services/Apis';
import { userData } from '../../Provider';

export default function Emailsender() {
  const image1 = require("../../components/assests/dashboard2.jpg");
const messagefrom=localStorage.getItem("useremail")
  const {user}=useContext(userData);

  const [form, setForm] = useState({   
    messageto: "",
    appPassword:"",
    subject: "",
    message: ""    
  });

  const handlechange =async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handlesubmit=async(e)=>{
    e.preventDefault();
  const {appPassword,messageto,subject,message} = form;
  if (messageto === "") {
      toast.error("gender is required")
    }else if (appPassword === "") {
      toast.error("phonenumber is required")
    } else if (subject === "") {
      toast.error("phonenumber is required")
    } else if (message === "") {
      toast.error("date of birth is required")
    } 
     else {
      const data = new FormData();
      data.append("messagefrom", messagefrom);
      data.append("username", user.name);
      data.append("messageto",messageto);
      data.append("appPassword",appPassword);
      data.append("subject", subject);      
      data.append("message",message);

  let option=1;
  const response = await sendbulkemail(data,option);
  console.log(response);   
    }
  }
  return (
    <div className="row">
      <Sidebar />
      <div className="col-sm-9">
        <div className="row g-0">
          <div >
            <Card
              body
              className="text-center"
              color='light'
              outline
              style={{
                width: "100%"
              }}
            >
              <img
                alt="Card"
                src={image1}
                style={{
                  width: "100%",
                  height: "300px"
                }}
              />
              <CardTitle tag="h1">
                FREE BULK EMAIL SERVICES               
              </CardTitle>
              <CardBody>
                <Form onSubmit={handlesubmit}>
                  <FormGroup row>
                    <Label
                      for="messagefrom">
                     MESSAGE FROM
                    </Label>
                    <Col >
                      <Input
                        id="messagefrom"
                        name="messagefrom"
                        placeholder="messagefrom"
                        type="email"
                      value={messagefrom}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="messageto"
                    >
                      MESSAGE TO
                    </Label>
                    <Col >
                      <Input
                        id="messageto"
                        name="messageto"
                        placeholder="messageto"
                        type="text"
                      value={form.messageto}
                      onChange={handlechange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="appPassword">
                      APP PASSWORD
                    </Label>
                    <Col >
                      <Input
                        id="appPassword"
                        name="appPassword"
                        placeholder="enter your 16-digit app password"
                        type="password"
                        value={form.appPassword}
                      onChange={handlechange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="subject"                     
                    >
                      SUBJECT
                    </Label>
                    <Col >
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="subject"
                        type="text"
                        value={form.subject}
                        onChange={handlechange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label
                      for="message"
                      
                    >
                      MESSAGE
                    </Label>
                    <Col>
                      <Input
                        id="message"
                        name="message"
                        type="textarea"
                        value={form.message}
                        onChange={handlechange}
                      />
                    </Col>
                  </FormGroup>
                  <Button color="info" style={{ margin: "0  50px 150px 0", float: "right" }}>
                    SEND
                  </Button>
                </Form>
              </CardBody>
            </Card>
            <ToastContainer position="top-center"/>
          </div>
        </div>
      </div>
    </div>
  )
}
