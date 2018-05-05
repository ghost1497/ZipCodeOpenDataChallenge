package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.services.YelpFusionService;
import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class YelpFusionServiceConfig {
    @Bean
    @Primary
    public YelpFusionService yelpFusionService(){
        return Mockito.mock(YelpFusionService.class);
    }

}
