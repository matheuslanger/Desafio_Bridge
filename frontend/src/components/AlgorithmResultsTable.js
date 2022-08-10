import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table"

const AlgorithmResultsTable = ({executions}) => {
    return (
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
                    {executions?.map((execution, index) => (
                        <tr key={index}>
                            <td>{execution.createdAt}</td>
                            <td>{execution.input}</td>
                            <td>{execution.result}</td>
                            <td>{execution.executionTime} ms</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </Container>

    );
};

export default AlgorithmResultsTable;
