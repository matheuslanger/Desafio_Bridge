package com.bridge.desafio_bridge.num;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class NumService
{
    @Autowired
    private NumRepository repository;

    public Num saveNum(Num p)
    {
        return repository.save(p);
    }

    public List<Num> getNums()
    {
        return repository.getAllNums();
    }



}
