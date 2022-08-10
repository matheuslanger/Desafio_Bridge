import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import axios from "axios";

const handleClick = async (handleResponse) => {
    const algorithmInput = parseInt(document.getElementById("algorithm-input").value);
    const payload = {input: algorithmInput };
    const response = await axios.post(
        process.env.REACT_APP_ALGORITHM_API_URL,
        payload
    );
    var today = new Date();
    var createdAt = today.toLocaleString();
    var currentHistory = JSON.parse(localStorage.getItem("executionHistory") || "[]");
    var resultData = {
        createdAt:createdAt,
        input:algorithmInput,
        result:response.data.result,
        executionTime:response.data.executionTime
    }
    var historyResults = [resultData,...currentHistory]
    localStorage.setItem("executionHistory", JSON.stringify(historyResults));
    handleResponse(historyResults)
};

const AlgorithmForm = ({handleResponse}) => {
        return (
            <Container className="p-3">
                <InputGroup className="mb-3" controlId="formNumber">
                    <Form.Control id="algorithm-input" onSubmit={() => handleClick()} type="number" min="2" placeholder="Digite um número" />
                    <Button onClick={() => {
                        handleClick(handleResponse)
                    }} variant="outline-secondary" id="button-addon2">
                        Enviar
                    </Button>
                </InputGroup>
            </Container>
        );
};

export default AlgorithmForm;
