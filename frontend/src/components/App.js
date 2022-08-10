import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BridgeNavbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import AlgorithmForm from "./AlgorithmForm";
import AlgorithmResultsTable from "./AlgorithmResultsTable";
import "./App.css";

const App = () => {
    const [executions, setExecutions] = useState([]);

    return (
        <>
            <BridgeNavbar />
            <Jumbotron />
            <AlgorithmForm handleResponse={(data) => {
                setExecutions(data);
                }}/>
            <AlgorithmResultsTable 
            executions={executions}
            />
        </>
    );
};

export default App;
