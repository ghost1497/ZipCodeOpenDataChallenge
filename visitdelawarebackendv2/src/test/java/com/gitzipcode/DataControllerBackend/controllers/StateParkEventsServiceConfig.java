package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.services.StateParkEventsService;
import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class StateParkEventsServiceConfig {
    @Bean
    @Primary
    public StateParkEventsService stateParkEventsService(){
        return Mockito.mock(StateParkEventsService.class);
    }
}
