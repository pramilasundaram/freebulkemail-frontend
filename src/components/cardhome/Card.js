import React from 'react'
import "./Card.css"
import { Card,Button, CardBody, CardSubtitle} from "reactstrap"
import { useNavigate } from 'react-router-dom'

export default function Cards() {
  const image=require("../assests/dashboard1.webp")

  const nav = useNavigate();
  return (
    <div className="row g-0">
    <h1 className='text-center title'> FREE BULK EMAIL SERVICES</h1>
      <div className="col-md-6 " >      
        <Card
          body
          className="text-center"
          color='light'
          outline
          width= "100%">   
          <img
          alt="Card"
          src={image}
           width= "100%"/>       
        </Card>
      </div>
      <div className="col-md-6 ">
        
        <Card
          body
          className="text-center"
          color='light'
          outline
          width= "100%">
          <CardBody>
          <CardSubtitle tag="h4">
            See how over 300,000 customers are using Sender to save time and get to the inbox
          </CardSubtitle>
          <Button color="primary"
             onClick={() => { nav("/emailsender") }}> SEND EMAIL</Button>
          <p>Immediate access - No credit card required</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
