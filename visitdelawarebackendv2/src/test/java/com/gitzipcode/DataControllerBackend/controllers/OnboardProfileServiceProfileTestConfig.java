package com.gitzipcode.DataControllerBackend.controllers;

import com.gitzipcode.DataControllerBackend.services.OnboardProfileService;
import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class OnboardProfileServiceProfileTestConfig {
    @Bean
    @Primary
    public OnboardProfileService onboardProfileService() {
        return Mockito.mock(OnboardProfileService.class);
    }
}
