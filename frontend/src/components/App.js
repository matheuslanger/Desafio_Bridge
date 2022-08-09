import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "./App.css";

class App extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">bridge_</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="p-3">
                    <div className="jumbotron">
                        <h1>Desafio Full Stack</h1>
                        <p>
                            Insira um número inteiro k e calcule o número de inteiros 
                            positivos n menores que k, para os quais n e n + 1 têm o 
                            mesmo número de divisores positivos.
                        </p>
                    </div>
                </Container>
                <Container className="p-3">
                    <Form>
                        <InputGroup className="mb-3" controlId="formNumber">
                            <Form.Control type="number" min="2" placeholder="Digite um número" />
                            <Button variant="outline-secondary" id="button-addon2">
                                Enviar
                            </Button>
                        </InputGroup>
                    </Form>
                </Container>
                <Container className="p-3">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Entrada</th>
                                <th>Resultado</th>
                                <th>Tempo de execução</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>05/08/2022 11:30:52</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0,847 ms</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

            </>
        );
    }
}

export default App;
