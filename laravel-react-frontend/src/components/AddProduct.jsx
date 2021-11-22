// import axios from 'axios';
import { useState } from 'react';
import { Container, Row, Col, FloatingLabel, Form, Button } from 'react-bootstrap';


const AddProduct = () => {

  const baseUrl = 'https://anshumemorial.in/lv8_api/api/products';




  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");


  async function addProductHandler(e) {
    e.preventDefault();
    let data = {
      name,
      slug,
      description,
      price,
    };
    console.log(data);
    // try {
    //   const response = await axios.post(baseUrl, data);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }


    // axios.post(baseUrl, data)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });


    let response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data),
    });
    let responseData = await response.json();
    console.warn(responseData);
  };


  return (
    <div>
      <Container>
        <h1 className="text-center mb-4">Add Product</h1>
        <Row>
          <Col md={5} className="mx-auto">

            <Form onSubmit={addProductHandler}>
              <FloatingLabel controlId="name" label="Name" className="mb-3" >
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
              </FloatingLabel>
              <FloatingLabel controlId="slug" label="Slug" className="mb-3" >
                <Form.Control value={slug} onChange={(e) => setSlug(e.target.value)} type="text" placeholder="Slug" />
              </FloatingLabel>
              <FloatingLabel controlId="description" label="Description" className="mb-3" >
                <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Description" />
              </FloatingLabel>
              <FloatingLabel controlId="price" label="Price" className="mb-3" >
                <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Price" />
              </FloatingLabel>
              <Button onClick={addProductHandler} variant="primary" type="submit">Register</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default AddProduct
