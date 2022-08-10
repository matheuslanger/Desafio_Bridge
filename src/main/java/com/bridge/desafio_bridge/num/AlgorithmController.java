package com.bridge.desafio_bridge.num;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/numbers")
public class AlgorithmController
{
    @Autowired
    private AlgorithmService service;

    @PostMapping
    public AlgorithmResult putNum(@RequestBody Algorithm algorithm)
    {
        return service.result(algorithm);
    }

}
