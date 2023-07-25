import React, {  useState,useEffect} from 'react'
import "./review.css"
import { Row, Col, Button, Form, FormGroup,Table, Input, Label, Card, CardBody, CardTitle, CardSubtitle, CardHeader } from "reactstrap"

import { ToastContainer, toast } from "react-toastify";
import Sidebar from '../../components/sidebar/Sidebar';
import { createreview,deletereview,getreviewfunction, getreviews } from '../../services/Apis';

import {FaTrash } from 'react-icons/fa';

export default function Review() {
  
  const [form,setForm]=useState({
    review:""
  })
  const [data,setData]=useState([])
  const [reviewdata,setReviewdata]=useState([]) 
 
  let userid=localStorage.getItem("userid")
  let username=localStorage.getItem("username")
  let useremail=localStorage.getItem("useremail")
  let id=userid
 
  const userGet = async (id)=> {
    const response = await getreviewfunction(id);
    if(response.status===200)
    setData(response.data);
  }

  const allreviews = async (id)=> {
    const response = await getreviews(id);
    if(response.status===200)
    setReviewdata(response.data);  

  }

  const handledelete = async (id) => {
    const response = await deletereview(id);
    console.log(response)
    if (response.status === 200) {
      userGet(userid);
      allreviews();
    }
    else {
      console.log("error in delete")
    }
  }
  useEffect(() => {
    allreviews();
   }, []);


  useEffect(() => {
    userGet(id); 
   }, [id]);

  const handlechange=(e)=>{
setForm({review:e.target.value})
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
   const {review}=form;
    if (review === "") {
      toast.error("review   is required")
    } else {
      const data = new FormData();
      data.append("name", username);
      data.append("email", useremail);
      data.append("review", review);      
      data.append("user", userid);
   
      //console.log(data)
      const response = await createreview(data);
      //console.log(response)
      if(response.status===200)
     {
        userGet(userid);
        allreviews();
        setForm({review:""})
      }
     else{
      console.log("error")
     }
    }
  }

  return (
    <div className="row">
      <Sidebar />
      <div className="col-sm-9">
        {/** reviews */}
        <div className="row g-0 ">
          <Card
            body
            className="text-center"
            style={{
              width: "100%"
            }}
          >
            <CardHeader tag="h1">CREATE YOUR REVIEW</CardHeader>
           
            <Form onSubmit={handlesubmit}>
              <Row>

                {/**from */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="reviewer">
                      REVIEWER
                    </Label>
                    <Input
                      id="reviewer"
                      name="reviewer"
                      placeholder="reviewer"
                      type="text"
                      value={username}                      
                    />
                  </FormGroup>
                </Col>



                {/**to */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="email">
                     REVIEWER EMAIL
                    </Label>
                    <Input
                      id="email"
                      name="email"                     
                      type="string"
                      value={useremail}                     
                    />
                  </FormGroup>
                </Col>

                {/**subject */}
                <Col md={6}>
                  <FormGroup>
                    <Label for="subject">
                     REVIEW
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="enter subject"
                      type="text"
                      value={form.review}
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
        {/**table of particular  */}
        
        <div className="row g-0">
        <h1 className='text-center'>REVIEWS BY YOU</h1>
            <Table className="table" style={{
              width: "100%"
            }} >
              <thead>
                <tr>
                  <th>S.No</th>                               
                  <th>Review</th>                 
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return <tr key={item.id}>
                    <th scope="row"> {index + 1}</th>                   
                    <td>{item.review}</td>
                    <td  onClick={() => handledelete(item._id)}>                      
                            <FaTrash/> Delete                         
                    </td>
                  </tr>
                })}
              </tbody>
            </Table>
          </div>

        {/** all reviews  card*/}
        <div className="row g-0">
          <h1 className='text-center'>REVIEWS BY OUR CUSTOMER</h1>
          {reviewdata.map((item) => {
            return (<div className="col-md-6 col-lg-4">
              <Card
                color='success'
                outline
                style={{ width: "100%", margin: "2px" }}
                key={item._id}>

                <CardBody>
                  <CardTitle tag="h5" className='reviewtitle'>
                  {item.review}                
                  </CardTitle>
                  <CardSubtitle>
                  <p className='reviewcol'> {item.name}</p><br/>
                  <p  className='reviewcol'> {item.email}</p>
                  </CardSubtitle>
                  
                </CardBody>
              </Card>
            </div>)
          })
          }

        </div>
      </div>
    </div>
  )
}




