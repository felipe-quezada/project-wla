import { useReducer, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap"
import PropTypes from "prop-types";
import reducer from "../helper/reducerFunctionForm";
import emailjs from '@emailjs/browser';
import tosty from "../helper/functionsClick";
import { useState } from "react";

export const FormToEmail = ({message}) => {
  const [formMessage, setFormMessage] = useReducer(reducer, {
    name: '',
    email: '',
    phone: '',
    message: message || '',
    buttonState: false,
  })
  const [validated, setValidated] = useState(false);
  const formRef = useRef()
  const handleSubmit = (e) => {
    const form = formRef.current;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setFormMessage({type: 'reset' })
      setFormMessage({type: 'button', payload: true})
      
      const serviceId = 'service_tdeugwc';
      const templateId = 'template_9qscngg';
      const apiKeys = 'WahkQC9Gdyux_zVOY';

      emailjs.sendForm(serviceId, templateId, formRef.current, apiKeys)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => { console.log(error) })
        .finally(() => {
          setFormMessage({type: 'button', payload: false});
          tosty()
        })
      }
    setValidated(true);

  }
  const handleInputOnChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setFormMessage({type: 'name', payload: e.target.value})
        break;
      case 'email':
        setFormMessage({type: 'email', payload: e.target.value})
        break;
      case 'phone':
        if (e.target.value.length > 9) {
          e.target.value = e.target.value.slice(0, 9)
        }
        setFormMessage({type: 'phone', payload: e.target.value})
        break;
      case 'message':
        setFormMessage({type: 'message', payload: e.target.value})
        break;
      default:
        break;
    }
  }
  
  return (
    <>
      <Form noValidate validated={validated} ref={formRef} className="text-white text-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="nombre"
            name="name"
            value={formMessage.name}
            onChange={handleInputOnChange}/>
          <Form.Control.Feedback type="invalid">
            Ingrese su nombre
          </Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="mb-3" controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="email@domain.com"
              name="email"
              value={formMessage.email}
              onChange={handleInputOnChange}/>
            <Form.Control.Feedback type="invalid">
              Ingrese un correo valido
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="phone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="(+56)"
              name="phone"
              value={formMessage.phone}
              onChange={handleInputOnChange}/>
            <Form.Control.Feedback type="invalid">
              Ingrese un telefono valido
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={6}
            placeholder="Haz tu solicitud..."
            name="message"
            value={formMessage.message}
            onChange={handleInputOnChange}/>
          <Form.Control.Feedback type="invalid">
            Ingrese un mensaje
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mt-5" controlId="exampleForm.ControlInput1">
          {formMessage.buttonState
            ? <Button variant="warning" type="button" style={{width: '50%'}} disabled>Enviando...</Button>
            : <Button variant="warning" type="submit" style={{width: '50%'}}>Enviar</Button>
          }
        </Form.Group>
      </Form>
    </>
  )
}

FormToEmail.propTypes = {
  message: PropTypes.string,
}
