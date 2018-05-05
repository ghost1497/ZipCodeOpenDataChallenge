package com.gitzipcode.DataControllerBackend.services;
import com.gitzipcode.DataControllerBackend.DAOs.Profile;
import com.gitzipcode.DataControllerBackend.exceptions.ResourceNotFoundException;
import com.gitzipcode.DataControllerBackend.repos.ProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@Service
public class OnboardProfileService {

    @Autowired
    private ProfileRepo profileRepo;

    public ResponseEntity<Iterable<Profile>> getAllProfiles(){
        Iterable<Profile> profiles = profileRepo.findAll();
        return new ResponseEntity<>(profiles, HttpStatus.OK);
    }

    public ResponseEntity<?> getOneProfile(Integer id){
        return new ResponseEntity<>(profileRepo.findOne(id), HttpStatus.OK);
    }

    public ResponseEntity<?> postOne(Profile profile) {
        profile = profileRepo.save(profile);
        URI newPollUri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(profile.getId())
                .toUri();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(newPollUri);
        return new ResponseEntity<>(httpHeaders, HttpStatus.CREATED);
    }

    public ResponseEntity<?> updateProfile(Profile profile, Integer id) {
        try {
            verifyProfile(id);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Profile p = profileRepo.save(profile);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public ResponseEntity<?> deleteOneProfile(Integer id){
        try {
            verifyProfile(id);
        } catch (ResourceNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        profileRepo.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    public void verifyProfile(Integer profileId) throws ResourceNotFoundException {
        if (profileRepo.findOne(profileId) == null) {
            throw new ResourceNotFoundException();
        }
    }

    public ResponseEntity<?> getOneProfileByName(String name) {
        Iterable<Profile> profiles = getAllProfiles().getBody();
        Profile profile1 = new Profile();
        for(Profile profile : profiles){
            if(profile.getName().toLowerCase().equals(name.toLowerCase())){
                profile1 = profile;
            }
        }

        return new ResponseEntity<>(profile1, HttpStatus.OK);
    }
}
