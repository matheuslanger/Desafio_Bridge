package com.bridge.desafio_bridge.num;

import java.util.ArrayList;
import java.util.List;

public class Algorithm
{
    public Algorithm() {
    }

    public Algorithm(Integer input) {
        this.input = input;
    }

    public List<Integer> getDividers(Integer k) {

        List<Integer> list = new ArrayList<Integer>();

        for(int i = 1; i < k+1; i++){
            if(k % i == 0)
            {
                list.add(i);
            }
        }
        return list;
    }

    public Integer calcResult(Integer k){
        Integer counter = 0;
        for(int i = 2; i < k + 1; i++){
            if(getDividers(i).size() == getDividers(i + 1).size()){
                counter++;
            }
        }
        return counter;
    }

    private Integer input;

    public Integer getInput() {
        return input;
    }

    public void setInput(Integer input) {
        this.input = input;
    }

    public AlgorithmResult getResult() {
        Long time1 = System.nanoTime();
        Integer result = calcResult(getInput());
        Long time2 = System.nanoTime();
        Double executionTime = ((time2.doubleValue() - time1.doubleValue())/1000000.0);
        AlgorithmResult algResult = new AlgorithmResult(result, executionTime);
        return algResult;
    }

    @Override
    public String toString() {
        return "{" +
                "input=" + input +
                '}';
    }
}
