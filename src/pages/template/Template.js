import React, { useState } from 'react'
import "./template.css"
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, CardImg, CardTitle, Input, Label, CardFooter } from 'reactstrap'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Template() {
    const { id } = useParams();    
    console.log(id)
    const image1 = require("../../components/assests/dashboard2.jpg")
    const image2 = require("../../components/assests/birthdaycard.jpg")
    const image4 = require("../../components/assests/profilecard.png")
    const nav = useNavigate();

    const [form, setForm] = useState({
        senderemail: "",
        receiveremails: "",
        message: "",
        role: "",
        place: ""
    })
    const [preview, setPreview] = useState({
        senderemail: "",
        receiveremails: "",
        message: "",
        role: "",
        place: ""
    })

    const handlechange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handlesubmit = () => {
        const { senderemail, receiveremails, message, role, place } = form;
        if (senderemail === "") {
            toast.error("sender email is required")
        } else if (receiveremails === "") {
            toast.error("receiveremails is required")
        } else if (message === "") {
            toast.error("message is required")
        } else if (role === "") {
            toast.error("role is required")
        } else if (place === "") {
            toast.error("place is required")
        } else {
            toast.success("email sent !!")
        }
    }
    return (
        <div className="row">
            <Sidebar />
            <div className="col-sm-9 ">
                {id === "1" ?
                    <div className="row g-0">
                    <div className="col-lg-6">
                        <Card
                            body
                            className="text-center"
                            style={{
                                width: "100%"
                            }}
                        >
                            <CardTitle>
                                <Label for="senderemail"> FROM </Label>
                                <Input id="senderemail" name="senderemail" placeholder="senderemail" type="email" onChange={handlechange} />

                                <Label for="receiveremails" sm={2}> TO </Label>
                                <Input id="receiveremails" name="receiveremails" placeholder="receiveremails" type="email" value={form.receiveremails} onChange={handlechange} />
                            </CardTitle>

                            <CardHeader tag="h3">BIRTHDAY WISHES TEMPLATE</CardHeader>
                            <Card className='birthday_card'>
                                <CardImg
                                    alt="Card image cap"
                                    src={image2}
                                    width="100%" />
                                <CardBody>
                                    <h1>
                                        <Label for="message" >message </Label>
                                        <Input id="message" name="message" placeholder="message" type="textarea" value={form.message} onChange={handlechange} />
                                    </h1>
                                    <CardFooter style={{ float: "right" }}>
                                        <p><small>By,pramila</small></p>
                                    </CardFooter>
                                </CardBody>
                            </Card>

                        </Card>
                    </div>

                    <div className="col-lg-6">
                        <h2>Click the button to preview your card</h2>
                        <Button className='preview_btn' color="warning" onClick={() => {
                            setPreview(form)
                        }}>PREVIEW</Button>

                        <Card
                            body
                            className="text-center flip-card-inner"
                            style={{ width: "100%", height: "60%" }}>
                            <Card style={{ margin: "10px" }} className="flip-card">
                                <Card className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <CardImg
                                            alt="Card image cap"
                                            src={image2}
                                            top
                                            width="100%" />
                                    </div>
                                    <CardBody className="flip-card-back">
                                        <h1>{preview.message}</h1>
                                        <CardFooter style={{ float: "right" }}>
                                            <p><small>By,pramila</small></p>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </Card>
                            <ToastContainer position='top-center' />
                        </Card>

                        <Button color="info" className="send_btn" onClick={handlesubmit}>SEND EMAIL</Button>
                    </div>
                    </div>                
                :                 
                    <div className="row g-0">
                    <div className="col-lg-6">
                            <Card
                                body
                                className="text-center"
                                style={{
                                    width: "100%"
                                }}
                            >
                                <CardTitle>
                                    <Label for="senderemail"> FROM </Label>
                                    <Input id="senderemail" name="senderemail" placeholder="senderemail" type="email" onChange={handlechange} value={form.senderemail} />

                                    <Label for="receiveremails" sm={2}> TO </Label>
                                    <Input id="receiveremails" name="receiveremails" placeholder="receiveremails" type="email" value={form.receiveremails} onChange={handlechange} />
                                </CardTitle>

                                <CardHeader tag="h3">PROFILE CARD TEMPLATE</CardHeader>
                                <Card className="bagcard">
                                    <div className='imgBox'>
                                        <CardImg
                                            alt="Card image cap"
                                            src={image4}
                                            className="mouse"
                                        />
                                    </div>
                                    <CardBody className='contentBox'>
                                        <h2 className="price">PRAMILA SUNDARAM</h2>
                                        <h4 style={{ color: "white" }}>
                                            <Label for="role"> Role:</Label>
                                            <Input id="role" name="role" placeholder="role" type="text" value={form.role} onChange={handlechange} />
                                        </h4>
                                        <small style={{ color: "white" }}>
                                            <Label for="place" sm={2}>Place: </Label>
                                            <Input id="place" name="place" placeholder="place" type="text" value={form.place} onChange={handlechange} />
                                        </small>
                                        <Button className="buy">
                                            CONTACT
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Card>
                    </div>

                    <div className="col-lg-6">
                            <h2>Click the button to preview your card</h2>
                            <Button className='preview_btn' color="warning" onClick={() => {
                                setPreview(form)
                            }}>PREVIEW</Button>

                            <Card className="bagcard">
                                <div className='imgBox'>
                                    <CardImg
                                        alt="Card image cap"
                                        src={image4}
                                        className="mouse"
                                    />
                                </div>
                                <CardBody className='contentBox'>
                                    <h2 className="price">PRAMILA SUNDARAM</h2>
                                    <h4 style={{ color: "white" }}>
                                        {preview.role}
                                    </h4>
                                    <small style={{ color: "white" }}>
                                        {preview.place}
                                    </small>
                                    <Button className="buy">
                                        CONTACT
                                    </Button>
                                </CardBody>
                            </Card>

                            <Button color="info" className="send_btn" onClick={handlesubmit}>SEND EMAIL</Button>
                    </div>
                    </div>
                
                }
            </div>
        </div>
    )
}

