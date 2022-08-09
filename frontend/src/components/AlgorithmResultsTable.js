import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table"

class AlgorithmResultsTable extends Component {
    render() {
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
                            <tr>
                                <td>05/08/2022 11:30:52</td>
                                <td>5</td>
                                <td>1</td>
                                <td>0,847 ms</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

        )
    };


}

export default AlgorithmResultsTable;
