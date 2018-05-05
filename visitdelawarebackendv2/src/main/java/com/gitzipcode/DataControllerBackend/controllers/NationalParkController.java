package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.services.NParkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NationalParkController {

    @Autowired
    private NParkService nParkService;

    @CrossOrigin
    @RequestMapping(value = "/parksInDE", method = RequestMethod.GET)
    public ResponseEntity<?> getAllParkResults(){
        return nParkService.getAllParks();
    }
}
