package com.bridge.desafio_bridge.num;

import org.springframework.stereotype.Service;

@Service
public class AlgorithmService
{

    public AlgorithmResult result(Algorithm p)
    {
        return p.getResult();
    }

}
