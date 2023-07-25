import React from 'react'
import "../email/Emailsender.css";
import {Button, Card, CardBody, CardImg} from "reactstrap"
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
export default function Templates() {
    const image2 = require("../../components/assests/birthdaycard.jpg")
    const image4 = require("../../components/assests/profilecard.png")
    const nav=useNavigate();
      return (
    <div className="row">
    <Sidebar />
    <div className="col-sm-9 ">
        <div className="row g-0">
        <h1 className='text-center'>FREE TEMPLATES</h1>
        <div className="col-lg-6">
        <Card
            body
            className="text-center"            
            style={{ width: "100%"}}>
            <h1>BIRTHDAY WISHES TEMPLATE</h1>
          
            
            <Card style={{ margin: "10px"}} className="flip-card">
              <Card className="flip-card-inner">
                <div className="flip-card-front">
                  <CardImg
                    alt="Card image cap"
                    src={image2}
                    top
                    width="100%"
                  />
                </div>
                <CardBody className="flip-card-back">
                  <h1>Wish you a very happy birthday</h1>
                  <p>manimozhi</p>
                  <p>may god bless you</p>
                  <p>By,</p>
                  <p>pramila</p>
                </CardBody>
              </Card>

            </Card>
            <Button className='template_btn' onClick={()=>nav("/template/"+1)}>TRY IT</Button>
          

          </Card>
        </div>
        <div className="col-lg-6">
        <Card
            body
            className="text-center"            
            style={{ width: "100%"}}>
            <h1>PROFILE CARD TEMPLATE</h1>
          <Card  className="bagcard">
            <div className='imgBox'>
              <CardImg
                alt="Card image cap"
                src={image4}
                top
                width="80%"
                className="mouse"
              />
            </div>
            <CardBody className='contentBox'>             
              <h2 className="price">PRAMILA SUNDARAM</h2>
              <h4 style={{color:"white"}}>Full Stack MERN Developer</h4>
              <small style={{color:"white"}}>villupuram</small>
              <Button className="buy">
               CONTACT
              </Button>
            </CardBody>
          </Card>
          <Button className='template_btn' onClick={()=>nav("/template/"+2)}>TRY IT</Button>
          </Card>
        </div>
    </div>
    </div>
</div>
  )
}
