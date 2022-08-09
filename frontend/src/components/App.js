import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BridgeNavbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import AlgorithmForm from "./AlgorithmForm";
import AlgorithmResultsTable from "./AlgorithmResultsTable";

import "./App.css";

const data = [
    { date: "05/08 18:53", input: 22, result: 3, executionTime: "50.7 ms" },
    { date: "05/08 18:54", input: 18, result: 2, executionTime: "45.9 ms" }

]

class App extends Component {
    state = {
        executions: []
    }

    componentDidMount() {
        console.log("mount")
    }

    render() {
        return (
            <>
                <BridgeNavbar />
                <Jumbotron />
                <AlgorithmForm />
                <AlgorithmResultsTable />

            </>
        );
    }
}

export default App;
