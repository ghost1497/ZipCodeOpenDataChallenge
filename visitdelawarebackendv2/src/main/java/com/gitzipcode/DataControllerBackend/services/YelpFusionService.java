package com.gitzipcode.DataControllerBackend.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gitzipcode.DataControllerBackend.DAOs.YelpFusion.Business;
import com.gitzipcode.DataControllerBackend.DAOs.YelpFusion.Yelp;
import com.gitzipcode.DataControllerBackend.repos.YelpFusionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

@Service
public class YelpFusionService {

    @Autowired
    private YelpFusionRepo yelpFusionRepo;
    private RestTemplate restTemplate = new RestTemplate();

    public ResponseEntity<?> getAllRestaurants(String type){
        String url = "https://api.yelp.com/v3/businesses/search?term=" + type +"&location=wilmington";
        Yelp yelpFusionResponse = null;
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Authorization", "Bearer CZ2DBpudAEnZUpaL6oLVLFdT0u_BFapHwxKo3Ad_5ulSzDjvoVFCiyVBTVcNoPOQ7wQWtmEgDHmRB06r5jlc5uO3wosCLzR3qFT9kX_1ui3AwYjrc7tT0Kw_kKjQWnYx");
        HttpEntity<String> entity = new HttpEntity<>("parameters", httpHeaders);
        ResponseEntity<String> responseEntity = restTemplate.exchange(url,
                HttpMethod.GET, entity, String.class);
        try {
            yelpFusionResponse = new ObjectMapper().readValue(responseEntity.getBody(), Yelp.class);
        } catch (MalformedURLException e) {
            System.out.println(e.getMessage());
        } catch (IOException e){
            System.out.println(e.getMessage());
        }
        Iterable<Business> yelpIterable = yelpFusionResponse.getBusinesses();
        yelpFusionRepo.save(yelpIterable);
        return new ResponseEntity<>(responseEntity.getBody(), HttpStatus.OK);
    }

}
