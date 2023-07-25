import React from 'react'
import "./Chart.css"
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, ListGroup, ListGroupItem,CardHeader } from "reactstrap"
export default function Chart() {
    return (
        <div className="row g-0">
          <h1 className='text-center title'> ALL PLAN DETAILS</h1>
           
            <div className="col-md-6 col-lg-3">
            <Card                   
            color='success'
            outline
            style={{
                width: "100%",
                margin:"2px",
                padding:"15px",
                height:"500px"
            }}
        >
                    <CardBody>
                        <CardTitle tag="h5" className='title'>
                        Free
                        </CardTitle>
                        <CardSubtitle tag="h5">
                        ₹0/month
                        </CardSubtitle>
                        <CardText>
                        With unlimited contacts
                        </CardText>
                    </CardBody>
                    <ListGroup flush>
                    <CardHeader tag="h6">Everything in Free:</CardHeader>
                        <ListGroupItem>
                        300 emails/day
                        </ListGroupItem>
                        <ListGroupItem>
                        Customizable Email Templates
                        </ListGroupItem>
                        <ListGroupItem>
                        Drag & Drop Editor
                        </ListGroupItem>
                        <ListGroupItem>
                        Transactional Emails
                        </ListGroupItem>
                        <ListGroupItem>
                        SMS & WhatsApp Campaigns
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <CardLink href="#">
                            More...
                        </CardLink>
                    </CardBody>
            </Card>
            </div>
            <div className="col-md-6 col-lg-3">
            <Card                   
            color='success'
            outline
            style={{
                width: "100%",
                margin:"2px",
                padding:"15px",
                height:"500px"
            }}
        >
                    <CardBody>
                        <CardTitle tag="h5" className='title'>
                        Starter
                        </CardTitle>
                        <CardSubtitle tag="h5">
                        ₹1575/month
                        </CardSubtitle>
                        <CardText>
                        With unlimited contacts
                        </CardText>
                    </CardBody>
                    <ListGroup flush>
                    <CardHeader tag="h6">Everything in Free, plus:</CardHeader>
                        <ListGroupItem>
                        From 20k emails/month
                        </ListGroupItem>
                        <ListGroupItem>
                        No daily sending limit
                        </ListGroupItem>
                        <ListGroupItem>
                        No Brevo (ex Sendinblue) logo (add-on)
                        </ListGroupItem>
                        <ListGroupItem>
                        Basic reporting & analytics
                        </ListGroupItem>
                        <ListGroupItem>
                        Email support
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <CardLink href="#">
                        More...
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-6 col-lg-3">
            <Card                   
            color='success'
            outline
            style={{
                width: "100%",
                margin:"2px",
                padding:"15px",
                height:"500px"
            }}
        >
                    <CardBody>
                        <CardTitle tag="h5" className='title'>
                        Business
                        </CardTitle>
                        <CardSubtitle tag="h5">
                        ₹4075/month
                        </CardSubtitle>
                        <CardText>
                        With unlimited contacts
                        </CardText>
                    </CardBody>
                    <ListGroup flush>
                    <CardHeader tag="h6">Everything in Starter, plus:</CardHeader>
                        <ListGroupItem>
                        From 20k emails/month
                        </ListGroupItem>
                        <ListGroupItem>
                        Marketing Automation
                        </ListGroupItem>
                        <ListGroupItem>
                        Advanced statistics
                        </ListGroupItem>
                        <ListGroupItem>
                        Multi-user access
                        </ListGroupItem>
                        <ListGroupItem>
                        Send time optimization
                        </ListGroupItem>
                        <ListGroupItem>
                        Phone support
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <CardLink href="#">
                        More...
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-6 col-lg-3">
                <Card                   
                    color='success'
                    outline
                    style={{
                        width: "100%",
                        margin:"2px",
                        padding:"15px",
                        height:"500px"
                    }}
                >
                    <CardBody>
                        <CardTitle tag="h5" className='title'>
                        Enterprise
                        </CardTitle>
                        <CardSubtitle tag="h5">
                        Custom price
                        </CardSubtitle>
                        <CardText>
                        With unlimited contacts
                        </CardText>
                    </CardBody>
                    <ListGroup flush>
                    <CardHeader tag="h6">Everything in Business, plus:</CardHeader>
                        <ListGroupItem>
                        Enterprise-grade Security
                        </ListGroupItem>
                        <ListGroupItem>
                        Advanced Integrations
                        </ListGroupItem>
                        <ListGroupItem>
                        Sub-account Management
                        </ListGroupItem>
                        <ListGroupItem>
                        Tailored Onboarding
                        </ListGroupItem>
                        <ListGroupItem>
                        Personalized support
                        </ListGroupItem>
                        <ListGroupItem>
                        Flexible contract
                        </ListGroupItem>
                    </ListGroup>
                    <CardBody>
                        <CardLink href="#">
                        More...
                        </CardLink>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
