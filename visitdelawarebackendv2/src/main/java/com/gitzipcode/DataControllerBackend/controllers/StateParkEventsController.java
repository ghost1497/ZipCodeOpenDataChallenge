package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.DAOs.StateParkEvents;
import com.gitzipcode.DataControllerBackend.services.StateParkEventsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StateParkEventsController {

    @Autowired
    private StateParkEventsService stateParkEventsService;

    @CrossOrigin
    @RequestMapping(value = "/stateParkEvents", method = RequestMethod.GET)
    public ResponseEntity<Iterable<StateParkEvents>> getAllEventsFromApi(){
        return stateParkEventsService.getAllEvents();
    }
}
