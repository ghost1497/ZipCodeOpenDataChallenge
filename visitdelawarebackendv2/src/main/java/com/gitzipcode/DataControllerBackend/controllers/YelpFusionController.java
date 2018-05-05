package com.gitzipcode.DataControllerBackend.controllers;


import com.gitzipcode.DataControllerBackend.services.YelpFusionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class YelpFusionController {

    @Autowired
    private YelpFusionService yelpFusionService;


    @CrossOrigin
    @RequestMapping(value = "/restaurantsInDE/{type}", method = RequestMethod.GET)
    public ResponseEntity<?> getAllRestaurantsResults(@PathVariable String type){
        return yelpFusionService.getAllRestaurants(type);
    }
}
