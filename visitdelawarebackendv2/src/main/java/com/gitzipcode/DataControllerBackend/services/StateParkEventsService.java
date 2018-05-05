package com.gitzipcode.DataControllerBackend.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gitzipcode.DataControllerBackend.DAOs.StateParkEvents;
import com.gitzipcode.DataControllerBackend.repos.StateParkEventsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;

@Service
public class StateParkEventsService {

    @Autowired
    private StateParkEventsRepo stateParkEventsRepo;

    public ResponseEntity<Iterable<StateParkEvents>> getAllEvents() {
        String url = "https://data.delaware.gov/resource/szr2-94w5.json";
        StateParkEvents[] stateParkEvents = null;
        try {
            stateParkEvents = new ObjectMapper().readValue(new URL(url), StateParkEvents[].class);
        } catch (MalformedURLException e){
            System.out.println(e.getMessage());
        } catch (IOException e){
            System.out.println(e.getMessage());
        }
        Iterable<StateParkEvents> stateParkEventsIterable = Arrays.asList(stateParkEvents);
        stateParkEventsRepo.save(stateParkEventsIterable);
        return new ResponseEntity<>(stateParkEventsRepo.findAll(), HttpStatus.OK);
    }
}
