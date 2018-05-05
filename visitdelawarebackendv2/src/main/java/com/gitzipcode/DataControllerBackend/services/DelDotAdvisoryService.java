package com.gitzipcode.DataControllerBackend.services;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gitzipcode.DataControllerBackend.DAOs.DelDotAdvisory.TravelAdvisory;
import com.gitzipcode.DataControllerBackend.repos.DelDotAdvisoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;

@Service
public class DelDotAdvisoryService {

    @Autowired
    private DelDotAdvisoryRepo delDotAdvisoryRepo;
    private RestTemplate restTemplate = new RestTemplate();

    public ResponseEntity<Iterable<TravelAdvisory>> getAllAdvisories(){
        String url = "https://tmc.deldot.gov/json/advisory.json";
        TravelAdvisory[] travelAdvisories = null;
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("zipcode", "19801");
        HttpEntity<String> entity = new HttpEntity<>("parameters", httpHeaders);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        try{
            travelAdvisories = new ObjectMapper().readValue(responseEntity.getBody(), TravelAdvisory[].class);
        } catch (JsonParseException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        Iterable<TravelAdvisory> advisoryIterable = Arrays.asList(travelAdvisories);
        delDotAdvisoryRepo.save(advisoryIterable);
        return new ResponseEntity<>(delDotAdvisoryRepo.findAll(), HttpStatus.OK);
    }
}
