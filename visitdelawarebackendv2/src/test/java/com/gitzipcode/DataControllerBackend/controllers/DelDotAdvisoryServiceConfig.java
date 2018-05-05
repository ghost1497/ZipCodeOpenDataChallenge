package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.services.DelDotAdvisoryService;
import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class DelDotAdvisoryServiceConfig {
    @Bean
    @Primary
    public DelDotAdvisoryService delDotAdvisoryService() {
        return Mockito.mock(DelDotAdvisoryService.class);
    }
}
