import React from 'react'
// import "./Card.css"
import { Card, Button, CardBody, CardSubtitle } from "reactstrap"
import { useNavigate } from 'react-router-dom'

export default function Cards() {
  const image = require("../assests/contacts.jpg")

  const nav = useNavigate();
  return (
    <div className="row g-0">
    <h1 className='text-center title'>UNLIMITED CONTACTS</h1>
      <div className="col-md-6">
        <Card
          body
          className="text-center"
          color='light'
          outline
          style={{width: "100%"}}>
          <img
            alt="Card"
            src={image}
            style={{
              width: "100%"
            }}
          />
        </Card>
      </div>
      <div className="col-md-6">        
        <Card
          body
          className="text-center"
          color='light'
          outline
          width= "100%">
          <CardBody>
            <CardSubtitle tag="h4">
              Don’t pay for contacts but the emails you send monthly. Build your email lists with ease and never worry about paying more.
            </CardSubtitle>
            <Button 
            color="primary"
             onClick={() => { nav("/home") }}>
             ADD NEW CONTACT</Button>
            <p>Add customers to your contact lists - No credit card required</p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
