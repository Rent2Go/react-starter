import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'react-bootstrap'
import { FormField, Label } from 'semantic-ui-react'
import * as Yup from "yup"

const AddProduct = () => {
  const initialValues = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",

  }

  const schema = Yup.object(

    {
      title: Yup.string().required("Ürün adı zorunludur!"),
      description: Yup.string().required("Zorunlu alan"),
      price: Yup.number("asdas").required("Zorunlu alan"),
      discountPercentage: Yup.number().required("Zorunlu alan"),
      rating: Yup.number().required("Zorunlu alan"),
      stock: Yup.number().required("Zorunlu alan"),
      brand: Yup.string().required("Zorunlu alan"),
      category: Yup.string().required("Zorunlu alan"),
      thumbnail: Yup.string().required("Zorunlu alan"),

    }
  )
  return (
<>
    <Formik  initialValues={initialValues}
      validationSchema={schema}

    >
      <Form className='d-flex flex-column align-items-center mt-4' >
        <FormField>
          <label>First Name</label>
          <Field name= "title" />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <Field  name="price"/>
          <ErrorMessage name='price' render={(err)=> 
          <Label className='btn btn-danger' content={err}></Label>
          }></ErrorMessage>
        </FormField>
        <FormField>
         
        </FormField>
        <Button type='submit'>Add</Button>
      </Form>

    

    </Formik>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

</>
   
  )
  
}

export default AddProduct