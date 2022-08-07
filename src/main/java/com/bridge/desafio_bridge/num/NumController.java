package com.bridge.desafio_bridge.num;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/numbers")
public class NumController
{
    @Autowired
    private NumService service;

    @PostMapping
    public Num addNum(@RequestBody Num num)
    {
        return service.saveNum(num);
    }

    @GetMapping
    public List<Num> getAllNums()
    {
        return service.getNums();
    }
}
