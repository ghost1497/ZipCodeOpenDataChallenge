package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.services.NParkService;
import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class NParkServiceConfig {
    @Bean
    @Primary
    public NParkService nParkService() {
        return Mockito.mock(NParkService.class);
    }
}
