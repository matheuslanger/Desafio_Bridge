package com.bridge.desafio_bridge.num;

public class AlgorithmResult {

    public AlgorithmResult(Integer result, Double executionTime) {
        this.result = result;
        this.executionTime = executionTime;
    }

    private Integer result;

    private Double executionTime;

    public Integer getResult() {
        return result;
    }

    public void setResult(Integer result) {
        this.result = result;
    }

    public Double getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(Double executionTime) {
        this.executionTime = executionTime;
    }
}
