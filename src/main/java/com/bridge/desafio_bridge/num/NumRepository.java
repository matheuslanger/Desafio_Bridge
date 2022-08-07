package com.bridge.desafio_bridge.num;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class NumRepository
{
    private List<Num> list = new ArrayList<Num>();

    public void createNums()
    {
        list = List.of(
        new Num(5, 1),
        new Num(4, 1)
            );
    }


    public List<Num> getAllNums()
    {
        return list;
    }

    public Num save(Num p)
    {
        Num num = new Num();
        num.setInput(p.getInput());
        num.setResult(p.getResult());
        list.add(num);
        return num;
    }
    
}
