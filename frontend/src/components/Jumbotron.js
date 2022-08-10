import React, { Component } from "react";
import Container from "react-bootstrap/Container";

const Jumbotron = () => {
    return (
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

    );

}

export default Jumbotron;
