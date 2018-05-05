package com.gitzipcode.DataControllerBackend.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gitzipcode.DataControllerBackend.DAOs.NationalParkApi.NationalParkDAO;
import com.gitzipcode.DataControllerBackend.DAOs.NationalParkApi.NationalParksApiResponse;
import com.gitzipcode.DataControllerBackend.repos.NParksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;

@Service
public class NParkService {

    @Autowired
    private NParksRepo nParksRepo;
    private RestTemplate restTemplate = new RestTemplate();


    public ResponseEntity<?> getAllParks(){
        String url = "https://developer.nps.gov/api/v1/parks?stateCode=DE&limit=15&api_key=MOIl5DXkgrc8OSrnOkSRiOBk7p9L223YCYesjvfh";
        NationalParksApiResponse nationalParksApiResponse = null;
        try {
            nationalParksApiResponse = new ObjectMapper().readValue(new URL(url), NationalParksApiResponse.class);
        } catch (MalformedURLException e){
            System.out.println(e.getMessage());
        } catch (IOException e){
            System.out.println(e.getMessage());
        }
        Iterable<NationalParkDAO> nationalParkDAOIterable = nationalParksApiResponse.getData();
        nParksRepo.save(nationalParkDAOIterable);
        return new ResponseEntity<>(nParksRepo.findAll(), HttpStatus.OK);

    }
}
