package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.services.DelDotAdvisoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DelDotAdvisoryController {

    @Autowired
    private DelDotAdvisoryService delDotAdvisoryService;

    @RequestMapping(value = "/deldotTravelAd/{zipcode}", method = RequestMethod.GET)
    public ResponseEntity<?> getAllAdvisories(){
        return delDotAdvisoryService.getAllAdvisories();
    }
}
