import React from 'react';
import { Card, CardTitle, CardBody, Form, FormGroup, Input, Button } from 'reactstrap'; 
import { Link, graphql, StaticQuery } from 'gatsby'; 
import Img from 'gatsby-image'; 

const DownCard = () => (
  <div>
            <Card>
            <CardBody className='cardBody'>
                <CardTitle className='text-center text-uppercase mb-3'>
                    Newsletter
                </CardTitle>
                <Form className='text-center'>
                    <FormGroup>
                        <Input type='email' name='email' placeholder='Your email here'/>
                    </FormGroup>
                    <Button className='btn btn-outline-success text-uppercase'>
                        It's yours, my friend
                    </Button>
                </Form>
            </CardBody>
        </Card>
  </div>
)

export default DownCard; 