import React, { useState, useEffect } from 'react'
import "./Profile.css"
import { Button, Card, ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from "reactstrap"
import Sidebar from '../../../components/sidebar/Sidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { getcontact } from '../../../services/Apis'

export default function Profilecontact() {

  const nav = useNavigate();
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id)

  const userGet = async (id) => {
    const response = await getcontact(id);
    // console.log(response)
    if (response.status === 200)
      setData(response.data);
    else {
      console.log("error")
    }
  }

  useEffect(() => {
    userGet(id)
  }, [id]);

  return (
    <div className="row">
      <Sidebar />
      <div className="col-sm-9">
        <div className="row g-0">
          <Card
            body
            className="text-center"
            style={{
              width: "100%"
            }}>
            <h1> CONTACT</h1>

            <Card
              body
              className="text-center"
              style={{
                width: "100%"
              }}
            >
              <Button color="warning" onClick={() => { nav(-1) }} style={{ float: "left", width: "100px" }}>BACK</Button>

              <ListGroup flush >

                {/*name*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    NAME
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {data.name}
                  </ListGroupItemText>
                </ListGroupItem>

                {/* gender*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    Gender
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {data.gender}
                  </ListGroupItemText>
                </ListGroupItem>

                {/* phonenumber */}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    Phonenumber
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {data.phonenumber}
                  </ListGroupItemText>
                </ListGroupItem>

                {/*email */}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    email
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {data.email}
                  </ListGroupItemText>
                </ListGroupItem>

                {/*location*/}
                <ListGroupItem className='d-flex justify-content-around'>
                  <ListGroupItemHeading>
                    location
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                    {data.location}
                  </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  )
}
