import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";

const handleClick = async () => {
    const algorithmInput = document.getElementById("algorithm-input");
    const payload = { input: parseInt(algorithmInput.value) };
    const response = await axios.post(
        "http://localhost:8080/api/v1/numbers/",
        payload
    );
    console.log(response.data);

};

class AlgorithmForm extends Component {
    render() {
        return (
            <Container className="p-3">
                <InputGroup className="mb-3" controlId="formNumber">
                    <Form.Control id="algorithm-input" onSubmit={() => handleClick()} type="number" min="2" placeholder="Digite um número" />
                    <Button onClick={() => handleClick()} variant="outline-secondary" id="button-addon2">
                        Enviar
                    </Button>
                </InputGroup>
            </Container>
        )
    };


}

export default AlgorithmForm;
