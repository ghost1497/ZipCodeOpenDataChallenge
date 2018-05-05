package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.DAOs.Profile;
import com.gitzipcode.DataControllerBackend.services.OnboardProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class ProfileController {

    @Autowired
    private OnboardProfileService onboardProfileService;

    @CrossOrigin
    @RequestMapping(value = "/profiles", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Profile>> getAllProfiles(){
        return onboardProfileService.getAllProfiles();
    }

    @CrossOrigin
    @RequestMapping(value = "/profiles/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getOneProfile(@PathVariable("id") Integer id){
        return onboardProfileService.getOneProfile(id);
    }

    @CrossOrigin
    @RequestMapping(value = "/profiles/findByName/{name}", method = RequestMethod.GET)
    public ResponseEntity<?> getOneProfileByName(@PathVariable("name") String name){
        return onboardProfileService.getOneProfileByName(name);
    }

    @CrossOrigin
    @RequestMapping(value = "/profiles", method = RequestMethod.POST)
    public ResponseEntity<?> postOneProfile(@Valid @RequestBody Profile profile){
        return onboardProfileService.postOne(profile);
    }

    @CrossOrigin
    @RequestMapping(value = "/profiles/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateProfile(@Valid @RequestBody Profile profile, @PathVariable("id") Integer id){
        return onboardProfileService.updateProfile(profile, id);
    }

    @CrossOrigin
    @RequestMapping(value = "/profiles/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteProfile(@PathVariable("id") Integer id){
        return onboardProfileService.deleteOneProfile(id);
    }
}