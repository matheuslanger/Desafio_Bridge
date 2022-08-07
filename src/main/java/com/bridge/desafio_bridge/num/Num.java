package com.bridge.desafio_bridge.num;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Num
{
    public Num() {
    }

    public Num(Integer input, Integer result) {
        this.input = input;
        this.result = result;
    }

    private Integer input;

    private Integer result;

    public Integer getInput() {
        return input;
    }

    public void setInput(Integer input) {
        this.input = input;
    }

    public Integer getResult() {
        return result;
    }

    public void setResult(Integer result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "Num{" +
                "input=" + input +
                ", result=" + result +
                '}';
    }
}
